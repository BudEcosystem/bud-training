from collie.controller.trainer import Trainer
from collie.optim.lomo import Lomo
from collie.module import GPTLMLoss
from collie.utils.monitor import StepTimeMonitor, TGSMonitor, MemoryMonitor, LossMonitor, EvalMonitor
from collie.callbacks import CheckpointCallback

def get_optimizer(model, args):
    return Lomo(
        model,
        lr = args.learning_rate,
        clip_grad_norm = 5.0
    )


def get_monitors(config):
    monitors = [
        StepTimeMonitor(config),
        TGSMonitor(config),
        MemoryMonitor(config),
        LossMonitor(config),
        EvalMonitor(config)
    ]
    return monitors

class BudTrainer(Trainer):

    def __init__(self, training_args, model, config, tokenizer, train_dataset):

        optimizer = get_optimizer(model, training_args)
        monitors = get_monitors(config)
        super().__init__(
            model = model,
            config=config,
            optimizer = optimizer,
            monitors = monitors,
            tokenizer = tokenizer,
            loss_fn = GPTLMLoss(-100),
            callbacks=[CheckpointCallback(training_args.output_dir, every_n_epochs=1, last=True, model_only=True)],
            train_dataset=train_dataset
        )
        self.training_args = training_args
