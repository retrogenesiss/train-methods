import Select from "./Select";
import {useState} from "react";

export default {
    title: 'select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    //
    // const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setValue(e.currentTarget.value)
    // }
    return <>
        <Select onChange={setValue}
                value={value}
                item={[
                    {title: 'Arthur', value: "1"},
                    {title: 'Lena', value: "2"},
                    {title: 'Ivan', value: "3"},
                    {title: 'Kristina', value: "4"}
                ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select onChange={setValue}
                value={value}
                item={[
                    {title: 'Arthur', value: "1"},
                    {title: 'Lena', value: "2"},
                    {title: 'Ivan', value: "3"},
                    {title: 'Kristina', value: "4"}
                ]}/>
    </>
}