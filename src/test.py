from transformers import LlamaTokenizer, LlamaConfig
from collie.config import CollieConfig
from collie.data import CollieDatasetForTraining
from collie.data import CollieDataLoader
from collie.optim.lomo import Lomo
from collie.controller.trainer import Trainer
from collie.controller.evaluator import EvaluatorForPerplexity, EvaluatorForGeneration
#from collie.models.moss_moon import Moss003MoonForCausalLM
from collie.utils.monitor import StepTimeMonitor, TGSMonitor, MemoryMonitor, LossMonitor, EvalMonitor
from collie.metrics import DecodeMetric, PPLMetric
from collie.module import GPTLMLoss
from collie.utils.data_provider import GradioProvider
from collie import LlamaForCausalLM
from collie.callbacks import CheckpointCallback
from datasets import load_dataset

from utils.preprocess_data import prepare_data

pretrained_model = 'meta-llama/Llama-2-13b-hf'
#pretrained_model = 'daryl149/llama-2-70b-chat-hf'
# pretrained_model = 'huggyllama/llama-7b'
save_path = 'output/'

config = CollieConfig.from_pretrained(pretrained_model, trust_remote_code=True)
# 张量并行
config.tp_size = 2
# 数据并行
config.dp_size = 4
# 流水线并行
config.pp_size = 1
# 训练的epoch数量
config.train_epochs = 3
# 每{100}个step进行一次eval
config.eval_per_n_steps = 100
# 每{1}个epoch进行一次eval
config.eval_per_n_epochs = 1 
# 每个GPU的batch_size设置为{16}
config.train_micro_batch_size = 4
# 每次eval的batch_size为{1}
config.eval_batch_size = 1
# 设置DeepSpeed配置
config.ds_config = {
        # 开启FP16
        "fp16": {
            "enabled": True
        },
        "zero_allow_untested_optimizer": True,
        "zero_force_ds_cpu_optimizer": True,
        # 开启ZeRO-3
        "zero_optimization": {
            "stage": 3,
            "overlap_comm": True,
            "contiguous_gradients": True,
            "sub_group_size": 1e9,
            "reduce_bucket_size": "auto",
            "stage3_prefetch_bucket_size": "auto",
            "stage3_param_persistence_threshold": "auto",
            "stage3_max_live_parameters": 1e9,
            "stage3_max_reuse_distance": 1e9,
            "stage3_gather_16bit_weights_on_model_save": True
        },
        "monitor_config": {
            "enabled": True,
            "tag": "identity-v1",
            "csv_monitor": {
                "enabled": True,
                "output_path": "./ds_logs/"
            },
            "wandb": {
                "enabled": True,
                "team": "bud-a",
                "project": "collie",
                "group": "70B"
            }
        }
}

# config.model_config = LlamaConfig(rope_scaling={"type": "linear", "factor": 4.0})

tokenizer = LlamaTokenizer.from_pretrained(pretrained_model, trust_remote_code=True)

def generate_dialogue_prompt(data_point):

    IGNORE_INDEX = -100
    SYSTEM = "A chat between a curious user and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers to the user's questions.\n"
    USER = ' USER'
    ASSITANT = ' ASSISTANT'
    sep = ': '

    conversations = data_point['conversations']
    input_ids, labels = [], []

    for i in range(len(conversations) // 2):
        user = USER + sep + conversations[2*i]['value'] + ASSITANT + sep
        assistant =  conversations[2*i+1]['value']

        if i == 0:
            user = SYSTEM + user
        source_ids = tokenizer.encode(text=user)
        target_ids = tokenizer.encode(text=assistant)
        input_ids += source_ids + target_ids + [tokenizer.eos_token_id]
        labels += [IGNORE_INDEX] * (len(source_ids)) + target_ids + [tokenizer.eos_token_id]

    return dict(
        input_ids=input_ids,
        labels=labels,
    )


# data_path = '/data/sample.json'
data_path = '/root/bud-training/data/dummy_conversation.json'

if data_path.endswith(".json") or data_path.endswith(".jsonl"):
    data = load_dataset("json", data_files=data_path)
else:
    data = load_dataset(data_path)
cols = data["train"].column_names
# train_dataset = data["train"].map(generate_dialogue_prompt).remove_columns(cols)

# train_val = train_dataset.train_test_split(
#     test_size=20, shuffle=False, seed=42
# )
# train_dataset = train_val['train']
# eval_dataset = train_val['test']

# print(len(train_dataset))
# print(train_dataset[0])
# print(eval_dataset)

args = {
    'prompt_column': 'instruction',
    'response_column': 'output',
    'history_column': 'history',
    'max_length': 2048,
}
train_dataset, eval_dataset = prepare_data(data['train'], args, tokenizer)
train_dataset = train_dataset.remove_columns(cols)
print(train_dataset)
print(train_dataset[0])

model = LlamaForCausalLM.from_pretrained(pretrained_model, config=config)

optimizer = Lomo(
    model,
    lr = 0.01,
    clip_grad_norm = 5.0
)
#optimizer = torch.optim.AdamW(model.parameters(), lr=2e-5)
monitors = [
    # 每个step用时监测
    StepTimeMonitor(config),
    # TGS（每秒生成token数量监测）
    TGSMonitor(config),
    # 显存使用情况监测
    MemoryMonitor(config),
    # Loss值监测
    LossMonitor(config),
    # Eval结果监测
    EvalMonitor(config)
]

evaluator_ppl = EvaluatorForPerplexity(
    model = model,
    config = config,
    dataset = eval_dataset,
    monitors = [
        EvalMonitor(config)
    ],
    metrics = {
        'ppl': PPLMetric()
    }
)
evaluator_decode = EvaluatorForGeneration(
    model = model,
    config = config,
    tokenizer = tokenizer,
    dataset = eval_dataset,
    monitors = [
        EvalMonitor(config)
    ],
    metrics = {
        'decode': DecodeMetric()
    }

)

every_n_epochs = 1
every_n_batches = 10
last = True
model_only = True
callbacks = [CheckpointCallback(save_path, every_n_epochs=every_n_epochs,last=last, model_only=model_only)]


trainer = Trainer(
    model = model,
    config = config,
    loss_fn = GPTLMLoss(-100),
    optimizer = optimizer,
    train_dataset = train_dataset,
    monitors = monitors,
    evaluators = [evaluator_ppl, evaluator_decode],
    callbacks=callbacks
)
# 开始训练/验证
trainer.train()

# trainer.save_model(path='output/lomo')
# trainer.save_checkpoint(path="output/lomo", mode="model")