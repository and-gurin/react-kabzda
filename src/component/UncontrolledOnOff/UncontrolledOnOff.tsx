import {useState} from "react";

type OnOffType = {
    onChange: (on: boolean)=> void
}

function UncontrolledOnOff (props:OnOffType) {
    const [on, setOn] = useState(true);

    const OnStyle = {
        width: '30px',
        height: '20px',
        border: 'solid 1px black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white'
    }
    const OffStyle = {
        width: '30px',
        height: '20px',
        border: 'solid 1px black',
        display: 'inline-block',
        padding: '5px',
        marginLeft: '3px',
        backgroundColor: on ? 'white' : 'red'
    }
    const IndicatorStyle = {
        width: '10px',
        height: '10px',
        border: 'solid 1px black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: on ? 'green' : 'red'
    }
    const setValueOn = () => {
        setOn(true);
        props.onChange(true)
    }
    const setValueOff = () => {
        setOn(false);
        props.onChange(false)
    }

   return (
       <div>
           <div style={OnStyle} onClick={setValueOn}>On</div>
           <div style={OffStyle} onClick={setValueOff}>Off</div>
           <div style={IndicatorStyle}> </div>
       </div>
   )
}

export default UncontrolledOnOff