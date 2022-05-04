
type OnOffType = {
    onValue: boolean
    setOnValue:(value:boolean)=> void
}

export function OnOff (props: OnOffType) {

    const OnStyle = {
        width: '30px',
        height: '20px',
        border: 'solid 1px black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.onValue ? 'green' : 'white'
    }
    const OffStyle = {
        width: '30px',
        height: '20px',
        border: 'solid 1px black',
        display: 'inline-block',
        padding: '5px',
        marginLeft: '3px',
        backgroundColor: props.onValue ? 'white' : 'red'
    }
    const IndicatorStyle = {
        width: '10px',
        height: '10px',
        border: 'solid 1px black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: props.onValue ? 'green' : 'red'
    }
   return (
       <div>
           <div style={OnStyle} onClick={()=> {props.setOnValue(true)}}>On</div>
           <div style={OffStyle} onClick={()=> {props.setOnValue(false)}}>Off</div>
           <div style={IndicatorStyle}> </div>
       </div>
   )
}

