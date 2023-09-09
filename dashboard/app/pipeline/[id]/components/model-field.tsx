import { useEffect, useState } from "react";
import { getModels } from "../../../../services/common-service";
import Dropdown from "../../../dropdown";


export default function ModelField(props: any) {

  const [models, setModels] = useState([])
  const [selected, setSelected] = useState({} as any)

  useEffect(() => {
    getAllOptions()
  }, [])

  useEffect(() => {
    console.log(selected)
    // props.onChange(selected)
  }, [selected])

  async function getAllOptions() {
    let res = await getModels();

    if (res.status) {
      res.data.map((item: any) => item['id'] = item['model_id'])
      setModels(res.data);
      let defaultValue = res.data[0]

      if (props.default) {
        defaultValue = res.data.filter((item: any) => item['model_id'] == props.default)[0]
      }

      setSelected(defaultValue)
    } else {
      // toast.error(res.data.message);
    }
  }

  const onChange = (value: any) => {
    setSelected(value)
    
    props.onChange(props.name, value['id'])
  }

  return (
    <>
      <Dropdown label={props.label} options={models} selected={selected} onChange={(value: any) => onChange(value)}></Dropdown>
    </>
  )
}