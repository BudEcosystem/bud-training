'use client';

import { Card, Title, Text } from '@tremor/react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import DatasetDetail from './dataset-detail';
import { useEffect, useState } from 'react';
import { getDatasets, deleteDataset } from '../../services/common-service';
import { showToast } from '../../services/toast-service';
import ConfirmDialog from '../components/confirm-dialog';


export default function Datasets() {

  const [openDetail, setOpenDetail] = useState(false)
  const [datasets, setDatasets] = useState([])
  const [selected, setSelected] = useState({})
  const [toRemove, setToRemove] = useState({})
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    getAllDatasets()
  }, [])

  const showDetail = (edit: any = {}) => {
    
    if (!edit.dataset_id) {
      edit['dataset_id'] = null
      edit['name'] = ''
      edit['type'] = 0
    }
    setSelected(edit)

    setOpenDetail(!openDetail)
  }

  async function getAllDatasets() {
    let res = await getDatasets();

    if (res.status) {
      setDatasets(res.data);
    } else {
      // toast.error(res.data.message);
    }
  }

  async function deleteItem(item: any) {
    
    let res = await deleteDataset(item['dataset_id']);

    if (res.status) {
      let reduced = datasets.filter(x => x['dataset_id'] != item['dataset_id'])
      console.log(reduced)
      setDatasets(reduced);
      showToast('success', 'Successfully done!', 'Removed the dataset from the registry')
    } else {
      showToast('error', 'Failed', res.data.detail)
    }
  }

  const formatDate = (modified_at: any) => {
    const dateObject = new Date(modified_at);
  
  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObject.getFullYear().toString().slice(-2);
  
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
  }

  return (

    <div className="pb-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <Title>Datasets</Title>
          <Text>A list of all the available datasets in the workspace</Text>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={showDetail}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add dataset
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
                      Source type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Source
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Content type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Modified at
                    </th>
                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {datasets.map((item: any) => (
                    <tr key={item.dataset_id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.source_type_alias}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.source_type == 0 && <a className='text-indigo-400' href={"https://huggingface.co/datasets/" + item.source} target='_blank'>{item.source}</a>}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.type_alias}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatDate(item.modified_at)}</td>
                      <td className="relative flex whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                        <PencilIcon onClick={() => showDetail(item)} className="h-4 w-4 mr-2 text-gray-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />
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
      <DatasetDetail open={openDetail} data={selected} onClose={() => getAllDatasets()}></DatasetDetail>
      <ConfirmDialog show={showConfirm} hide={() => setShowConfirm(false)} confirmed={(item: any) => deleteItem(item)} selected={toRemove}  title="Delete dataset" message="Are you sure you want to delete the dataset? All of your data will be permanently removed from our servers forever. This action cannot be undone."></ConfirmDialog>
    </div>
  )
}