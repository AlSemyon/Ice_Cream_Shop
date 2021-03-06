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