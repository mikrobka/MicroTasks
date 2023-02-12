import React, {useState} from "react";


export const UseState = () => {
    // let a = 1

    let[a,setA]=useState(1)

    const onClickHandler = () => {
        setA(a += 1);
        console.log(a)
    }

    const ZeroA = () => {
        setA(a = 0)
    }

    return (
        <div>
        <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={ZeroA}>0</button>
        </div>
    )
}