import React, {useEffect, useState} from 'react';
import s from './Clock.module.css';


export default {
    title: 'UseStateDemo'
}

const toDoubleNum = (num: number): string => {
    let numInString = String(num);
    let result: string = numInString.length === 1 ? '0' + numInString : numInString;
    return result;
};

export const Example1 = () => {

    console.log('Example1')
    let [counter, setCounter] = useState<number>(0);
    let [fake, setFake] = useState<number>(0);
    let [timer, setTimer] = useState(0);

    const changer = (state: number) => {
        return state + 1;
    }

    const onclickButtonCounterHandler = () => {
        setCounter(changer(counter));
    };
    const onclickButtonFakeHandler = () => {
        setFake(changer);
    };

    const changeTitle = () => {
        setTimeout(() => {
            console.log('Changed!');
            document.title = String(counter);
        }, 2000)
    };

    useEffect(changeTitle, [counter]);

    const timing = () => {
        setTimer(state => state + 1);
    }

    let timingId

    useEffect(() => {
        timingId = setInterval(timing, 1000);
        console.log(`timingId: ${typeof timingId}`);
    }, []);


    const onclickButtonTimerHandler = () => {
        // clearInterval(timingId);
        setTimer(0);
    }

    return (
        <>
            <div>
                <button onClick={onclickButtonCounterHandler}>count</button>
                <span>{counter}</span>
            </div>
            <div>
                <button onClick={onclickButtonFakeHandler}>fake</button>
                <span>{fake}</span>
            </div>
            <div>
                <h1>{timer}</h1>
                <button onClick={onclickButtonTimerHandler}>timer</button>
            </div>
        </>
    )
};

export const Clock = () => {

    let [seconds, setSeconds] = useState<number>(0);
    let [minutes, setMinutes] = useState<number>(0);
    let [hours, setHours] = useState<number>(0);
    let [intervalId, setIntervalId] = useState(0);

    const startTiming = () => {
        let trueId = setInterval(() => {
            setSeconds(state => state + 1);
        }, 1000);
        setIntervalId(+trueId);
    };
    const stopTiming = () => {
        clearInterval(intervalId);
    };

    useEffect(() => {
        startTiming();
    }, []);
    useEffect( () => {
        if (seconds === 60) {
            setMinutes(state => state + 1);
            setSeconds(0);
        }
    }, [seconds]);
    useEffect(() => {
        if (minutes === 60) {
            setHours(state => state + 1);
            setMinutes(0);
        }
    }, [minutes]);

    const resetButtonHandler = () => {
        stopTiming();
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        startTiming();
    };
    const trueTimeButtonHandler = () => {
        stopTiming();

        let trueTime = new Date();
        let trueHours = trueTime.getHours();
        let trueMinutes = trueTime.getMinutes();
        let trueSeconds = trueTime.getSeconds();

        setHours(trueHours);
        setMinutes(trueMinutes);
        setSeconds(trueSeconds);
        startTiming();
    };
    const stopButtonHandler = () => {
        stopTiming();
    };

    return (
        <div className={s.mainWrapper}>
            <div className={s.clockWrapper}>
                <HoursWithMemo data={hours}/>:<MinutesWithMemo data={minutes}/>:<SecondsWithMemo data={seconds}/>
            </div>
            <div className={s.buttonWrapper}>
                <button className={s.button} onClick={resetButtonHandler}>reset</button>
                <button className={s.button} onClick={trueTimeButtonHandler}>true time</button>
                <button className={s.button} onClick={stopButtonHandler}>stop</button>
            </div>
        </div>
    )
}

type HoursPropsType = {
    data: number
}
const Hours = (props: HoursPropsType) => {
    return (
        <span>{toDoubleNum(props.data)}</span>
    )
}
type MinutesPropsType = {
    data: number
}
const Minutes = (props: MinutesPropsType) => {
    return (
        <span>{toDoubleNum(props.data)}</span>
    )
}

type SecondsPropsType = {
    data: number
}
const Seconds = (props: SecondsPropsType) => {
    return (
        <span>{toDoubleNum(props.data)}</span>
    )
}

const HoursWithMemo = React.memo(Hours);
const MinutesWithMemo = React.memo(Minutes);
const SecondsWithMemo = React.memo(Seconds);
