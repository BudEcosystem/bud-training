import { useEffect, useState } from "react";
import { getModels } from "../../../../services/common-service";
import Dropdown from "../../../dropdown";


export default function ModelField(props: any){

    const [models, setModels] = useState([])
    const [selected, setSelected] = useState({} as any)

    useEffect(() => {
        getAllOptions()
    }, [])

    useEffect(() => {
      console.log(selected)
      props.onChange(selected)
  }, [selected])

    async function getAllOptions() {
        let res = await getModels();
    
        if (res.status) {
          setModels(res.data);
          setSelected(res.data[0])
        } else {
          // toast.error(res.data.message);
        }
      }

    return(
        <>
            <Dropdown label={props.label} options={models} selected={selected} onChange={(value: any) => setSelected(value['model_id'])}></Dropdown>
        </>
    )
}