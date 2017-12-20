import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './App';
import { createStore } from 'redux';
import { omit } from 'underscore';

// omit([1,2,3], function(value, key, object) {
//     return key == '2';
// });

const ADD = 'ADD';
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
const DELETE='DELETE';

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
        case DELETE:
            const filtered = state.todos.filter( (e, index) => index !== action.index)
            console.log(filtered)
            return {
                todos: filtered,
                inputText: ''
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
                 onDelete={(index) => store.dispatch({type: DELETE, index: index})}

        />,
        document.getElementById('root')
    )
};

store.subscribe(renderTodo);
renderTodo();
