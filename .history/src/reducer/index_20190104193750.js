import {combineReducers} from 'redux'

import freezer from './freezer'
import order from './order'
import employeess from './employeess'

export default combineReducers({
    freezer, order, employeess
})