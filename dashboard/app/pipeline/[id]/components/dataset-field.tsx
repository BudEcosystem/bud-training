import { useEffect, useState } from "react";
import { getDatasets } from "../../../../services/common-service";
import Dropdown from "../../../dropdown";


export default function DatasetField(props: any){

    const [datasets, setDatasets] = useState([])
    const [selected, setSelected] = useState({} as any)

    useEffect(() => {
        getAllDatasets()
    }, [])

    async function getAllDatasets() {
        let res = await getDatasets();
    
        if (res.status) {
          res.data.map((item: any) => item['id'] = item['dataset_id'])
          setDatasets(res.data);
          let defaultValue = res.data[0]
          
          if(props.default){
            defaultValue = res.data.filter((item: any) => item['dataset_id'] == props.default)[0]
          }
          
          setSelected(defaultValue)
        } else {
          // toast.error(res.data.message);
        }
      }
    const onChange = (value: any) => {
      setSelected(value['id'])
      
      props.onChange(props.name, value['id'])
    }

    return(
        <>
            <Dropdown label={props.label} options={datasets} selected={selected} onChange={(value: any) => onChange(value)}></Dropdown>
        </>
    )
}