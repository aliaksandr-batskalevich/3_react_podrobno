import React, {useState} from "react";
import s from './Indicator.module.css'

const Indicator = () => {
    let [on, setOn] = useState<boolean>(false);

    const onOff = (b: boolean) => {
        b ? setOn(!on) : console.log('');
    }

    return (
        <div className={s.indicatorWrapper}>
            <h3>Indicator</h3>
            <div className={`${s.button} ${on && s.on}`} onClick={() => on ? onOff(false) : onOff(true)}>On</div>
            <div className={`${s.button} ${!on && s.off}`}  onClick={() => on ? onOff(true) : onOff(false)}>Off</div>
            <div className={`${s.indicator} ${on ? s.on : s.off}`} onClick={() => onOff(true)}/>
        </div>
    )
};

const IndicatorWithMemo = React.memo(Indicator);

export default IndicatorWithMemo;