import { useEffect, useState } from "react"


export default function TextField(props: any) {

    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(props.default)
    }, [props.default])

    const onChange = (val: string) => {
        setValue(val)
        props.onChange(props.name, val)
    }

    return (
        <>
            <label
                htmlFor={props.name}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {props.label}
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    name={props.name}
                    id={props.name}
                    value={value}
                    onChange={(event) => onChange( event?.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </>
    )
}