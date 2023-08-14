'use client';

import React, { useCallback, useRef, useState } from 'react';
import { useNodesState, useEdgesState, addEdge, ReactFlow, ReactFlowProvider, Controls, MiniMap, Background, BackgroundVariant } from 'reactflow';

import 'reactflow/dist/style.css';
import TrainNode from './components/train-node';
import EvalNode from './components/eval-node';
import ComponentDetail from './component-detail';

const initialNodes = [
    { id: '1', type:'trainerNode', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', type:'evaluateNode', position: { x: 200, y: 0 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = {
    trainerNode: TrainNode,
    evaluateNode: EvalNode
}

export default function Canvas() {

    const reactFlowWrapper = useRef({} as any);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState({} as any);
    const [showNodeDetails, setShowDetails] = useState(false);

    let id = 0;
    const getId = () => `dndnode_${id++}`;
    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onDrop = useCallback(
        (event: { preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; clientX: number; clientY: number; }) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');
            console.log(type)
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type} node` },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event: any) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      }, []);
    
    const onNodeClick = () => {setShowDetails(true)}

    return (
        <div style={{ width: '100vw', height: '100%' }}>
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
            <ComponentDetail open={showNodeDetails}></ComponentDetail>
        </div>
        
    );
}