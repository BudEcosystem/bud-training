'use client';

import { Card, Title } from '@tremor/react';
import { TrashIcon } from '@heroicons/react/24/outline'
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';
import { deleteInference, getInference, startInference, stopInference } from '../../services/common-service';
import { showToast } from '../../services/toast-service';
import ConfirmDialog from '../components/confirm-dialog';
import InferenceDetail from './inference-detail';
import { Heading, Section, Box, Table, Text} from '@radix-ui/themes';


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
          <Heading weight='medium' size='8' style={{color: 'var(--color-primary)'}}>Inference</Heading>

          {/* <Text>A list of all the running models in the workspace</Text> */}
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
      <Box className='flex flex-col	justify-center items-center	pb-2 rounded-xl my-8 bg-[var(--nav-bg)]'  style={{boxShadow:'var(--shadow-4)'}}>
        <Section className="mt-2 w-full" p='0' >
          {/* <TableModel data={users} />           */}
          <Table.Root size='3' className="rounded-lg overflow-x-hidden radixTable">
                <Table.Header>
                  <Table.Row >
                    <Table.ColumnHeaderCell>
                    Model Name
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                    Running Time
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                    Status
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <span className="sr-only">Edit</span>
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {inferences.map((item: any) => (
                    <Table.Row key={item.model_id}>
                      <Table.Cell >
                      {item.model?.name}
                      </Table.Cell>
                      <Table.Cell>
                      {getTimeDifference(item.modified_at, item.stopped_at, item.status)}
                      </Table.Cell>
                      <Table.Cell>
                      {item.status_alias}
                      </Table.Cell>
                      <Table.Cell className="relative flex whitespace-nowrap">
                      {(item.status == 1 && item.model.family == 1) && <a href={item.endpoint} target='_blank' className='rounded-md bg-indigo-600 px-3 py-1 text-white text-xs mr-2 hover:bg-indigo-500'>View</a>}
                        {(item.status == 1 && item.model.family == 0) && <a href='http://216.48.187.144:7860/' target='_blank' className='rounded-md bg-indigo-600 px-3 py-1 text-white text-xs mr-2 hover:bg-indigo-500'>View</a>}
                        {item.status == 0 && <PlayIcon onClick={() => startItem(item)} className="h-4 w-4 mr-2 text-green-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />}
                        {item.status == 1 && <StopIcon onClick={() => stopItem(item)} className="h-4 w-4 mr-2 text-red-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />}
                        <TrashIcon onClick={() => { setToRemove(item); setShowConfirm(true) }} className="h-4 w-4 text-gray-400 cursor-pointer hover:text-red-600" aria-hidden="true" />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
              {!inferences.length && <p className='flex justify-center w-full pt-2'>No data available</p>}

        </Section>
        </Box>
      </div>
      <InferenceDetail open={openDetail} data={selected} onClose={() => getAllInferences()}></InferenceDetail>
      <ConfirmDialog show={showConfirm} hide={() => setShowConfirm(false)} confirmed={(item: any) => deleteItem(item)} selected={toRemove} title="Delete model" message="Are you sure you want to delete the model? The model will be permanently removed from our servers forever. This action cannot be undone."></ConfirmDialog>
    </div>
  )
}