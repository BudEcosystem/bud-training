
import { Handle, Position } from 'reactflow';
import { TrashIcon, ChartBarIcon } from "@heroicons/react/24/outline"

export default function EvalNode(){
    return(
        <div className='card border border-indigo-900 rounded py-2 pl-2 pr-1 text-xs bg-white w-32'>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                // isConnectable={isConnectable}
            />
            <div className='flex justify-between items-center'>
                <p className='flex items-center'>
                    <ChartBarIcon
                      className="h-3 w-3 mr-1 shrink-0 text-indigo-500"
                      aria-hidden="true"
                    />
                    Evaluate
                </p>
                <div className='group rounded-full bg-gray-200 p-1 cursor-pointer hover:bg-indigo-500'>
                <TrashIcon
                      className="h-2.5 w-2.5 shrink-0 group-hover:text-white"
                      aria-hidden="true"
                    />
                </div>
            </div>
            
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ background: '#555' }}
                // isConnectable={isConnectable}
            />

        </div>
    )
}