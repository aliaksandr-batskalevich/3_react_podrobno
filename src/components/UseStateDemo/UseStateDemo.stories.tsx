import React, {useEffect, useRef, useState} from 'react';
import s from './Clock.module.css';
import {number} from "prop-types";


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

type ClockStyleType = 'digital' | 'analog'
export const Clock = () => {

    let [seconds, setSeconds] = useState<number>(0);
    let [minutes, setMinutes] = useState<number>(0);
    let [hours, setHours] = useState<number>(0);
    let [intervalId, setIntervalId] = useState(0);
    let [clockStyle, setClockStyle] = useState<ClockStyleType>('analog')

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
    useEffect(() => {
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
    const setClockStyleCallback = (newStyle: ClockStyleType) => {
        setClockStyle(newStyle);
    }

    return (
        <div className={s.mainWrapper}>
            <Switch clockStyle={clockStyle} setClockStyleCallback={setClockStyleCallback}/>
            {clockStyle === 'digital'
                ? <DigitalClock hours={hours} minutes={minutes} seconds={seconds}/>
                : <AnalogClock
                    seconds={seconds}
                    minutes={minutes}
                    hours={hours}
                />}
            <div className={s.buttonWrapper}>
                <button className={s.button} onClick={resetButtonHandler}>reset</button>
                <button className={s.button} onClick={trueTimeButtonHandler}>true time</button>
                <button className={s.button} onClick={stopButtonHandler}>stop</button>
            </div>
        </div>
    )
}
type DigitalClockPropsType = {
    hours: number
    minutes: number
    seconds: number

}
const DigitalClock: React.FC<DigitalClockPropsType> = ({hours, minutes, seconds}) => {
    return (
        <div className={s.clockWrapper}>
            <HoursWithMemo data={hours}/>:<MinutesWithMemo data={minutes}/>:<SecondsWithMemo data={seconds}/>
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


type SwitchPropsType = {
    clockStyle: ClockStyleType
    setClockStyleCallback: (newStyle: ClockStyleType) => void
}
const Switch = (props: SwitchPropsType) => {
    const onClickSwitchHandler = (newStyle: ClockStyleType) => {
        props.setClockStyleCallback(newStyle);
    }
    return (
        <div className={s.switchWrapper}>
            <div className={props.clockStyle === 'digital' ? s.activeSwitch : ''}
                 onClick={() => onClickSwitchHandler("digital")}>digital
            </div>
            <div className={props.clockStyle === 'analog' ? s.activeSwitch : ''}
                 onClick={() => onClickSwitchHandler("analog")}>analog
            </div>
        </div>
    )
};



type AnalogClockPropsType = {
    seconds: number
    minutes: number
    hours: number
}
const AnalogClock: React.FC<AnalogClockPropsType> = ({seconds, minutes, hours}) => {

    return (
        <div className={s.analogClockWrapper}>
            <CanvasComponent
                clockColor={'white'}
                clockRadius={100}
                markColor={'black'}
                markRadius={5}

                arrowColor={'gold'}

                seconds={seconds}
                minutes={minutes}
                hours={hours}
            />
        </div>
    )
}

type CanvasComponentPropsType = {
    clockRadius: number
    markRadius: number
    clockColor: string
    markColor: string

    arrowColor: string

    seconds: number
    minutes: number
    hours: number
}

class CanvasComponent extends React.Component<CanvasComponentPropsType, any> {

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate(prevProps: Readonly<CanvasComponentPropsType>, prevState: Readonly<any>, snapshot?: any) {
        this.updateCanvas();
    }

    updateCanvas() {
        let clockCenterX = this.props.clockRadius + this.props.markRadius;
        let clockCenterY = this.props.clockRadius + this.props.markRadius;
        let clockRadius = this.props.clockRadius + this.props.markRadius;

        // @ts-ignore
        const ctx = this.refs.canvas.getContext('2d');

        // clear canvas
        ctx.clearRect(0, 0, 210, 210);

        // clock wrapper
        ctx.strokeStyle = this.props.clockColor;
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(clockCenterX, clockCenterY, clockRadius, 0, 2 * Math.PI, false);
        ctx.stroke();

        // mark 12
        ctx.fillStyle = this.props.markColor;
        ctx.beginPath();
        ctx.arc(clockCenterX, this.props.markRadius, this.props.markRadius, 0, 2 * Math.PI, false);
        ctx.fill();

        // hoursArrow
        let hours = this.props.hours >= 12 ? this.props.hours - 12 : this.props.hours;
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.strokeStyle = this.props.arrowColor;
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius * 3 / 4, 0, Math.PI / 6 * hours + Math.PI / 6 * this.props.minutes / 60 - Math.PI / 2, false);
        ctx.lineTo(clockCenterX, clockCenterY);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#010136';
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius * 3 / 4, 0, 2 * Math.PI, false);
        ctx.stroke();

        // minutesArrow
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.props.arrowColor;
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius, 0, Math.PI / 30 * this.props.minutes - Math.PI / 2, false);
        ctx.lineTo(clockCenterX, clockCenterY);
        ctx.stroke();

        // secondsArrow
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius, 0, Math.PI / 30 * this.props.seconds - Math.PI / 2, false);
        ctx.lineTo(clockCenterX, clockCenterY);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#010136';
        ctx.arc(clockCenterX, clockCenterY, this.props.clockRadius, 0, 2 * Math.PI, false);
        ctx.stroke();
    }

    // its Ok

    render() {
        let canvasWidth = (this.props.clockRadius + this.props.markRadius) * 2;
        let canvasHeight = (this.props.clockRadius + this.props.markRadius) * 2;

        return (
            <canvas
                ref={'canvas'}
                width={canvasWidth}
                height={canvasHeight}
            />
        )
    }
}