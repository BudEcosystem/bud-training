
import { Handle, Position } from 'reactflow';
import { TrashIcon, BeakerIcon, ChartBarIcon, CircleStackIcon } from "@heroicons/react/24/outline"

export default function Node(data: any){
    // console.log(data)
    return(
        <div className='card border border-indigo-900 rounded py-1 pl-1 pr-1 text-xs bg-white '>
            <Handle
                type="target"
                position={Position.Left}
                id={"target."+ data.id + ".0"}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                // isConnectable={isConnectable}
            />
            <div className='flex justify-between items-center text-[8px]'>
                <p className='flex items-center pr-1 '>
                    
                    {data.data.category == "Training" && <BeakerIcon
                      className="h-3 w-3 mr-1 shrink-0 text-indigo-500"
                      aria-hidden="true"
                    />}
                    {data.data.category == "Eval" && <ChartBarIcon
                      className="h-3 w-3 mr-1 shrink-0 text-indigo-500"
                      aria-hidden="true"
                    />}
                    {data.data.category == "Data processing" && <CircleStackIcon
                      className="h-3 w-3 mr-1 shrink-0 text-indigo-500"
                      aria-hidden="true"
                    />}
                    {data.data.node_name}</p>
                <div className='deleteButton group rounded-full bg-gray-200 p-1 cursor-pointer hover:bg-indigo-500'>
                    <TrashIcon
                      className="h-2.5 w-2.5 shrink-0 group-hover:text-white"
                      aria-hidden="true"
                    />
                </div>
            </div>
            
            <Handle
                type="source"
                position={Position.Right}
                id={"source."+ data.id + ".0"}
                style={{ background: '#555' }}
                // isConnectable={isConnectable}
            />

        </div>
    )
}