'use client';

import _ from 'lodash';
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"
import { getPipelineConfig } from "../../../services/common-service";
import { useEffect, useState } from "react";
import Search from "../../search";


export default function ComponentProvider() {

    const [config, setConfig] = useState([])
    const [initialConfig, setInitialConfig] = useState([] as any)

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
            setInitialConfig(res.data)
        } else {
            // toast.error(res.data.message);
        }
    }

    const filterData = (val: any) => {
        // let filtered = initialConfig.filter((item: any) => item.name.toLowerCase().includes(val.toLowerCase()))
        // let conList = initialConfig
        let finalList: any = []
        const conList = _.cloneDeep(initialConfig);
        for(let cat of conList){
            let filtered = cat['nodes'].filter((item: any) => item.node_name.toLowerCase().includes(val.toLowerCase()))
            cat['nodes'] = filtered
            if(filtered.length) finalList.push(cat)
        }
        setConfig(finalList)
    }

    return (
        <div className="px-5 pb-5 overflow-auto h-full">
            <div className="pb-2 mb-2">
                {/* <h3 className="text-base leading-6 text-gray-900">Components</h3> */}
                <Search onChange={filterData}/>
            </div>
            {config.map((cat: any) => (
                <div key={cat.category_name}>
                    <div className="text-xs mb-2 leading-6 text-gray-400">{cat.category_name}</div>
                    {cat.nodes.map((node: any) => (
                        <div key={node.node_name} className="group flex justify-between items-center rounded-md border border-dashed border-gray-300 px-3 py-2 bg-gray-100 text-sm mb-3 cursor-pointer hover:bg-indigo-600 hover:text-white" draggable onDragStart={(event) => onDragStart(event, node, cat.category_name)}>
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