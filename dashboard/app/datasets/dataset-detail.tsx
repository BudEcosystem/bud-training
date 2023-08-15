
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { PhotoIcon } from '@heroicons/react/24/solid'

import Dropdown from '../dropdown'
import { addDataset } from '../../services/common-service'
import { showToast } from '../../services/toast-service'

export default function DatasetDetail(props: any) {

    const sourceTypeList = [
        { id: 1, name: "Local upload" },
        { id: 0, name: "Huggingface" }
    ]

    const contentTypeList = [
        { id: 0, name: "Text" },
        { id: 1, name: "Text + Image" }
    ]

    const [open, setOpen] = useState(false)
    const [init, setInit] = useState(false)
    const [name, setName] = useState('')
    const [sourceType, setSourceType] = useState(0)
    const [contentType, setContentType] = useState(0)
    const [source, setSource] = useState('')
    
    useEffect(() => {
        if(!init){
            setInit(true)
            return
        }
        setOpen(true)
    }, [props.open])

    useEffect(() => {
        setName(props.data['name'])
        setSourceType(props.data['source_type'])
        setSource(props.data['source'])
        setContentType(props.data['type'])
    }, [props.data])

    async function addData() {
        
        if(!name){
            showToast('error', 'Missing information', 'Please enter dataset name')
            return
        }
        if(sourceType == 0 && !source){
            showToast('error', 'Missing information', 'Please enter huggingface repo')
            return
        }

        let data = {
            name: name,
            source_type: sourceType,
            type: contentType, 
            source: source
        }
        let res = await addDataset(data);
        if (res.status == 200) {
          console.log(res.data);
        //   setDatasets(res.data);
        showToast('success', 'Successfully done!', 'You can start using the data in the pipeline')
        } else {
          // toast.error(res.data.message);
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
                                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                        <div className="h-0 flex-1 overflow-y-auto">
                                            <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <Dialog.Title className="text-base font-semibold leading-6 text-white">
                                                        Dataset
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
                                                        Update the dataset details
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between">
                                                <div className="divide-y divide-gray-200 px-4 sm:px-6">
                                                    <div className="space-y-6 pb-5 pt-6">
                                                        <div>
                                                            <label
                                                                htmlFor="project-name"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Dataset Name
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="project-name"
                                                                    id="project-name"
                                                                    defaultValue={name}
                                                                    className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Dropdown label="Source Type" options={sourceTypeList} selected={sourceType} onChange={(value: any) => setSourceType(value['id'])}></Dropdown>
                                                        </div>
                                                        <div>
                                                            <Dropdown label="Content Type" options={contentTypeList} selected={contentType} onChange={(value: any) => setContentType(value['id'])}></Dropdown>
                                                        </div>
                                                        {sourceType == 0 && 
                                                        <div>
                                                            <label
                                                                htmlFor="source-name"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Huggingface name
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="source-name"
                                                                    id="source-name"
                                                                    defaultValue={source}
                                                                    className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>
                                                        }
                                                        {sourceType == 1 && 
                                                        <div className="col-span-full">
                                                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Custom file
                                                            </label>
                                                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
                                                                <div className="text-center">
                                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                                        <label
                                                                            htmlFor="file-upload"
                                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                                        >
                                                                            <span>Upload a file</span>
                                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                                        </label>
                                                                        <p className="pl-1">or drag and drop</p>
                                                                    </div>
                                                                    <p className="text-xs leading-5 text-gray-600">JSON, JSONL up to 200MB</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        }
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
                                                onClick={()=> addData()}
                                            >
                                                Save
                                            </button>
                                        </div>
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
