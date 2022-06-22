import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

export type valueType = 0 | 1 | 2 | 3 | 4 | 5

export type ratingDataType = {
    id: string
    title: string
    value: valueType
}

export type accordionDataType = {
    title: string
    collapsed: boolean
}

const ratingDataFirst: ratingDataType = {id: '1', title: 'First rating', value: 4}

const accordionDataFirst: accordionDataType = {
    title: 'Menu',
    collapsed: false
}

function App() {

    return (
        <div className="App">
            <Header/>
            <Rating data={ratingDataFirst}/>
            <Accordion data={accordionDataFirst}/>
        </div>
    );
}

export default App;
