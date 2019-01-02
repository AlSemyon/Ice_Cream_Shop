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
        payloaad: {customerName, createAt, cone, scoops}
    }
}