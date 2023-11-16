"use client"
import React from 'react';
import { useEffect, useState } from "react";
import { getExperiments, getPipelineDetail, startRun, updatePipeline } from "../../../services/common-service";
import Canvas from "./canvas";
import ComponentProvider from "./component-provider";
import { showToast } from "../../../services/toast-service";
import Loading from "../../loading";
import RunReport from "./run-report";
import RunList from "./run-list";
import ExecuteDetail from "./execute-detail";
import { error } from "console";


export default function PipelineView({ params }: { params: { id: string } }) {

    const tabs = [
        { name: 'Runs', href: '#', current: true },
        { name: 'Pipeline', href: '#', current: false },
    ]

    const [initialNodes, setInitialNodes] = useState([]);
    const [initialEdges, setInitialEdges] = useState([]);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState({} as any)
    const [currentTab, setCurrentTab] = useState('Pipeline')
    const [run, setRuns] = useState({} as any)
    const [showExecute, setShowExecute] = useState(false);

    useEffect(() => {
        getDetail()
        getRuns()
    }, [])

    useEffect(() => {
        getRuns()
    }, [currentTab])

    async function getDetail() {
        try {
            let res = await getPipelineDetail(params.id);
            if (res.status) {
                console.log(res)
                setDetails(res.data);
                console.log(details);
                setInitialNodes(res.data.agent_pipeline?.nodes ? res.data.agent_pipeline?.nodes : [])
                setInitialEdges(res.data.agent_pipeline?.edges ? res.data.agent_pipeline?.edges : [])
                
                // setInitialNodes(res.data.dags?.pipeline?.nodes ? res.data.dags?.pipeline?.nodes : [])
                // setInitialEdges(res.data.dags?.pipeline?.edges ? res.data.dags?.pipeline?.edges : [])
            } else {
                // toast.error(res.data.message);
            }
        } catch (error) {

        }
    }

    async function getRuns() {
        let res = await getExperiments(params.id);

        if (res.status) {
            console.log(res.data)
            setRuns(res.data);
            // setInitialNodes(res.data.dags?.pipeline?.nodes ? res.data.dags?.pipeline?.nodes : [])
            // setInitialEdges(res.data.dags?.pipeline?.edges ? res.data.dags?.pipeline?.edges : [])
        } else {
            // toast.error(res.data.message);
        }
    }

    async function saveData(saveNode: any = nodes, saveEdge: any = edges) {

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
    
    const onDeleteElements = (node: any, edges: any) => {
        setNodes(node);
        setEdges(edges)
    }

    const onNodesSave = (node: any, edges: any) => {
        // setNodes(node);
        // setEdges(edges)
        saveData(node, edges)
    }

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <div className="-mt-10 -mx-8 h-full">
            <div className="sticky top-14 z-10 flex justify-between items-center px-5 text-sm border-b-gray">
                <div className="flex items-center">
                    <div>{details.name}</div>
                    <div className="mt-4 sm:ml-10 sm:mt-0">
                        <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                                <a
                                    key={tab.name}
                                    href={tab.href}
                                    className={classNames(
                                        currentTab == tab.name
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                        'whitespace-nowrap border-b-2 px-1 pb-2 pt-3 text-sm font-medium'
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}
                                    onClick={() => setCurrentTab(tab.name)}
                                >
                                    {tab.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
                {currentTab == 'Pipeline' &&<div className="py-2 flex">
                    <div className="rounded-md bg-indigo-600 px-4 py-1.5 mr-4 text-white text-xs cursor-pointer hover:bg-indigo-500" onClick={() => setShowExecute(true)}>Execute</div>
                    <div className="rounded-md bg-indigo-600 px-4 py-1.5 mr-4 text-white text-xs cursor-pointer hover:bg-indigo-500" onClick={() => saveData(nodes, edges)}>Save</div>
                </div>}
                
            </div>
            <div className="fixed top-28 bottom-0 w-56 h-[-63px] border-r">
                {currentTab == 'Runs' && <RunList runs={run}></RunList>}
                {currentTab == 'Pipeline' && <ComponentProvider></ComponentProvider>}
            </div>
            <div className="pl-56 h-full">
                {currentTab == 'Runs' && <RunReport></RunReport>}
                {currentTab == 'Pipeline' && <Canvas onChange={onNodesChange} onSave={onNodesSave} nodes={initialNodes} edges={initialEdges}></Canvas>}
            </div>
            {loading && <Loading />}
            <ExecuteDetail open={showExecute} pieplineId={params.id}></ExecuteDetail>
        </div>)
}