import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import  store from './store'
import {fetchEmployess} from './AC'

import App from './components/App';
store.dispatch(fetchEmployess())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
