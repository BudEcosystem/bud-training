from itertools import chain


IGNORE_INDEX = -100

def prepare_data(dataset, data_args, tokenizer):

    template = {
        "prefix": "A chat between a curious human and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers to the human's questions.",
        "prompt": "USER: {query} ASSISTANT: ",
        "sep": "\n"
    }

    prompt_col = data_args.prompt_column
    response_col = data_args.response_column
    history_col = data_args.history_column

    def get_dialog(examples):
        dialogs = []
        
        for i in range(len(examples[prompt_col])):
            query = template['prefix'] + template['sep'] + template['prompt'].format(query=examples[prompt_col][i])
            response = examples[response_col][i]
            conv = [query, response]

            for turn, (user, bot) in enumerate(examples[history_col][i]):
                conv.append(template['prompt'].format(query=user))
                conv.append(bot)
            dialogs.append(conv)
        
        return dialogs


    def preprocess_pretrain_dataset(item):

        text_ids = tokenizer(item["text"], add_special_tokens=False)["input_ids"]
        concatenated_ids = list(chain(*text_ids))
        total_length = len(concatenated_ids)
        block_size = data_args.max_length - 1
        # we drop the small remainder, and if the total_length < block_size, we exclude this batch
        total_length = (total_length // block_size) * block_size
        # split by chunks of max_source_length
        result = [[tokenizer.bos_token_id] + concatenated_ids[i: i + block_size]
                  for i in range(0, total_length, block_size)]
        # print(len(result))
        return {
            "input_ids": result,
            "labels": result.copy()
        }

    def preprocess_supervised_dataset(item):
        #data format = {"prompt":"", "response": "", "history": []}
        
        dialogs = get_dialog(item)
        model_inputs = {"input_ids": [], "labels": []}
        
        for dialog in dialogs:
            input_ids, labels = [], []

            for i in range(len(dialog)//2):
                source_ids = tokenizer.encode(text=dialog[2*i], add_special_tokens=False)
                target_ids = tokenizer.encode(text=dialog[2*i+1], add_special_tokens=False)
                input_ids += source_ids + [tokenizer.bos_token_id] + target_ids + [tokenizer.eos_token_id]
                labels += [IGNORE_INDEX] * (len(source_ids) + 1) + target_ids + [tokenizer.eos_token_id]

            model_inputs["input_ids"].append(input_ids[:data_args.max_length])
            model_inputs["labels"].append(labels[:data_args.max_length])
        
        return model_inputs
    

    def print_supervised_dataset_example(example):
        print("input_ids:\n{}".format(example["input_ids"]))
        print("inputs:\n{}".format(tokenizer.decode(example["input_ids"], skip_special_tokens=False)))
        print("label_ids:\n{}".format(example["labels"]))


    if data_args.stage == 'pretrain':
        preprocess_func = preprocess_pretrain_dataset
    else:
        preprocess_func = preprocess_supervised_dataset

    cols = dataset.column_names
    dataset = dataset.map(
        preprocess_func,
        batched=True,
        remove_columns=cols,
        desc="Running tokenizer on dataset"
    )

    print_supervised_dataset_example(dataset[0])

    dataset = dataset.train_test_split(test_size=data_args.split_ratio)

    return dataset["train"], dataset["test"]