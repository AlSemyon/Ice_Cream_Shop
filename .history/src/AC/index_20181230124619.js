import C from '../constants'

export function updateTemperature(temperature) {
    return {
        type: C.UPDATE_TEMPERATURE,
        payload: temperature
    }
}