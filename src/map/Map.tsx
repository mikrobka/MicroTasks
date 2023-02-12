import React from "react";

type StudentsPropsType = {
    students: Array<StudentsType>
    cars: Array<CarsType>
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}
type CarsType = {
    manufacturer: string,
    model: string
}

export const Map = (props: StudentsPropsType) => {
    return (
        <div>

            {props.cars.map((c, index) => {
                return (
                    <table>
                        <tr>
                            <th>Manufacturer</th>
                            <th>Model</th>
                        </tr>
                        <tr>
                            <td>{c.manufacturer}</td>
                            <td>{c.model}</td>
                        </tr>
                    </table>
                );
            })}

            <ul>
                {props.students.map(s => <li key={s.id}>{s.name} {s.age} age</li>)}
            </ul>
        </div>
    )
}