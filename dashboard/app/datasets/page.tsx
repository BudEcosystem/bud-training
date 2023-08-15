'use client';

import { Card, Title, Text } from '@tremor/react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import DatasetDetail from './dataset-detail';
import { useEffect, useState } from 'react';
import { getDatasets } from '../../services/common-service';


export default function Datasets(){

    const [openDetail, setOpenDetail] = useState(false)
    const [datasets, setDatasets] = useState([])
    const [selected, setSelected] = useState({})

    useEffect(() => {
      getAllDatasets()
    }, [])

    const showDetail = (edit = {} ) => {
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

    return(

    <div className="px-4 sm:px-6 lg:px-8 py-5">
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
                    <td className="relative flex whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                      <PencilIcon onClick={() => showDetail(item)} className="h-4 w-4 mr-2 text-gray-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />
                      <TrashIcon className="h-4 w-4 text-gray-400 cursor-pointer hover:text-red-600" aria-hidden="true" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </Card>
      </div>
      <DatasetDetail open={openDetail} data={selected}></DatasetDetail>
    </div>
    )
}