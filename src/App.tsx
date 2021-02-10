import React, {useState} from 'react';
import {Display} from "./Components/Display/Display";
import {Button} from "./Components/Button/Button";
import s from './App.module.css'



function Counter() {
    const [value, setValue] = useState<number>(0)
function ChangeValue (newValue: number) {
        if (newValue <= 5 && newValue >=0)
            setValue(newValue)
}


    return (
        <div className= {s.app}>
            <div >
                <Display value={value}/>
            </div>
            <div>
                < Button value={value}
                changeValue={ChangeValue}/>

            </div>
        </div>
    )
}
export default Counter;

