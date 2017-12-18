import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  { range, zip } from 'underscore';

const TodoApp = ({todos, inputText, onInputChange, onAdd}) => {
    const numbers = range(todos.length);
    const zipped  = zip(numbers, todos);

    console.log(JSON.stringify(zipped));

    return (
        <div>
            <h1>TODO!</h1>
            <ul>{zipped.map( (z) =>
                    <li key={z[0].toString()}>{z[1].text}</li>
                )}
                <li>
                    <input type="text" value={inputText} onChange={onInputChange}/>
                    <button onClick={onAdd}>add</button>
                </li>
            </ul>
        </div>
    );
};

export default TodoApp;
