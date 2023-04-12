import React, {useState} from "react";

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1) } }/>{/*value={1}*/}{/*<button onClick={ () => {setValue(1)} }>1</button>*/}
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2) } }/>{/*value={2}*/}{/*<button onClick={ () => {setValue(2)} }>2</button>*/}
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3) } }/>{/*value={3}*/}{/*<button onClick={ () => {setValue(3)} }>3</button>*/}
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4) } }/>{/*value={4}*/}{/*<button onClick={ () => {setValue(4)} }>4</button>*/}
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5) } }/>{/*value={5}*/}{/*<button onClick={ () => {setValue(5)} }>5</button>*/}
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

    return <span onClick={ () => { props.setValue()} }>
        { props.selected ? <b>star </b> : 'star ' }
    </span>

    /*if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }*/
}