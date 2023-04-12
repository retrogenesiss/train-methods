import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false)



    return (
        <div className={'App'}>

            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}

            {/*<OnOff on={switchOn}*/}
            {/*       onChange={setSwitchOn}/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}

            {/*<UncontrolledRating/>*/}

            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)}}/>*/}

            {/*<Rating value={ratingValue}*/}
            {/*        onclick={setRatingValue}/>*/}

        </div>
    );
}

export default App;