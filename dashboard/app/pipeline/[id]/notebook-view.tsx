
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import TextField from './components/text-field'
import DatasetField from './components/dataset-field'
import ModelField from './components/model-field'
import BoolField from './components/bool-field'
import ListField from './components/list-field'
import { startNotebook } from '../../../services/common-service'

export default function NotebookView(props: any) {
  const nodeSchema = {
    node_name: '',
    description: '',
    inputs: []
  }

  const [open, setOpen] = useState(false)
  const [init, setInit] = useState(false)
  const [node, setNode] = useState(nodeSchema as any)
  const [notebookUrl, setNotebookUrl] = useState("http://216.48.187.144:9743/user/test001/test001-server/notebooks/Updated%2Bval.ipynb")

  useEffect(() => {
    console.log('show')
    if (!init) {
      setInit(true)
      return
    }
    setOpen(true)
  }, [props.open])

  useEffect(() => {
    console.log(props.selected?.data)
    if (props.selected?.data) setNode(props.selected?.data)
    if (props.selected?.data?.category_id == 2) initiateNotebook()
    if (props.selected?.data?.outputs[0].value) initiateNotebook()
    console.log(node);
  }, [props.selected])

  const initiateNotebook = async () => {
    
    // setLoading(true)
    let res = await startNotebook('5fc0767a-4261-4d0b-8c35-ce1e4ecfcd68', props.selected?.id);

    // setLoading(false)
    if (res.status == true) {
      console.log(res.data);
      //   setDatasets(res.data);
      // showToast('success', 'Successfully done!', 'You can start using the data in the pipeline')
      // setOpen(false)
      // props.onClose()
    } else {
      console.log(res)
      // showToast('error', 'Failed', res.data.detail)
    }
  }

  const updateProperty = (item: any, value: any) => {

    for (let prop of node.inputs) {
      if (prop.name == item) {

        prop.default = value
        prop['value'] = value
      }
    }
  }

  const saveProperty = () => {
    props.onSave(node)
    setOpen(false)
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
                  <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            {node.node_name}
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
                            {node.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pb-5 pt-6">
                            {node?.inputs.map((item: any, index: any) => (
                              <div key={index}>
                                {item.type == 0 && <TextField label={item.title} default={item.default} name={item.name} onChange={updateProperty}></TextField>}
                                {item.type == 1 && <TextField label={item.title} default={item.default} name={item.name} onChange={updateProperty}></TextField>}
                                {item.type == 2 && <TextField label={item.title} default={item.default} name={item.name} onChange={updateProperty}></TextField>}
                                {item.type == 3 && <BoolField label={item.title} default={item.default} name={item.name} onChange={updateProperty}></BoolField>}
                                {item.type == 4 && <ListField label={item.title} default={item.default} name={item.name} options={item.options} onChange={updateProperty}></ListField>}
                                {item.type == 5 && <DatasetField label={item.title} default={item.default} name={item.name} onChange={updateProperty}></DatasetField>}
                                {item.type == 6 && <ModelField label={item.title} default={item.default} name={item.name} onChange={updateProperty}></ModelField>}
                              </div>
                            ))}

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
                        type="button"
                        className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={saveProperty}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
