'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNodesState, useEdgesState, addEdge, ReactFlow, ReactFlowProvider, Controls, MiniMap, Background, BackgroundVariant } from 'reactflow';

import 'reactflow/dist/style.css';
import Node from './components/node';
import ComponentDetail from './component-detail';
import { node } from 'prop-types';
import NotebookView from './notebook-view';
import ExecuteDetail from './execute-detail';


const nodeTypes = {
    node: Node
}

export default function Canvas(props: any) {

    const initialNodes: any = [
        {
            "id": "dndnode_0",
            "type": "node",
            "position": {
                "x": 18.773013741339867,
                "y": 55.43821674362884
            },
            "data": {
                "node_id": 0,
                "node_name": "LLM Finetuning",
                "description": "LLM Finetuning",
                "properties": [
                    {
                        "name": "dataset",
                        "default": null,
                        "description": "Dataset for training",
                        "title": "Dataset",
                        "type": 5,
                        "type_alias": "dataset"
                    },
                    {
                        "name": "base_model",
                        "default": null,
                        "description": "Base model for training",
                        "title": "Base Model",
                        "type": 6,
                        "type_alias": "model"
                    },
                    {
                        "name": "dp_size",
                        "default": 1,
                        "description": "Data parallelism count",
                        "title": "Dp Size",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "eval_batch_size",
                        "default": 4,
                        "description": "eval batch size per device",
                        "title": "Eval Batch Size",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "eval_per_n_steps",
                        "default": 200,
                        "description": "every n steps for eval",
                        "title": "Eval Per N Steps",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "history_column",
                        "default": "history",
                        "description": "Column name for history column",
                        "title": "History Column",
                        "type": 2,
                        "type_alias": "string"
                    },
                    {
                        "name": "learning_rate",
                        "default": 0.01,
                        "description": "Learning rate for the training",
                        "title": "Learning Rate",
                        "type": 1,
                        "type_alias": "number"
                    },
                    {
                        "name": "max_length",
                        "default": 2048,
                        "description": "The cut off length for the tokenizer",
                        "title": "Max Length",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "optimizer",
                        "default": "efficient",
                        "description": "Optimizer to be used. [efficient, adamw]",
                        "title": "Optimizer",
                        "type": 2,
                        "type_alias": "string"
                    },
                    {
                        "name": "pp_size",
                        "default": 1,
                        "description": "Pipeline parallelism count",
                        "title": "Pp Size",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "prompt_column",
                        "default": "prompt",
                        "description": "Column name for prompt column",
                        "title": "Prompt Column",
                        "type": 2,
                        "type_alias": "string"
                    },
                    {
                        "name": "prompt_template",
                        "default": "default",
                        "description": "Prompt template to be used for the model input",
                        "title": "Prompt Template",
                        "type": 2,
                        "type_alias": "string"
                    },
                    {
                        "name": "response_column",
                        "default": "response",
                        "description": "Column name for response column",
                        "title": "Response Column",
                        "type": 2,
                        "type_alias": "string"
                    },
                    {
                        "name": "split",
                        "default": "train",
                        "description": "split of the json file or dataset from huggingface",
                        "title": "Split",
                        "type": 2,
                        "type_alias": "string"
                    },
                    {
                        "name": "split_ratio",
                        "default": 0.05,
                        "description": "Test/Validation split ratio",
                        "title": "Split Ratio",
                        "type": 1,
                        "type_alias": "number"
                    },
                    {
                        "name": "stage",
                        "default": "sft",
                        "description": "training stage",
                        "title": "Stage",
                        "type": 4,
                        "type_alias": "list"
                    },
                    {
                        "name": "tp_size",
                        "default": 1,
                        "description": "Tensor parallelism count",
                        "title": "Tp Size",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "train_epochs",
                        "default": 3,
                        "description": "number epochs for train",
                        "title": "Train Epochs",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "train_micro_batch_size",
                        "default": 4,
                        "description": "micro batch size per device",
                        "title": "Train Micro Batch Size",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "train_type",
                        "default": "full",
                        "description": "training type",
                        "title": "Train Type",
                        "type": 2,
                        "type_alias": "string"
                    },
                    {
                        "name": "trust_remote_code",
                        "default": true,
                        "description": "Allow loading remote code for tokenizer",
                        "title": "Trust Remote Code",
                        "type": 3,
                        "type_alias": "boolean"
                    }
                ],
                "outputs": [
                    {
                        "name": "model",
                        "default": null,
                        "description": "Finetuned Model Checkpoint",
                        "title": "Model",
                        "type": 6,
                        "type_alias": "model"
                    }
                ],
                "category_id": 0,
                "category_name": "Training",
                "family_id": 0,
                "family_name": "LLaMa",
                "category": "Training"
            },
            "width": 176,
            "height": 36,
            "selected": true,
            "positionAbsolute": {
                "x": 18.773013741339867,
                "y": 55.43821674362884
            },
            "dragging": false
        },
        {
            "id": "dndnode_1",
            "type": "node",
            "position": {
                "x": 246.3923328789831,
                "y": 150.02571844224497
            },
            "data": {
                "node_id": 2,
                "node_name": "HumanEval",
                "description": "LLM HumanEval",
                "properties": [
                    {
                        "name": "model_path",
                        "default": null,
                        "description": "Model to be evaluated",
                        "title": "Model",
                        "type": 6,
                        "type_alias": "model"
                    },
                    {
                        "name": "n_sample",
                        "default": 1,
                        "description": "Number of samples to generate per prompt",
                        "title": "N Samples",
                        "type": 0,
                        "type_alias": "integer"
                    },
                    {
                        "name": "load_8bit",
                        "default": true,
                        "description": "Use 8-bit precision",
                        "title": "Load 8bit",
                        "type": 3,
                        "type_alias": "boolean"
                    }
                ],
                "outputs": [
                    {
                        "name": "result",
                        "default": null,
                        "description": "Evaluation results",
                        "title": "Result",
                        "type": 2,
                        "type_alias": "string"
                    }
                ],
                "category_id": 1,
                "category_name": "Eval",
                "family_id": 0,
                "family_name": "LLaMa",
                "category": "Eval"
            },
            "width": 176,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 246.3923328789831,
                "y": 150.02571844224497
            },
            "dragging": false
        }
    ]

    const initialEdges = [
        {
            "source": "dndnode_0",
            "sourceHandle": "source.dndnode_0.1",
            "target": "dndnode_1",
            "targetHandle": "target.dndnode_1.1",
            "id": "reactflow__edge-dndnode_0source.dndnode_0.1-dndnode_1target.dndnode_1.1"
        }
    ]

    const reactFlowWrapper = useRef({} as any);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState({} as any);
    const [showNodeDetails, setShowDetails] = useState(false);
    const [showNotebook, setShowNotebook] = useState(false);
    const [selected, setSelected] = useState({} as any);

    useEffect(() => {
        props.onChange(nodes, edges)
    }, [nodes, edges])

    useEffect(() => {
        console.log(props, "props")
        // setNodes(initialNodes)
        setNodes(props.nodes)
        setEdges(props.edges)
        console.log(props.nodes, props.edges)
        console.log("nodes", nodes)
        setTimeout(() => {reactFlowInstance.setView}, 1000);
    }, [props.nodes, props.edges])

    let id = 0;
    const getId = () => {
        // let id = 0
        // console.log(nodes)
        // let lastNode = nodes[nodes.length - 1]
        // console.log(lastNode)
        // if(lastNode){
        //     id = Number(lastNode.id.split('_')[1])
            
        //     id += 1
        //     console.log(id)
        // }
        return `dndnode_${id++}`
    };
    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const formatNode = (data: any, nodeId: any) => {

        console.log(data)
        data.outputs.map((item: any, index: number)=>{ 
            item['id'] = nodeId + "." + (index + 1)
            return item
        })
        data.inputs.map((item: any, index: number)=>{ 
            item['id'] = nodeId + "." + (index + 1)
            return item
        })

        return data
    }

    const onDrop = useCallback(
        (event: { preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; clientX: number; clientY: number; }) => {
            event.preventDefault();
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            console.log(data)
            // check if the dropped element is valid
            if (typeof data === 'undefined' || !data) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const nodeId = getId()
            const newNode = {
                id: nodeId,
                type: 'node',
                position,
                data: formatNode(data, nodeId),
            };
            console.log(newNode)
            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event: any) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);
    const deleteNodeById = (id: string) => {
        setNodes(nds => nds.filter(node => node.id !== id));
    };
    const onNodeClick = (event: any, node: any) => {
        event.stopPropagation();
        let deleteButton = event.target.className.split(' ');
        if(deleteButton[0] == 'deleteButton') {
            deleteNodeById(node.id)
            return;
        }
        setSelected(node)
        console.log("node", node)
        console.log(showNodeDetails)
        console.log(onUpdateProperties)
        console.log(selected)
        // console.log(showNotebook)
        if(node.data.category_id == 2){
            setShowNotebook(!showNotebook)
        } else {
            setShowDetails(!showNodeDetails)
        }
    }
    const onUpdateProperties = (item: any) => {
        for(let nd of nodes){
            if(nd.id == selected.id){
                nd.data = item
            }
        }
        // setShowDetails(!showNodeDetails)
        setNodes(nodes)
        props.onSave(nodes, edges)
        // setSelected({})
        console.log(showNodeDetails)
        console.log(selected)
        console.log(item)
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ReactFlowProvider>
                {/* <ReactFlow nodes={initialNodes} edges={initialEdges} /> */}
                <div ref={reactFlowWrapper} className='h-full'>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        // onNodesDelete={deleteConfirm}
                        nodeTypes={nodeTypes}
                        fitView
                        onNodeClick={onNodeClick}
                    >
                        <Controls />
                        <MiniMap />
                        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                    </ReactFlow>
                </div>

            </ReactFlowProvider>
            <ComponentDetail open={showNodeDetails} selected={selected} onSave={onUpdateProperties}></ComponentDetail>
            <NotebookView open={showNotebook} selected={selected} onSave={onUpdateProperties}></NotebookView>
        </div>

    );
}