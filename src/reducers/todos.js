import {ADD_TODO, DELETE_TODO} from "../actions/action.js";

export function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: state.todos.concat({
                    text: action.text
                })
            };
        case DELETE_TODO:
            const filtered = state.todos.filter((e, index) => index !== action.index);
            return {
                todos: filtered
            };
        default:
            return state;
    }
}