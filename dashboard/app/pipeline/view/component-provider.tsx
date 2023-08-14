'use client';

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"
import { Title } from "@tremor/react"


export default function ComponentProvider(){

    const onDragStart = (event: any, nodeType: any) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
      };

    return(
        <div className="px-5 py-5">
            <div className="pb-2 mb-5">
                <h3 className="text-base leading-6 text-gray-900">Components</h3>
            </div>
            <div className="group flex justify-between items-center rounded-md border border-dashed border-gray-300 px-3 py-2 bg-gray-100 text-sm mb-5 cursor-pointer hover:bg-indigo-600 hover:text-white" draggable onDragStart={(event) => onDragStart(event, 'trainerNode')}>
                Trainer
                <AdjustmentsHorizontalIcon
                      className="h-4 w-4 shrink-0 group-hover:text-white"
                      aria-hidden="true"
                    />
            </div>
            <div className="group flex justify-between items-center rounded-md border border-dashed border-gray-300 px-3 py-2 bg-gray-100 text-sm mb-5 cursor-pointer hover:bg-indigo-600 hover:text-white" draggable onDragStart={(event) => onDragStart(event, 'evaluateNode')}>
                Eval
                <AdjustmentsHorizontalIcon
                      className="h-4 w-4 shrink-0 group-hover:text-white"
                      aria-hidden="true"
                    />
            </div>
        </div>
    )
}