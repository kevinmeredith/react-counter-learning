import { Provider } from 'react-redux';
import Todos from './components/Todos.js';
import { todos } from './reducers/todos.js';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';

const store = createStore(todos);

ReactDOM.render(
    <Provider store={store}>
        <Todos />
    </Provider>,
    document.getElementById('root')
);
