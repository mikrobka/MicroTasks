import React from "react";
import {MoneyType} from "./Filter";





export const InsideFilter = (props:MoneyType) => {
    return (
        <div>
            <ul>

                {props.money.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    );
                })}
            </ul>

            <button onClick={() => props.FilteredMoney('RUBLS')}>Rubls</button>
            <button onClick={() => props.FilteredMoney('Dollars')}>Dollars</button>
            <button onClick={() => props.FilteredMoney('All')}>All</button>


        </div>
    );
}