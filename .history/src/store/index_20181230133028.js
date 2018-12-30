import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from '../reducer'

const logger = createLogger({
    collapsed: true
})

