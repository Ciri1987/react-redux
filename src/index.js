import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addComment } from './actions';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('Pierwszy komentarz '));
store.dispatch(addComment('Drugi komentarz '));