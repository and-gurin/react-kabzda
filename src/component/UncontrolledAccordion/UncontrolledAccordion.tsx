import React, {useState} from "react";

type AccordionPropsTitle = {
    title: string
    /*collapsed: boolean*/
}

function UncontrolledAccordion (props: AccordionPropsTitle) {
    const [collapsed, setCollapsed] = useState(true)

        return (
            <div>
                <AccordionTitle title={props.title} onClick={()=> {setCollapsed(!collapsed)}}/>
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitleProps = {
    title: string
    onClick : ()=> void
}

function AccordionTitle (props: AccordionTitleProps) {
    return <h3 onClick={props.onClick}>---{props.title}---</h3>
}

function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )

}

export default UncontrolledAccordion