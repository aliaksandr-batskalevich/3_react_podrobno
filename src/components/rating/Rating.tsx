import React, {useState} from "react";

export type valueType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    ratingCallBack: () => void
};
type StarsValuePropsType = {
    value: valueType
    ratingCallBack: (newRating: valueType) => void
}
export type RatingPropsType = {
    /**
     * Element, that...
     * 123
     */
    title: string
    defaultValue?: valueType
    onChange?: (value: valueType) => void
}


export const Rating: React.FC<RatingPropsType> = ({title, defaultValue, onChange}) => {

    let [ratingData, setRatingData] = useState<valueType>(defaultValue ? defaultValue : 0);

    const changeRating = (newRating: valueType) => {
        let newRatingData = ratingData === 1 && newRating === 1 ? 0 : newRating;
         setRatingData(newRatingData);
        onChange && onChange(newRatingData);
    }

    return (
        <>
            <h3>{title}</h3>
            <Stars value={ratingData} ratingCallBack={changeRating}/>
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