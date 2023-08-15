
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline'
import { PhotoIcon } from '@heroicons/react/24/solid'

import Dropdown from '../dropdown'
import { addDataset, updateDataset } from '../../services/common-service'
import { showToast } from '../../services/toast-service'
import Loading from '../loading'

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
    const [loading, setLoading] = useState(false)
    const [datasetId, setDatasetId] = useState(null)
    const [name, setName] = useState('')
    const [sourceType, setSourceType] = useState(0)
    const [contentType, setContentType] = useState(0)
    const [source, setSource] = useState('')
    const [files, setFiles] = useState([] as any)
    const [imageFiles, setImageFiles] = useState([] as any)

    useEffect(() => {
        if (!init) {
            setInit(true)
            return
        }
        setOpen(true)
    }, [props.open])

    useEffect(() => {
        
        setDatasetId(props.data['dataset_id'])
        setName(props.data['name'])
        if (props.data['type'] || props.data['type'] == 0) setContentType(props.data['type'])
        if (props.data['source_type'] || props.data['source_type'] == 0) setSourceType(props.data['source_type'])
        setSource(props.data['source'])
        setFiles([])
        setImageFiles([])

    }, [props.data])

    async function addData() {
        console.log(name)
        if (!name) {
            showToast('error', 'Missing information', 'Please enter dataset name')
            return
        }
        if (sourceType == 0 && !source) {
            showToast('error', 'Missing information', 'Please enter huggingface repo')
            return
        }
        
        let data = {
            name: name,
            source_type: sourceType,
            type: contentType,
            source: source,
            id: datasetId,
            meta_file: files[0],
            archive_file: imageFiles[0]
        }
        setLoading(true)
        let res
        if (datasetId) {
            res = await updateDataset(data);
        } else {
            res = await addDataset(data);
        }

        setLoading(false)
        if (res.status == true) {
            console.log(res.data);
            //   setDatasets(res.data);
            showToast('success', 'Successfully done!', 'You can start using the data in the pipeline')
            setOpen(false)
            props.onClose()
        } else {
            console.log(res)
            showToast('error', 'Failed', res.data.detail)
        }
    }

    const validateFile = (file: any, type: string) => {
        let allowedExtensions: any = []
        if(type == 'json') allowedExtensions = ['json', 'jsonl'];
        if(type == 'image') allowedExtensions = ['zip'];
        const extension = file.name.split('.').pop().toLowerCase();
        return allowedExtensions.includes(extension);
      };


    const handleDrop = (type: string, action: string, event: any) => {
        
        event.preventDefault();
        let droppedFiles = [] as any
        if (action == 'drop') droppedFiles = Array.from(event.dataTransfer.files);
        if (action == 'change') droppedFiles = Array.from(event.target.files);
        

        const file = droppedFiles[0];
        if (file && validateFile(file, type)) {
            if (type == 'json') setFiles([droppedFiles[0]]);
            if (type == 'image') setImageFiles([droppedFiles[0]]);
        } else {
            let msg = ''
            if (type == 'json') msg = 'JSON and JSONL'
            if (type == 'image') msg = 'zip'
            showToast('error', 'Invalid file', 'Invalid file type. Only ' + msg + ' files are allowed.');
        }

    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';

        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));

        return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
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
                                                                    value={name}
                                                                    onChange={(event) => setName(event?.target.value)}
                                                                    className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Dropdown label="Source Type" options={sourceTypeList} selected={sourceType} onChange={(value: any) => setSourceType(value['id'])} disabled={datasetId != null}></Dropdown>
                                                        </div>
                                                        <div>
                                                            <Dropdown label="Content Type" options={contentTypeList} selected={contentType} onChange={(value: any) => setContentType(value['id'])} disabled={datasetId != null}></Dropdown>
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
                                                                        disabled={datasetId != null}
                                                                        value={source}
                                                                        onChange={(event) => setSource(event?.target.value)}
                                                                        className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    />
                                                                </div>
                                                            </div>
                                                        }
                                                        {(sourceType == 1 && !datasetId) &&
                                                            <div className="col-span-full">
                                                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    JSON file
                                                                </label>
                                                                {files.length < 1 && <div className="relative mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6 hover:bg-indigo-100 hover:border-indigo-600"
                                                                    onDrop={(event) => handleDrop('json', 'drop', event)}
                                                                >
                                                                    <div className="text-center">
                                                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-500" aria-hidden="true" />
                                                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                                            <label
                                                                                htmlFor="file-upload"
                                                                                className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                                            >
                                                                                <span>Upload a file</span>
                                                                            </label>
                                                                            <p className="pl-1">or drag and drop</p>
                                                                        </div>
                                                                        <p className="text-xs leading-5 text-gray-600">JSON, JSONL up to 200MB</p>
                                                                    </div>
                                                                    <input id="file-upload" name="file-upload" type="file" accept=".json,.jsonl" className="opacity-0 absolute inset-0 cursor-pointer" onChange={(event) => handleDrop('json', 'change', event)} />
                                                                </div>}
                                                                {files.map((item: any) => (
                                                                    <div className='bg-gray-100 py-3 px-3 flex rounded-md my-5 justify-between items-center'>
                                                                        <div className="flex">
                                                                            <DocumentChartBarIcon className="h-8 w-8 mr-2 text-indigo-400" aria-hidden="true" />
                                                                            <div className='w-100'>
                                                                                <p className='text-sm text-gray-700'>{item.name}</p>
                                                                                <p className='text-xs text-gray-500'>{formatFileSize(item.size)}</p>
                                                                            </div>
                                                                        </div>
                                                                        <XMarkIcon onClick={() => setFiles([])} className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-900" aria-hidden="true" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        }
                                                        {(sourceType == 1 && contentType == 1 && !datasetId) &&
                                                            <div className="col-span-full">
                                                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Image archive
                                                                </label>
                                                                {imageFiles.length < 1 && <div className="relative mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6 hover:bg-indigo-100 hover:border-indigo-600"
                                                                    onDrop={(event) => handleDrop('image', 'drop', event)}
                                                                >
                                                                    <div className="text-center">
                                                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-500" aria-hidden="true" />
                                                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                                            <label
                                                                                htmlFor="file-upload"
                                                                                className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                                            >
                                                                                <span>Upload a file</span>
                                                                            </label>
                                                                            <p className="pl-1">or drag and drop</p>
                                                                        </div>
                                                                        <p className="text-xs leading-5 text-gray-600">zip file up to 200MB</p>
                                                                    </div>
                                                                    <input id="file-upload" name="file-upload" type="file" accept=".zip" className="opacity-0 absolute inset-0 cursor-pointer" onChange={(event) => handleDrop('image', 'change', event)} />
                                                                </div>}
                                                                {imageFiles.map((item: any) => (
                                                                    <div className='bg-gray-100 py-3 px-3 flex rounded-md my-5 justify-between items-center'>
                                                                        <div className="flex">
                                                                            <DocumentChartBarIcon className="h-8 w-8 mr-2 text-indigo-400" aria-hidden="true" />
                                                                            <div className='w-72'>
                                                                                <p className='text-sm text-gray-700 text-ellipsis overflow-hidden'>{item.name}</p>
                                                                                <p className='text-xs text-gray-500'>{formatFileSize(item.size)}</p>
                                                                            </div>
                                                                        </div>
                                                                        <XMarkIcon onClick={() => setImageFiles([])} className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-900" aria-hidden="true" />
                                                                    </div>
                                                                ))}
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
                                                onClick={() => addData()}
                                            >
                                                Save
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
