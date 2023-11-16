import { useEffect, useState } from "react";
import { getModels } from "../../../../services/common-service";
import Dropdown from "../../../components/dropdown";


export default function ListField(props: any) {

  const [options, setOptions] = useState([])
  const [selected, setSelected] = useState({} as any)

  useEffect(() => {
    let formatted: any = []
    for(let opt of props.options){
      formatted.push({
        id: formatted.length+1,
        name: opt
      })
    }
    
    setOptions(formatted)
    let current = formatted.filter((item: any) => item.name == props.default)
    setSelected(current[0])
  }, [props.options])

  useEffect(() => {
    props.onChange(selected)
  }, [selected])

  const onChange = (value: any) => {
    setSelected(value)
    console.log(value['id'])
    props.onChange(props.name, value['name'])
  }

  return (
    <>
      <Dropdown label={props.label} options={options} selected={selected} onChange={(value: any) => onChange(value)}></Dropdown>
    </>
  )
}