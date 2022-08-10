import React from "react";
import s from './ButtonForCounter.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}

export const ButtonForCounter = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callback();
    }

    return (
        <>
            <button className={s.button} disabled={props.disabled} onClick={onClickButtonHandler}>{props.title}</button>
        </>
    )
}