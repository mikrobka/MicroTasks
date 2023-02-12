import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Map} from "./map/Map";
import {Button} from "./Button/Button";
import {UseState} from "./UseState/UseState";
import {FILE} from "dns";
import {Filter} from "./Filter/Filter";


let students = [
    {id: 1, name: "Egor", age: 12},
    {id: 2, name: "Ivan", age: 12},
    {id: 3, name: "Slava", age: 12},
    {id: 4, name: "Kolya", age: 12},
    {id: 5, name: "Vasya", age: 12},
    {id: 6, name: "Sveta", age: 12},
    {id: 7, name: "LizA", age: 12},
    {id: 8, name: "NINA", age: 12},
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


function App() {
    const Button1Foo = (sub: string) => {
        console.log(sub)

    }
    const Button2Foo = (sub: string) => {
        console.log(sub)
    }


    return (
        <div className="App">
            {/*<Map students={students} cars={topCars}/>*/}
            {/*<Button name={"YouTube-1"} callback={() => Button1Foo("Vasya")}/>*/}
            {/*<Button name={"YouTube-2"} callback={() => Button2Foo("Ivan")}/>*/}
            {/*<UseState/>*/}
            <Filter/>
        </div>
    );
}

export default App;
