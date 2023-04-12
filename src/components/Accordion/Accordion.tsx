import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are shown when opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * Callback that is called when any items clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * Optional color of header text
     */
    color?: string
}


function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitleMemo title={props.titleValue}
                            color={props.color}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBodyMemo items={props.items} onClick={props.onClick}/>}
        </div>
    )
}
export const AccordionMemo = React.memo(Accordion)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onChange()}>-- {props.title} --</h3>
    )
}
const AccordionTitleMemo = React.memo(AccordionTitle)

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}


function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) =>
                <li onClick={() => {props.onClick(i.value)}}
                    key={index}>{i.title}</li>)}
        </ul>
    )
}
const AccordionBodyMemo = React.memo(AccordionBody)

export default Accordion;