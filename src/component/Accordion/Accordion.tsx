import React from "react";

type ItemType = {
    title: string
    value: any

}
type AccordionPropsTitle = {
    title: string
    collapsed: (value: boolean)=> void
    collapsedValue: boolean
    items: ItemType[]
    onClick: (title: string)=>void
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
                {props.collapsedValue ? <AccordionBody onClick={props.onClick} items={props.items}/>:""}
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

type AccordionBodyType = {
    items: ItemType[]
    onClick: (title: string)=>void
}

function AccordionBody (props: AccordionBodyType) {
    return (

        <ul>
            {props.items.map((t, index)=>{
                return <li onClick={()=>props.onClick(t.value)} key={index}>{t.title}</li>
            })}
        </ul>
    )

}

export default Accordion