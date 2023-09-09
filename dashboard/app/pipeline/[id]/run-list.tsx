import { TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"


export default function RunList(props: any){

    const [activeRun, setActiveRun] = useState('')

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }

    return(
        <>

            <div className="overflow-auto h-full">
                {!props.runs.length && <div className="my-10 px-5">

                    <h3 className="mt-2 text-sm font-semibold text-gray-900">No runs</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by executing a pipeline.</p>
                </div>}
                {props.runs.map((item: any, index: any) => (
                    <div className={classNames(
                        activeRun == item.run_id ? "bg-gray-200" : "",
                        "flex justify-between items-center px-4 py-3 text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap cursor-pointer border border-b border-gray-100 hover:bg-gray-200")}
                        onClick={() => setActiveRun(item.run_id)}
                        key={index}
                        >
                            <>{item.name}</>
                            <TrashIcon
                              className="h-4 w-4 shrink-0 text-gray-500 hover:text-gray-800"
                              aria-hidden="true"
                            />
                        </div>
                ))}
            </div>
        </>
    )
}