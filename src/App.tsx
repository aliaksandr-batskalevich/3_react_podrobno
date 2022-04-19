import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {ButtonLight} from "./components/ButtonLight/ButtonLight";

function App() {
    return (
        <>
            <PageTitle title={'This is component'}/>

            <Accordion titleValue={'Menu 1'}/>
            <Accordion titleValue={'Menu 2'}/>

            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>

            <ButtonLight/>
            <ButtonLight/>
            <ButtonLight/>
        </>
    );
}

// const sum = (a: number, b: number) => {
//     alert(a + b);
// }

type PageTypePropsType = {
    title: string
}

function PageTitle(props: PageTypePropsType) {
    console.log("Title rendering")
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
