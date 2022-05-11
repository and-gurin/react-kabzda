import React, {useState} from 'react';
import './App.css';
import Accordion from "./component/Accordion/Accordion";
import {Rating} from "./component/rating/Rating";
import {OnOff} from "./component/OnOff/OnOff";
import UncontrolledAccordion from "./component/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./component/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./component/UncontrolledOnOff/UncontrolledOnOff";
import Select from "./component/Select/Select";


function App() {
    console.log("App Rendering")

    let [ratingValue, setRatingValue] = useState(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [onValue, setOnValue] = useState<boolean>(true);
    let [title, setTitle] = useState('')
    let [value, setValue] = useState(true)
    let [select, setSelect] = useState('1')

    const onClickSelect = (value: string) => {
            setSelect(value)
    }

    return (
        <div className={'App'}>
            <AppTitle title='react-kabzda'/>
            <Select items={[
                {value: '1', title: 'Ira'},
                {value: '2', title: 'Vanya'},
                {value: '3', title: 'Sofia'},
                {value: '4', title: 'Roma'},
            ]} onClick={onClickSelect}
                    value={select}
            />
            {/*<OnOff onValue={onValue} setOnValue={setOnValue}/>*/}
            <UncontrolledOnOff onChange={setOnValue}/> {onValue.toString()}

            <UncontrolledAccordion title={"Respect"}/>
            <Accordion title='NewAccordion'
                       onClick={(id) => {
                           alert(`user with ${id} must be happy`)
                       }}
                       items={[
                           {value: 1, title: 'Irisha'},
                           {value: 2, title: 'Vanya'},
                           {value: 3, title: 'Sofia'},
                           {value: 4, title: 'Roma'},
                       ]}
                       collapsedValue={accordionCollapsed}
                       collapsed={setAccordionCollapsed}/>
            <UncontrolledRating/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <><input value={title} onChange={(event => setTitle(event.currentTarget.value))}/>--actual value--{title}</>
            <><input type="checkbox" checked={value} onChange={(event => setValue(event.currentTarget.checked))}/>--actual
                value--{+value}</>


        </div>
    );
}


type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    console.log("AppTitle Rendering")
    return <h1>{props.title}</h1>
}


export default App;
