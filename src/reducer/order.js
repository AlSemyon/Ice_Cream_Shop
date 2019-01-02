import C from '../constants'

export default (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case C.PLACE_ORDER:
            return [...state, {...payload, status: 'pending'}]
        default:
            return state
    }
}