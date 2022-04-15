import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <>
            <PageTitle title={'This is component'}/>

            <Accordion titleValue={'Menu 1'} collapsed={true}/>
            <Accordion titleValue={'Menu 2'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </>
    );
}

const sum = (a: number, b: number) => {
    alert(a + b);
}

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
