import React, {ChangeEvent, useState} from "react";
import s from './Counter.module.css'
import {ButtonForCounter} from "./ButtonForCounter";
import {Input} from "./Input";

export const Counter = () => {

    let [number, setNumber] = useState<number>(0);
    let [inputData, setInputData] = useState<number>(0);
    let [disabled, setDisabled] = useState<boolean>(false);


    const increment = () => {
        setNumber(++number);
    }
    const reset = () => {
        setNumber(0);
        setDisabled(false);
        setInputData(0);

    }
    const getNumber = (number: number) => {
        setInputData(number);
    }
    const pushNumber = () => {
        setNumber(inputData);
        setDisabled(true);
    }


    return (
        <div className={s.counterOutWrapper}>
            <h3 className={s.h3}>Counter</h3>
            <div className={s.counterInWrapper}>
                <Input
                    disabled={disabled}
                    inputData={inputData}
                    callbackInputData={getNumber}
                    callbackPushNumber={pushNumber}
                />
                <div className={s.counter}>
                    <span>{number}</span>
                </div>
                <div className={s.buttonsWrapper}>
                    <ButtonForCounter title={'+1'} callback={increment} disabled={!disabled}/>
                    <ButtonForCounter title={'res'} callback={reset} disabled={!disabled}/>
                </div>
            </div>
        </div>
    )
}