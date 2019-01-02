import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from '../reducer'
import randomid from '../middlewares/randomid'

const logger = createLogger({
    collapsed: true
})

const enchancer = applyMiddleware(thunk, logger);

const store = createStore(reducer, {}, enchancer);
window.store = store;

export default store;