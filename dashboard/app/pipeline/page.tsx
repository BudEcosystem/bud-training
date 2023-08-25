'use client';

import { Card, Title, Text } from '@tremor/react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import PipelineDetail from './pipeline-detail';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { deletePipeline, getPipeline } from '../../services/common-service';
import { showToast } from '../../services/toast-service';
import ConfirmDialog from '../components/confirm-dialog';
import Search from '../search';



export default function Pipeline() {

  const router = useRouter()

  const [openDetail, setOpenDetail] = useState(false)
  const [models, setModels] = useState([])
  const [selected, setSelected] = useState({})
  const [toRemove, setToRemove] = useState({})
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    getAllPipelines()
  }, [])

  const showDetail = (edit: any = {}) => {

    // router.push('/pipeline/' + edit.pipeline_id)
    if (!edit.pipeline_id) {
      edit['pipeline_id'] = null
      edit['name'] = ''
    }
    setSelected(edit)

    setOpenDetail(!openDetail)
  }

  const goToView = (item: any) => {
    router.push('/pipeline/' + item.pipeline_id)
  }

  async function getAllPipelines() {
    let res = await getPipeline();

    if (res.status) {
      setModels(res.data);
    } else {
      // toast.error(res.data.message);
    }
  }

  async function deleteItem(item: any) {
    
    let res = await deletePipeline(item['pipeline_id']);

    if (res.status) {
      let reduced = models.filter(x => x['pipeline_id'] != item['pipeline_id'])
      console.log(reduced)
      setModels(reduced);
      showToast('success', 'Successfully done!', 'Removed the pipeline from the registry')
    } else {
      showToast('error', 'Failed', res.data.detail)
    }
  }

  const getTimeFormat = (modified_at: string) => {
    const date = new Date(modified_at);
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear().toString().slice(-2); // Getting the last two digits of the year
    
    return `${day}/${month}/${year}`;
  }

  return (

    <div className="px-4 sm:px-6 lg:px-8 py-5">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <Title>Pipeline</Title>
          <Text>A list of all the available pipelines in the workspace</Text>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={showDetail}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add pipeline
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Updated Time
                    </th>
                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {models.map((item: any) => (
                    <tr key={item.model_id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{getTimeFormat(item?.modified_at)}</td>
                      <td className="relative flex whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                        <PencilIcon onClick={() => goToView(item)} className="h-4 w-4 mr-2 text-gray-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />
                        <TrashIcon onClick={() => {setToRemove(item); setShowConfirm(true)}} className="h-4 w-4 text-gray-400 cursor-pointer hover:text-red-600" aria-hidden="true" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
      <PipelineDetail open={openDetail} data={selected} onClose={() => getAllPipelines()}></PipelineDetail>
      <ConfirmDialog show={showConfirm} hide={() => setShowConfirm(false)} confirmed={(item: any) => deleteItem(item)} selected={toRemove}  title="Delete pipeline" message="Are you sure you want to delete the pipeline? The model will be permanently removed from our servers forever. This action cannot be undone."></ConfirmDialog>
    </div>
  )
}