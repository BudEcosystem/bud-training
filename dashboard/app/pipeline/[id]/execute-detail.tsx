'use client'

import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { addPipeline, startRun, updatePipeline } from '../../../services/common-service'
import { showToast } from '../../../services/toast-service'
import Loading from '../../loading'
import Dropdown from '../../dropdown'

export default function ExecuteDetail(props: any) {
  const clusterList = [
    { id: 1, name: "cluster-dev" },
    { id: 0, name: "cluser-stage" }
  ]

  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [init, setInit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pieplineId, setPipelineId] = useState(null)
  const [cluster, setCluster] = useState('')

  useEffect(() => {
    if (!init) {
      setInit(true)
      return
    }
    setOpen(true)
  }, [props.open])

  useEffect(() => {

    setPipelineId(props.pieplineId)

  }, [props.pieplineId])

  async function executePipeline() {

    // return
    setLoading(true)
    let res
    res = await startRun(pieplineId);

    setLoading(false)
    if (res.status == true) {
        console.log(res.data);
        //   setDatasets(res.data);
        showToast('success', 'Successfully done!', 'Execution started')

    } else {
        console.log(res)
        showToast('error', 'Failed', res.data.detail)
    }
}

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* <div className="fixed inset-0" /> */}

        <div className="fixed top-16 bottom-0 overflow-hidden">
          <div className="absolute top-16 bottom-0 overflow-hidden">
            <div className="pointer-events-none fixed top-16 bottom-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="relative flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            Run pipeline
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-indigo-300">
                            Choose the cluster to run
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              <div className="mt-2">
                                <Dropdown label="Cluster Name" options={clusterList} selected={cluster} onChange={(value: any) => setCluster(value['id'])}></Dropdown>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => executePipeline()}
                      >
                        Execute
                      </button>
                    </div>
                    {loading && <Loading />}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
