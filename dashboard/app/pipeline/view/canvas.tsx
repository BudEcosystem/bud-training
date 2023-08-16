'use client';

import React, { useCallback, useRef, useState } from 'react';
import { useNodesState, useEdgesState, addEdge, ReactFlow, ReactFlowProvider, Controls, MiniMap, Background, BackgroundVariant } from 'reactflow';

import 'reactflow/dist/style.css';
import Node from './components/node';
import ComponentDetail from './component-detail';


const nodeTypes = {
    node: Node
}

export default function Canvas() {

    const reactFlowWrapper = useRef({} as any);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState({} as any);
    const [showNodeDetails, setShowDetails] = useState(false);
    const [selected, setSelected] = useState(null);

    let id = 0;
    const getId = () => `dndnode_${id++}`;
    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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
            const newNode = {
                id: getId(),
                type: 'node',
                position,
                data: data,
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event: any) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);

    const onNodeClick = (event: any, node: any) => {
        console.log('clicked', node);
        setSelected(node)
        setShowDetails(!showNodeDetails)
    }

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