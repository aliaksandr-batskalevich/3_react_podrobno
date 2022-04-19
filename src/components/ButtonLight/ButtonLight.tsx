import React, {useState} from "react";



export const ButtonLight = () => {
    const [isOn, setIsOn] = useState<boolean>(false)

    const setLight = (isOn: boolean) => {
        setIsOn(isOn);
    }

    // const buttonStyle = {
    //     marginLeft: '5px',
    //     display: 'inline-block',
    //     width: '20px',
    //     height: '20px',
    //     padding: '3px',
    //     border: 'black 2px solid'
    // }
    const onStyle = {
        marginLeft: '5px',
        display: 'inline-block',
        width: '20px',
        height: '20px',
        padding: '3px',
        border: 'black 2px solid',
        backgroundColor: isOn ? 'green' : 'white'
    }
    const offStyle = {
        marginLeft: '5px',
        display: 'inline-block',
        width: '20px',
        height: '20px',
        padding: '3px',
        border: 'black 2px solid',
        backgroundColor: !isOn ? 'red' : 'white'
    }

    const light = {
        marginLeft: '5px',
        display: 'inline-block',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: 'black 1px solid',
        backgroundColor: isOn ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {setLight(true)}}>On</div>
            <div style={offStyle} onClick={() => {setLight(false)}}>Of</div>
            <div style={light}></div>
        </div>
    )
}