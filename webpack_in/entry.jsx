console.log("JSX entry logic.");

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import actions from './actions.js';
import { createStore } from 'redux';
import reducer from './reducer.js'

import QuizPane from './quiz_pane.jsx';


const configureStore = () => {
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    store.dispatch(actions.init());

    return store;
};


ReactDOM.render(
    <Provider store={configureStore()}>
      <QuizPane />
    </Provider>,
    document.getElementById('react-app'));
