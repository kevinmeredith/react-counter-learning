import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Counter = ({value, onInc, onDec, onUpdate}) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
            <input id='a' type="number"/>
            <button onClick={onUpdate}>update</button>
        </div>
    )
};

const TodoApp = ({todos, inputText, onInputChange, onAdd}) => {
    return (
        <div>
            <ul>
                {todos.map( t => <li>{t.text}</li> )}
                <li>
                    <input type="text" text={inputText} onChange={onInputChange}/>
                    <button onClick={onAdd}>add</button>
                </li>
            </ul>
        </div>
    )
};

export default TodoApp;
