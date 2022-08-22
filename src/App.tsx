import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import Indicator from "./components/Indicator/Indicator";

export type accordionDataType = {
    title: string
    collapsed: boolean
}

const accordionDataFirst: accordionDataType = {
    title: 'Menu',
    collapsed: false
}

function App() {

    return (
        <div className="App">
            <Header/>
            <hr/>
            <Rating title={'First rating'} defaultValue={1}/>
            <hr/>
            <Accordion data={accordionDataFirst}/>
            <hr/>
            <Indicator/>
            <hr/>
            {/*<Counter />*/}
            <hr/>

        </div>
    );
}

export default App;
