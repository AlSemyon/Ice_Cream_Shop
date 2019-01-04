import axios from 'axios'
import C from '../constants'


export function updateTemperature(temperature) {
    return {
        type: C.UPDATE_TEMPERATURE,
        payload: temperature
    }
}

export function addProductToFreezer(name, amount) {
    return {
        type: C.ADD_PRODUCT_TO_FREEZER,
        payload: {
            name, amount
        }
    }
}

export function placeOrder({customerName, createAt = Date.now(), cone = true, scoops}) {
    return {
        type: C.PLACE_ORDER,
        payload: {customerName, createAt, cone, scoops},
        randomId: true
    }
}
export function fullFillOrder(id) {
    return {
        type: C.FULLFILL_ORDER,
        payload: id
    }
}

export function payForOrder(id) {
    return {
        type: C.PAY_FOR_ORDER,
        payload: id
    }
}

export function cancelOrder(id) {
    return {
        type: C.CANCEL_ORDER,
        payload: id
    }
}

export function doSmth() {
    return function(dispatch, getState) {
        dispatch({
            type: 'test',
            payload: getState().freezer.temperature
        })
    }
}

export function fetchEmployess() {
    return function(dispatch, getState) {
        dispatch({
            type: C.FETCH_EMPLOYESS_REQUEST
        })
        axios.get('/data/employees.json')
             .then(({data}) => console.log(data))
             .catch(err => console.log(err))
    }
}