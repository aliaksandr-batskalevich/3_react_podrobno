import React, {useEffect, useState} from "react";
import s from './Counter.module.css'
import {ButtonForCounter} from "./ButtonForCounter";

type rulesType = {
    resetValue: number
    maxValue: number
};

let rules: rulesType = {
    resetValue: 0,
    maxValue: 10
};

export const Counter = () => {

    let [numOfDisplay, setNumOfDisplay] = useState<number>(rules.resetValue);

    useEffect(() => {
        let dataFromLocalStorage: string | null = localStorage.getItem("numOfCounter");
        if (dataFromLocalStorage) {
            setNumOfDisplay(JSON.parse(dataFromLocalStorage));
        }
         }, []);
    useEffect(() => {localStorage.setItem('numOfCounter', JSON.stringify(numOfDisplay))}, [numOfDisplay]);

    const increment = () => {
        setNumOfDisplay(++numOfDisplay);
    };
    const reset = (resetValue: number) => {
        setNumOfDisplay(resetValue);
    };


    const styleForMaxValue = numOfDisplay >= rules.maxValue ? `${s.display} ${s.displayMaxValue}` : s.display;


   return (
       <div className={s.counterOutWrapper}>
           <div className={s.counterInWrapper}>
               <div className={s.displayWrapper}>
                   <div className={styleForMaxValue}>
                       {numOfDisplay}
                   </div>
               </div>
               <div className={s.buttonWrapper}>
                   <ButtonForCounter
                       title={'INC'}
                       callBack={increment}
                       disabled={numOfDisplay >= rules.maxValue}
                   />
                   <ButtonForCounter
                       title={'RESET'}
                       callBack={() => reset(rules.resetValue)}
                       disabled={numOfDisplay === rules.resetValue}
                   />
               </div>
           </div>
       </div>
   )
};