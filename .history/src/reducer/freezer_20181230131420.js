import C from '../constants'

const defaultState = {
    temperature: null,
    flavors: {}
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