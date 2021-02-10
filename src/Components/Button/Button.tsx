import React from 'react';
import s from './Button.module.css'


type ButtonType = {
    value: number,
    changeValue: (newValue: number)=>void
}

 export function Button (props: ButtonType){
    const addChange =()=> {

        props.changeValue(props.value +1)
    }
    const resetChange = () => {
        props.changeValue(0)
    }
    return (
        <div className={s.button}>
            <button disabled={props.value ===5} onClick={addChange} >inc</button>
            <button disabled={props.value ===0} onClick={resetChange}>reset</button>
        </div>
    )
}
