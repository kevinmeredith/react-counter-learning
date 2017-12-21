import { Provider } from 'react-redux';
import { Todos } from './components/Todos.js';
import { todos } from './reducers/todos.js';

const store = createStore(todos);

ReactDOM.render(
    <Provider store={store}>
        <Todos />
    </Provider>
);
