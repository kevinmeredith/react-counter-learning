import {addTodo, deleteTodo} from "./actions/actionCreators.js";
import React from 'react';

class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        };
    }

    handleChange(e) {
        this.setState({
            inputText: e.target.value
        });
    }

    render() {
        const { todos, onAdd, onDelete } = this.props;

        return (
            <div>
                <h1>TODO!</h1>
                <ul>
                    {
                        todos.map(({ text }, index) =>
                            <li key={index}>
                                {text}
                                <button onClick={() => onDelete(index)}>delete</button>
                            </li>
                        )
                    }
                    <li>
                        <input type="text"
                               value={this.state.inputText}
                               onChange={e => this.handleChange(e)}/>
                        <button onClick={() => onAdd(this.state.inputText)}>add</button>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({todos}) => ({todos});
const mapDispatchToProps = dispatch => ({
    onAdd(text) {
        dispatch(addTodo(text));
    },
    onDelete(index) {
        dispatch(deleteTodo(index));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);