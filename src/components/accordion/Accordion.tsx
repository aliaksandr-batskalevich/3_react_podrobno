import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}


export function Accordion(props: AccordionPropsType) {
    return (
        <>
            <h2>{props.titleValue}</h2>
            {!props.collapsed && <MenuData />}
        </>
    )
}

const MenuData = () => {
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>TS</li>
            <li>REACT</li>
        </ul>
    )
}