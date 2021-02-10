import React from 'react';
import s from './Display.module.css'

type DisplayType = {
    value: number
}

export function Display (props: DisplayType){
    const displayClass= props.value === 5 ? s.red : s.item
    return <div >
        <div className={displayClass}> {props.value}</div>

    </div>
}