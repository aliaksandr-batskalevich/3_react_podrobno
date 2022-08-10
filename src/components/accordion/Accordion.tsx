import React, {useReducer, useState} from "react";
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
type ActionType = ReturnType<typeof changeCollapsedAC>
export type StateType = {
    isCollapsed: boolean
}


export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "CHANGE_COLLAPSED":
            return {...state, isCollapsed: !state.isCollapsed};
        default:
            return state;
    }
};

export const changeCollapsedAC = () => {
    return {type: 'CHANGE_COLLAPSED'} as const
};


export const Accordion = (props: AccordionPropsType) => {

    let [state, stateDispatch] = useReducer(reducer, {isCollapsed: true})

    const changeCollapsed = () => {
        stateDispatch(changeCollapsedAC());
    }

    return (
        <div>
            <AccordionTitle title={props.data.title} callback={changeCollapsed}/>
            <AccordionBody collapsed={state.isCollapsed}/>
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
            { !props.collapsed &&
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