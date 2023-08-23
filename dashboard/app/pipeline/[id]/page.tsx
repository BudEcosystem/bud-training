"use client"

import { useEffect, useState } from "react";
import { getPipelineDetail, updatePipeline } from "../../../services/common-service";
import Canvas from "./canvas";
import ComponentProvider from "./component-provider";
import { showToast } from "../../../services/toast-service";
import Loading from "../../loading";


export default function PipelineView({ params }: { params: { id: string } }){

    const [initialNodes, setInitialNodes] = useState([]);
    const [initialEdges, setInitialEdges] = useState([]);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState({} as any)
    
    useEffect(() => {
        getDetail()
    }, [])

    async function getDetail() {
        let res = await getPipelineDetail(params.id);

        if (res.status) {
            setDetails(res.data);
            setInitialNodes(res.data.dags?.pipeline?.nodes ? res.data.dags?.pipeline?.nodes : [])
            setInitialEdges(res.data.dags?.pipeline?.edges ? res.data.dags?.pipeline?.edges : [])
        } else {
            // toast.error(res.data.message);
        }
    }

    async function saveData(saveNode: any = nodes, saveEdge: any = edges ) {

        let data = {
            id: params.id,
            dags: {
                pipeline: {
                    nodes: saveNode,
                    edges: saveEdge
                }
            }
        }
        console.log(data)
        // return
        setLoading(true)
        let res
        res = await updatePipeline(data);

        setLoading(false)
        if (res.status == true) {
            console.log(res.data);
            //   setDatasets(res.data);
            showToast('success', 'Successfully done!', 'Pipeline details are saved')
            
        } else {
            console.log(res)
            showToast('error', 'Failed', res.data.detail)
        }
    }

    const onNodesChange = (node: any, edges: any) => {
        setNodes(node);
        setEdges(edges)
    }

    const onNodesSave = (node: any, edges: any) => {
        // setNodes(node);
        // setEdges(edges)
        saveData(node, edges)
    }

    return(
    <div className="-mt-10 -mx-8 h-full">
        <div className="flex justify-between items-center py-3 px-5 bg-gray-100 text-sm border border-b-gray">
            <div>{details.name}</div>
            <div className="rounded-md bg-indigo-600 px-4 py-1.5 mr-4 text-white text-xs cursor-pointer hover:bg-indigo-500" onClick={() => saveData(nodes, edges)}>Save</div>
        </div>
        <div className="fixed top-32 bottom-0 left-60 w-56 h-[-63px] border-r">
            <ComponentProvider></ComponentProvider>
        </div>
        <div className="lg:pl-56 h-full">
            <Canvas onChange={onNodesChange} onSave={onNodesSave} nodes={initialNodes} edges={initialEdges}></Canvas>
        </div>
        {loading && <Loading />}
    </div>)
}