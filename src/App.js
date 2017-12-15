import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Counter = ({value, onInc, onDec, onUpdate}) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
            <input ref={node => {
                this.input = node;
            }} />
            <button onClick={onUpdate(this.input.value)}>update</button>
        </div>
    )
};

export default Counter;
