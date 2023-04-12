import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType /* 0 | 1 | 2 | 3 | 4 | 5;*/
    onclick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onclick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onclick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onclick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onclick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onclick} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void

}

function Star(props: StarPropsType) {

    return <span onClick={ () => { props.onClick(props.value) } } >
        { props.selected ? <b>star </b> : 'star '}
    </span>
   /* if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }*/
}
