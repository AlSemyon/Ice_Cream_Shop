import C from '../constants'

const defaultState = {
    temperature: null
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case C.UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: payload
            }
        default:
            return state
    }
}