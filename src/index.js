import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';
import { createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'UPDATE':
            return action.value;
        default:
            return state;
    }
}

const store = createStore(counter);

const render = () => {
    const st = store.getState();
    ReactDOM.render(
        <Counter value={st}
                 onInc={() => store.dispatch({type: 'INCREMENT'})}
                 onDec={() => store.dispatch({type: 'DECREMENT'})}
                 onUpdate={val => store.dispatch({type: 'UPDATE', value: val})}
        />,
        document.getElementById('root')
    )
};

store.subscribe(render);
render();