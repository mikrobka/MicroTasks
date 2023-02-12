import React, {useState} from "react";
import {InsideFilter} from "./InsideFilter";

/*type MoneyType = {
    money: MoneyPropsType
}

type MoneyPropsType = {
    banknots: string,
    value: number,
    number: string

}*/

export type MoneyType = {
    money:Array<MoneyPropsType>,
    FilteredMoney:(FilterType:string)=>void
}

export type MoneyPropsType = {
    banknots:string,
    value:number,
    number:number
}

type FilterType = 'All'| 'Dollars' | 'RUBLS'
export const Filter = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money
    if(filter === 'RUBLS'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if(filter === 'Dollars'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }

    const FilteredMoney = (ButtonName:FilterType) => {
        setFilter(ButtonName)
    }

    return (
        <div>
            <InsideFilter money={money} FilteredMoney={FilteredMoney}/>
        </div>
    );
}