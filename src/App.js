import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Counter = ({value, onInc, onDec, onUpdate}) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
            <input type="number"    id='a'/>
            <button onClick={onUpdate}>update</button>
        </div>
    )
};

export default Counter;
