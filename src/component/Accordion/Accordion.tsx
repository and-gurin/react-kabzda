import React from "react";

type AccordionPropsTitle = {
    title: string
    collapsed: (value: boolean)=> void
    collapsedValue: boolean
}

function Accordion (props: AccordionPropsTitle) {
    console.log("Accordion Rendering")
    return (
            <div>
                <AccordionTitle
                    title={props.title}
                    collapsedValue={props.collapsedValue}
                    collapsed={props.collapsed}
                />
                {props.collapsedValue ? <AccordionBody/>:""}
            </div>
        )
}

type AccordionTitleProps = {
    title: string
    collapsed: (value: boolean)=> void
    collapsedValue: boolean
}

function AccordionTitle (props: AccordionTitleProps) {

    return <h3 onClick={()=>props.collapsed(!props.collapsedValue)}>--{props.title}--</h3>
}

function AccordionBody () {
    console.log("AccordionBody Rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3 </li>
        </ul>
    )

}

export default Accordion