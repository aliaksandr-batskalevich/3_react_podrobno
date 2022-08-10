import React, {useState, ChangeEvent} from "react";
import s from './Input.module.css'
import {ButtonForCounter} from "./ButtonForCounter";

type InputPropsType = {
    disabled: boolean
    inputData: number
    callbackInputData: (number: number) => void
    callbackPushNumber: () => void
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callbackInputData(+event.currentTarget.value);
    };
    const onClickButtonHandler = () => {
        props.callbackPushNumber();
    }

    return (
        <div className={s.inputWrapper}>
            {!props.disabled && <p className={s.p}>Input start number...</p>}
            <input type="number" className={s.input} onChange={onChangeInputHandler} disabled={props.disabled} value={props.inputData}/>
            <ButtonForCounter title={'set'} callback={onClickButtonHandler} disabled={props.disabled} />
        </div>
)

}
