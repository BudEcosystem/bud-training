'use client';

import { Card, Title, Text } from '@tremor/react';
import { TrashIcon } from '@heroicons/react/24/outline'
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';
import { deleteInference, getInference, startInference, stopInference } from '../../services/common-service';
import { showToast } from '../../services/toast-service';
import ConfirmDialog from '../components/confirm-dialog';
import InferenceDetail from './inference-detail';


export default function Inference() {

  const [openDetail, setOpenDetail] = useState(false)
  const [inferences, setInferences] = useState([])
  const [selected, setSelected] = useState({})
  const [toRemove, setToRemove] = useState({})
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    getAllInferences()
  }, [])

  const showDetail = (edit: any = {}) => {

    if (!edit.model_id) {
      edit['model_id'] = null
      edit['name'] = ''
      edit['type'] = 0
    }
    setSelected(edit)

    setOpenDetail(!openDetail)
  }

  async function getAllInferences() {
    let res = await getInference();

    if (res.status) {
      setInferences(res.data);
    } else {
      // toast.error(res.data.message);
    }
  }

  async function deleteItem(item: any) {

    let res = await deleteInference(item['serving_id']);
    console.log(res)
    if (res.status == true) {
      let reduced = inferences.filter(x => x['serving_id'] != item['serving_id'])
      console.log(reduced)
      setInferences(reduced);
      showToast('success', 'Successfully done!', 'Removed the model from the registry')
    } else {
      showToast('error', 'Failed', res.data.detail)
    }
  }

  const getTimeDifference = (created_at: any, stopped_at: any, status: number) => {
    if (!stopped_at) stopped_at = new Date()
    if (status == 1) stopped_at = new Date()
    const startTime = new Date(created_at);
    const stopTime = new Date(stopped_at);

    const timeDifference: any = stopTime.getTime() - startTime.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days} D ${hours} hr`;
    } else if (hours > 0) {
      return `${hours} hr ${minutes} min`;
    } else if (minutes > 0) {
      return `${minutes} min ${seconds} s`;
    } else {
      return `${seconds} s`;
    }
  }

  async function startItem(item: any) {

    let res = await startInference(item['serving_id']);
    console.log(res)
    if (res.status == true) {
      showToast('success', 'Successfully done!', 'Model is running now. Check it out')
      getAllInferences()
    } else {
      showToast('error', 'Failed', res.data.detail)
    }
  }

  async function stopItem(item: any) {

    let res = await stopInference(item['serving_id']);
    console.log(res)
    if (res.status == true) {
      showToast('success', 'Successfully done!', 'Model is shutting down now')
      getAllInferences()
    } else {
      showToast('error', 'Failed', res.data.detail)
    }
  }

  return (

    <div className="pb-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <Title>Inference</Title>
          <Text>A list of all the running models in the workspace</Text>
        </div>
        <div className="mt-4 flex">
        <button
            onClick={showDetail}
            type="button"
            className="block rounded-md mr-3 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Workflow
          </button>
          <button
            onClick={showDetail}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add inference
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <Card>

          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                    >
                      Model Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Running Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {inferences.map((item: any) => (
                    <tr key={item.model_id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {item.model?.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{getTimeDifference(item.modified_at, item.stopped_at, item.status)}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.status_alias}
                      </td>
                      <td className="relative flex items-center justify-end whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                        {(item.status == 1 && item.model.family == 1) && <a href={item.endpoint} target='_blank' className='rounded-md bg-indigo-600 px-3 py-1 text-white text-xs mr-2 hover:bg-indigo-500'>View</a>}
                        {(item.status == 1 && item.model.family == 0) && <a href='http://216.48.187.144:7860/' target='_blank' className='rounded-md bg-indigo-600 px-3 py-1 text-white text-xs mr-2 hover:bg-indigo-500'>View</a>}
                        {item.status == 0 && <PlayIcon onClick={() => startItem(item)} className="h-4 w-4 mr-2 text-green-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />}
                        {item.status == 1 && <StopIcon onClick={() => stopItem(item)} className="h-4 w-4 mr-2 text-red-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />}
                        <TrashIcon onClick={() => { setToRemove(item); setShowConfirm(true) }} className="h-4 w-4 text-gray-400 cursor-pointer hover:text-red-600" aria-hidden="true" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
      <InferenceDetail open={openDetail} data={selected} onClose={() => getAllInferences()}></InferenceDetail>
      <ConfirmDialog show={showConfirm} hide={() => setShowConfirm(false)} confirmed={(item: any) => deleteItem(item)} selected={toRemove} title="Delete model" message="Are you sure you want to delete the model? The model will be permanently removed from our servers forever. This action cannot be undone."></ConfirmDialog>
    </div>
  )
}