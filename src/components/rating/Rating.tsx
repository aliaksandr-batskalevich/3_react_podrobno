import React, {useState} from "react";
import {ratingDataType, valueType} from "../../App";

type StarPropsType = {
    selected: boolean
};

type RatingPropsType = {
    data: ratingDataType
}

type StarsValuePropsType = {
    value: valueType
}


export const Rating = (props: RatingPropsType) => {

    let [ratingData, setRatingData] = useState<ratingDataType>(props.data)

    return (
        <>
            <h3>{ratingData.title}</h3>
            <Stars value={ratingData.value}/>
        </>
    )
}

const Stars = (props: StarsValuePropsType) => {
    if (props.value === 5) {
        return (
            <div className='StarWrapper'>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    } else if (props.value === 4) {
        return (
            <div className='StarWrapper'>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )
    } else if (props.value === 3) {
        return (
            <div className='StarWrapper'>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    } else if (props.value === 2) {
        return (
            <div className='StarWrapper'>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    } else if (props.value === 1) {
        return (
            <div className='StarWrapper'>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    } else {
        return (
            <div className='StarWrapper'>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }

}

const Star = (props: StarPropsType) => {
    return (
        <>{props.selected ? <span><b>Star</b></span> : <span>Star</span>}</>
    )
}