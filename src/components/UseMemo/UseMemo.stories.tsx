import React, {ChangeEvent, useMemo, useState} from 'react';

type CounterPropsType = {
    value: number
    counterCallback: () => void
}
type CityType = {
    id: number
    country: string
    title: string
    people: number
}

export default {
    title: 'UseMemo'
}

export const UseMemo = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    const onChangeAHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newResultA = Number(event.currentTarget.value);
        setA(newResultA);
    };
    const onChangeBHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newResultB = Number(event.currentTarget.value);
        setB(newResultB);
    };

    const factorial = (num: number): number => {
        let answer = 1;
        for (let i = 1; i <= num; i++) {
            answer *= i;
        }
        return answer;
    };
    const factorialWithFake = (num: number): number => {
        let answer = 1;
        for (let i = 1; i <= num; i++) {
            answer *= i;

            let fake = 0;
            while (fake < 60000000) {
                fake++;
                let fakeAnswer = Math.random();
            }
        }
        return answer;
    };

    let resultA = useMemo(() => {
        return factorialWithFake(a);
    }, [a]);
    let resultB = factorial(b);

    return (
        <div>
            <div>
                Set A: <input value={a} onChange={onChangeAHandler}/>
            </div>
            <div>
                Set B: <input value={b} onChange={onChangeBHandler}/>
            </div>
            <div>ResultA: {resultA}</div>
            <div>ResultB: {resultB}</div>
        </div>
    )
};

const Counter: React.FC<CounterPropsType> = ({value, counterCallback}) => {

    const onClickButtonHandler = () => {
        counterCallback();
    };

    return (
        <div>
            <span>{value}</span>
            <button onClick={onClickButtonHandler}>inc</button>
        </div>
    )
};

export const Cities = () => {

    const initialCitiesState: Array<CityType> = [
        {id: 1, country: 'Belarus', title: 'Brest', people: 300000},
        {id: 2, country: 'Ukraine', title: 'Kiev', people: 3000000},
        {id: 3, country: 'Poland', title: 'Gdansk', people: 250000},
        {id: 4, country: 'Russia', title: 'Moscow', people: 10000000}
    ]

    let [value, setValue] = useState<number>(0);
    let [cities, setCities] = useState<Array<CityType>>(initialCitiesState);

    let citiesOfEurope: string = useMemo(() => {
        console.log('citiesOfEurope');
        let citiesOfEuropeArrOfObj = cities.filter(el => el.country !== 'Russia');
        return citiesOfEuropeArrOfObj.map(el => el.title).join(', ');
    }, [cities]);
    let citiesOfRussia: string = useMemo(() => {
        console.log('citiesOfRussia');
        let citiesOfEuropeArrOfObj = cities.filter(el => el.country === 'Russia');
        return citiesOfEuropeArrOfObj.map(el => el.title).join(', ');
    }, [cities]);
    let citiesWithout1000000: string = useMemo(() => {
        console.log('citiesWithout1000000');
        let citiesWithout1000000ArrOfObj = cities.filter(el => el.people < 1000000);
        return citiesWithout1000000ArrOfObj.map(el => el.title).join(', ');
    }, [cities])

    const increment = () => {
        setValue(value + 1);
    };

    return (
        <div>
            <Counter value={value} counterCallback={increment}/>
            <div>
                <span>cities of Europe: {citiesOfEurope}.</span>
            </div>
            <div>
                <span>cities of Russia: {citiesOfRussia}.</span>
            </div>
            <div>
                <span>cities before 1 000 000: {citiesWithout1000000}.</span>
            </div>
        </div>
    )
}
