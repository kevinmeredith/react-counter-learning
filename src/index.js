import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './App';
import { createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'UPDATE':
            console.log(action);
            const updated = Number.parseInt(action.value);
            if(Number.isNaN(updated))
                return state;
            else
                return updated;
        default:
            return state;
    }
}

// {
//     todos: [{text: ""}],
//     input: ""
// }

function todo(state = {todos:[], inputText: ""}, action) {
    switch(action.type) {
        case 'ADD':
            return {
              todos: <state className="todos"></state>.concat({text: action.text}),
              inputText: ''
            };
        case 'UPDATE_INPUT_TEXT':
            console.log('here:', action.newInputText);
            return {
                todos: state.todos,
                inputText: action.newInputText
            };
        default:
            return state;
    }
}

const store = createStore(todo);

// const render = () => {
//     const st = store.getState();
//     ReactDOM.render(
//         <Counter value={st}
//                  onInc={() => store.dispatch({type: 'INCREMENT'})}
//                  onDec={() => store.dispatch({type: 'DECREMENT'})}
//                  onUpdate={() => store.dispatch({type: 'UPDATE', value: document.getElementById('a').value})} // TODO - fix this hack
//         />,
//         document.getElementById('root')
//     )
// };

const renderTodo = () => {
    const st = store.getState();
    ReactDOM.render(
        <TodoApp todos={st.todos}
                 inputText={st.inputText}
                 onInputChange={event =>
                     store.dispatch({type: 'UPDATE_INPUT_TEXT', newInputText: event.target.value})
                 }
                 onAdd={() => console.log('clicked add')}

        />,
        document.getElementById('root')
    )
};

// items, inputText, onInputChange, onAdd

store.subscribe(renderTodo);
renderTodo();
