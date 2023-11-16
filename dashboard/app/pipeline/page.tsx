'use client';
import React from 'react';
import { Card, Title } from '@tremor/react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import PipelineDetail from './pipeline-detail';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { deletePipeline, getPipeline } from '../../services/common-service';
import { showToast } from '../../services/toast-service';
import ConfirmDialog from '../components/confirm-dialog';
import Search from '../components/search';
import { Heading, Section, Box, Table, Text} from '@radix-ui/themes';




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
    router.push('/pipeline/' + item.id)
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

    <div className="pb-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <Heading weight='medium' size='8' style={{color: 'var(--color-primary)'}}>Pipeline</Heading>
          {/* <Text>A list of all the available pipelines in the workspace</Text> */}
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
      <Box className='flex flex-col	justify-center items-center	pb-2 rounded-xl my-8 bg-[var(--nav-bg)]'  style={{boxShadow:'var(--shadow-4)'}}>
        <Section className="mt-2 w-full" p='0' >
          {/* <TableModel data={users} />           */}
          <Table.Root size='3' className="rounded-lg overflow-x-hidden radixTable">
                <Table.Header>
                  <Table.Row >
                    <Table.ColumnHeaderCell>
                      Name
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <span className="sr-only">Edit</span>
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {models.map((item: any) => (
                    <Table.Row key={item.id}>
                      <Table.Cell >
                        {item.agent_name}
                      </Table.Cell>
                      <Table.Cell className="relative flex justify-center  whitespace-nowrap">
                        <div style={{'display': 'flex'}}>
                        <PencilIcon onClick={() => goToView(item)} className="h-4 w-4 mr-8 text-gray-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />
                        <TrashIcon onClick={() => {setToRemove(item); setShowConfirm(true)}} className="h-4 w-4 text-gray-400 cursor-pointer hover:text-red-600" aria-hidden="true" />
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
        </Section>
        </Box>
      </div>
      <PipelineDetail open={openDetail} data={selected} onClose={() => getAllPipelines()}></PipelineDetail>
      <ConfirmDialog show={showConfirm} hide={() => setShowConfirm(false)} confirmed={(item: any) => deleteItem(item)} selected={toRemove}  title="Delete pipeline" message="Are you sure you want to delete the pipeline? The model will be permanently removed from our servers forever. This action cannot be undone."></ConfirmDialog>
    </div>
  )
}