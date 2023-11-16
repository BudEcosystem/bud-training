'use client';

import { Card, Title } from '@tremor/react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import ModelDetail from './model-detail';
import { useEffect, useState } from 'react';
import { deleteModel, getModels } from '../../services/common-service';
import { showToast } from '../../services/toast-service';
import ConfirmDialog from '../components/confirm-dialog';
import Search from '../components/search';
import { Heading, Section, Box, Table, Text} from '@radix-ui/themes';


export default function Models() {


  const [openDetail, setOpenDetail] = useState(false)
  const [modelList, setModelList] = useState([])
  const [models, setModels] = useState([])
  const [selected, setSelected] = useState({})
  const [toRemove, setToRemove] = useState({})
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    getAllModels()
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

  async function getAllModels() {
    let res = await getModels();

    if (res.status) {
      setModelList(res.data)
      setModels(res.data);
    } else {
      // toast.error(res.data.message);
    }
  }

  async function deleteItem(item: any) {
    
    let res = await deleteModel(item['model_id']);

    if (res.status) {
      let reduced = models.filter(x => x['model_id'] != item['model_id'])
      console.log(reduced)
      setModels(reduced);
      showToast('success', 'Successfully done!', 'Removed the model from the registry')
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

  const filterList = (val: any) => {
    
    let filtered = modelList.filter((item: any) => item.name.toLowerCase().includes(val.toLowerCase()))
    
    setModels(filtered)
  }

  return (

    <div className=" py-0" >
      <div className="sm:flex sm:items-end">
        <div className="sm:flex-auto">
          <Heading weight='medium' size='8' style={{color: 'var(--color-primary)'}}>Models</Heading>
          {/* <Text>A list of all the available models in the workspace</Text> */}

        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={showDetail}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add model
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
      <div className='table-container'>
      <Box className='flex flex-col	justify-center items-center	pb-2 mb-20 rounded-xl my-8 bg-[var(--nav-bg)]'  style={{boxShadow:'var(--shadow-4)'}}>
        <Search onChange={filterList}/>
        <Section className="mt-2 w-full" p='0' style={{boxShadow: '0px -1px 0px 0px var(--gray-a5)'}}>
          {/* <TableModel data={users} />           */}
          <Table.Root size='3' className="rounded-lg overflow-x-hidden radixTable">
                <Table.Header>
                  <Table.Row >
                    <Table.ColumnHeaderCell>
                    Name
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                    Family
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                    Version
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                    Source type
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                    Source
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                    Model type
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                    Modified at
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <span className="sr-only">Edit</span>
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {models.map((item: any) => (
                    <Table.Row key={item.model_id}>
                      <Table.Cell >
                      {item.name}
                      </Table.Cell>
                      <Table.Cell>
                      {item.family_alias}
                      </Table.Cell>
                      <Table.Cell>
                      1
                      </Table.Cell>
                      <Table.Cell >
                      {item.source_type_alias}
                      </Table.Cell>
                      <Table.Cell>
                      {item.source_type == 0 && <a className='text-indigo-400' href={"https://huggingface.co/datasets/" + item.source} target='_blank'>{item.source}</a>}
                      </Table.Cell>
                      <Table.Cell>
                      {item.type_alias}
                      </Table.Cell>
                      <Table.Cell>
                      {formatDate(item.modified_at)}
                      </Table.Cell>
                      <Table.Cell className="relative flex whitespace-nowrap">
                        <div style={{'display': 'flex'}}>
                        <PencilIcon onClick={() => showDetail(item)} className="h-4 w-4 mr-2 text-gray-400 cursor-pointer hover:text-indigo-500" aria-hidden="true" />
                        <TrashIcon onClick={() => {setToRemove(item); setShowConfirm(true)}} className="h-4 w-4 text-gray-400 cursor-pointer hover:text-red-600" aria-hidden="true" />
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
              {!models.length && <p className='flex justify-center w-full pt-2'>No data available</p>}
        </Section>
        </Box>
        </div>
      </div>
      <ModelDetail open={openDetail} data={selected} onClose={() => getAllModels()}></ModelDetail>
      <ConfirmDialog show={showConfirm} hide={() => setShowConfirm(false)} confirmed={(item: any) => deleteItem(item)} selected={toRemove}  title="Delete model" message="Are you sure you want to delete the model? The model will be permanently removed from our servers forever. This action cannot be undone."></ConfirmDialog>
    </div>
  )
}