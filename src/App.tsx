import React, {useState} from 'react';
import './App.css';
import Accordion from "./component/Accordion/Accordion";
import {Rating} from "./component/rating/Rating";
import {OnOff} from "./component/OnOff/OnOff";
import UncontrolledAccordion from "./component/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./component/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./component/UncontrolledOnOff/UncontrolledOnOff";


function App() {    console.log("App Rendering")

    let [ratingValue, setRatingValue] = useState(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [onValue, setOnValue] = useState<boolean>(true);

    return (
    <div>
        <OnOff onValue={onValue} setOnValue={setOnValue}/>
        <UncontrolledOnOff/>

        <UncontrolledAccordion title={"Respect"} />
        <Accordion title='NewAccordion'
                   collapsedValue={accordionCollapsed}
                   collapsed={setAccordionCollapsed}/>
        <UncontrolledRating/>
        <Rating value={ratingValue}
                onClick={setRatingValue}/>



    </div>
  );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle (props: AppTitlePropsType) {
    console.log("AppTitle Rendering")
    return <h1>{props.title}</h1>
}



export default App;
