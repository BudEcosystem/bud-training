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
          setDatasets(res.data);
          setSelected(res.data[0])
        } else {
          // toast.error(res.data.message);
        }
      }

    return(
        <>
            <Dropdown label={props.label} options={datasets} selected={selected} onChange={(value: any) => setSelected(value['id'])}></Dropdown>
        </>
    )
}