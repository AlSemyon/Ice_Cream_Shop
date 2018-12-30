import C from '../constants'

const defaultState = {
    temperature: null
}

export default (state = defaultState, action) => {
    const {type, paylaod} = action;
    switch (type) {
        case C.UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: paylaod
            }
        default:
            return state
    }
}