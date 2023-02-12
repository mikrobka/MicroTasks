import React from "react";

type ButtonType = {
    name:string
    callback:()=> void
}


export const Button = (props:ButtonType) => {
    // const myFirstSubs = () => {
    //     console.log("Hello I am Andrey")
    // }
    // const mySecondSubs = () => {
    //     console.log("Hello I am Liza")
    // const onClickHandler = (name:string) => {
    //     console.log(name)
    // }
    // const foo1 = () => {
    //     console.log(100200)
    // }
    // const foo2 = (num:number) => {
    //     console.log(num)
    // }

    const onClickHandler = () =>{props.callback()}
    return (
        <div>
            {/*<button onClick={(event)=>{onClickHandler("Ivan")} }>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event)=>{onClickHandler("Kolya")} }>MyYouTubeChanel-2</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={(event)=>{foo2(100200)} }>2</button>*/}
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
}