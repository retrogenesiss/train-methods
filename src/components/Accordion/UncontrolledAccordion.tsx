import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "../reducers/reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


function UncontrolledAccordion(props: AccordionPropsType) {

   // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, { collapsed: false })

    // const collapsed = true;

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed)} }/>*/}
            <AccordionTitleMemo title={props.titleValue} onClick={ () => {dispatch( {type: TOGGLE_COLLAPSED} )} }/>
            {/*<button onClick={ () => { setCollapsed(!collapsed)} }>TOGGLE</button>*/}
            {!state.collapsed && <AccordionBodyMemo/>}
        </div>
    )
}
const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => { props.onClick() } }>{props.title}</h3>
    )
}
const AccordionTitleMemo = React.memo(AccordionTitle)

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
const AccordionBodyMemo = React.memo(AccordionBody)

export default UncontrolledAccordionMemo;