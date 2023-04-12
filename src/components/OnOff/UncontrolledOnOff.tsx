import {useState} from "react";

type PropsType = {
    // on: boolean
    onChange: (on: boolean) => void
    defaultOn: boolean
}

export const UncontrolledOnOff = (props: PropsType) => {

    // let on = false;

   // let [on, setOn] = useState(false);  // в on со сидит либо true, либо false. В setOn сидит ф-ция, которая меняет on, если ей дать новое значение
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false); // хук с начальным значением

    const onStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle ={
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };

// можно написать стили в "" в одной строчке, в JS это считается нормой
   const onClicked = () => {
       setOn(true)
       props.onChange(true)
   }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}