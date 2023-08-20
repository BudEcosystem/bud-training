
import { useState } from "react";
import Dropdown from "../../../dropdown";

export default function BoolField(props: any) {

    const options = [
        {name: 'True', id: 0},
        {name: 'False', id: 1}
    ]
    const [selected, setSelected] = useState({} as any)

    return (
        <>
            <Dropdown label={props.label} options={options} selected={selected} onChange={(value: any) => setSelected(value['id'])}></Dropdown>
        </>
    )
}