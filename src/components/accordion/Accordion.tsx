import React, {useState} from "react";
import {accordionDataType} from "../../App";

type AccordionPropsType = {
    data: accordionDataType
}
type AccordionTitlePropsType = {
    title: string
    callback: () => void
}
type AccordionBodyPropsType = {
    collapsed: boolean
}


export const Accordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState<boolean>(props.data.collapsed)

    const changeCollapsed = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true)
    }

    return (
        <div>
            <AccordionTitle title={props.data.title} callback={changeCollapsed}/>
            <AccordionBody collapsed={collapsed}/>
        </div>
    )
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    const onclickHandler = () => {
        props.callback()
    }
    return (
        <h3 onClick={onclickHandler}>{props.title}</h3>
    )
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <>
            {props.collapsed ? <></> :
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>TS</li>
                    <li>REACT</li>
                </ul>}
        </>
    )
}