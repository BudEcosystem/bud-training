'use client';

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"
import { getPipelineConfig } from "../../../services/common-service";
import { useEffect, useState } from "react";


export default function ComponentProvider() {

    const [config, setConfig] = useState([])

    useEffect(() => {
        getConfig()
    }, [])

    const onDragStart = (event: any, nodeData: any, cat: string) => {
        nodeData['category'] = cat
        event.dataTransfer.setData("application/reactflow", JSON.stringify(nodeData));
        event.dataTransfer.effectAllowed = "move";
    };


    async function getConfig() {
        let res = await getPipelineConfig();

        if (res.status) {
            setConfig(res.data);
        } else {
            // toast.error(res.data.message);
        }
    }

    return (
        <div className="px-5 py-5">
            <div className="pb-2 mb-2">
                {/* <h3 className="text-base leading-6 text-gray-900">Components</h3> */}
            </div>
            {config.map((cat: any) => (
                <div key={cat.category_name}>
                    <div className="text-xs mb-2 leading-6 text-gray-400">{cat.category_name}</div>
                    {cat.nodes.map((node: any) => (
                        <div key={node.node_name} className="group flex justify-between items-center rounded-md border border-dashed border-gray-300 px-3 py-2 bg-gray-100 text-sm mb-5 cursor-pointer hover:bg-indigo-600 hover:text-white" draggable onDragStart={(event) => onDragStart(event, node, cat.category_name)}>
                            {node.node_name}
                            <AdjustmentsHorizontalIcon
                                className="h-4 w-4 shrink-0 group-hover:text-white"
                                aria-hidden="true"
                            />
                        </div>
                    ))}
                </div>
            ))}

        </div>
    )
}