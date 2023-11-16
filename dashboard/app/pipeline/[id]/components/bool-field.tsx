
import { useEffect, useState } from "react";
import Dropdown from "../../../components/dropdown";

export default function BoolField(props: any) {

    const options = [
        {name: 'true', id: 0},
        {name: 'false', id: 1}
    ]
    const [selected, setSelected] = useState({} as any)

    useEffect(() => {
        let current = options.filter((item: any) => item.name == props.default)
        setSelected(current[0])
    }, [props.default])

    const onChange = (value: any) => {
        setSelected(value['id'])
        props.onChange(props.name, value['name'])
    }

    return (
        <>
            <Dropdown label={props.label} options={options} selected={selected} onChange={onChange}></Dropdown>
        </>
    )
}