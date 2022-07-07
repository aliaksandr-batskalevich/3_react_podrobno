import React, {useState} from "react";
import {ratingDataType, valueType} from "../../App";

type StarPropsType = {
    selected: boolean
    ratingCallBack: () => void
};
type StarsValuePropsType = {
    value: valueType
    ratingCallBack: (newRating: valueType) => void
}
type RatingPropsType = {
    data: ratingDataType
}


export const Rating = (props: RatingPropsType) => {

    let [ratingData, setRatingData] = useState<ratingDataType>(props.data)
    const changeRating = (newRating: valueType) => {
        ratingData.value === 1 && newRating === 1 ? setRatingData({...ratingData, value: 0}) : setRatingData({...ratingData, value: newRating})
    }

    return (
        <>
            <h3>{ratingData.title}</h3>
            <Stars value={ratingData.value} ratingCallBack={changeRating}/>
        </>
    )
}

const Stars = (props: StarsValuePropsType) => {

    const ratingCallBackHandler = (newRating: valueType) => {
        props.ratingCallBack(newRating)
    }

    return (
        <div className='StarWrapper'>
            <Star selected={props.value > 0} ratingCallBack={() => ratingCallBackHandler(1)}/>
            <Star selected={props.value > 1} ratingCallBack={() => ratingCallBackHandler(2)}/>
            <Star selected={props.value > 2} ratingCallBack={() => ratingCallBackHandler(3)}/>
            <Star selected={props.value > 3} ratingCallBack={() => ratingCallBackHandler(4)}/>
            <Star selected={props.value > 4} ratingCallBack={() => ratingCallBackHandler(5)}/>
        </div>
    )
}

const Star = (props: StarPropsType) => {

    const starOnclickHandler = () => {
        props.ratingCallBack();
    }
    return (
        <span onClick={starOnclickHandler}>{props.selected ? <b>Star</b> : <>Star</>}</span>
    )
}