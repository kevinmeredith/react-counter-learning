import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './App';
import { createStore } from 'redux';

const ADD = 'ADD';
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';

function todo(state = {todos: [], inputText: ""}, action) {
    switch(action.type) {
        case ADD:
            return {
              todos: state.todos.concat( {
                text: state.inputText
              }),
              inputText: ''
            };
        case UPDATE_INPUT_TEXT:
            return {
                todos: state.todos,
                inputText: action.newInputText
            };
        default:
            return state;
    }
}

const store = createStore(todo);

const renderTodo = () => {
    const st = store.getState();
    ReactDOM.render(
        <TodoApp todos={st.todos}
                 inputText={st.inputText}
                 onInputChange={event =>
                     store.dispatch({type: UPDATE_INPUT_TEXT, newInputText: event.target.value})
                 }
                 onAdd={() => store.dispatch({type: ADD})}

        />,
        document.getElementById('root')
    )
};

store.subscribe(renderTodo);
renderTodo();
