import C from '../constants'

export default (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case C.PLACE_ORDER:
            return [...state, {...payload, status: 'pending'}]
        case C.FULLFILL_ORDER:
            return state.map((order) => {
                return order.id === payload ? {...order, status: 'fullfilled'} :  order;
            })
        case C.PAY_FOR_ORDER:
            return state.map((order) => {
                return order.id === payload ? {...order, status: 'paid'} :  order;
            })
        default:
            return state
    }
}