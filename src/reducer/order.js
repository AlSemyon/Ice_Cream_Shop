import C from '../constants'

export default (state = [], action) => {
    const {type, payload, randomId} = action;
    switch(type) {
        case C.PLACE_ORDER:
            return [...state, {...payload, id: randomId, status: 'pending'}]

        case C.FULLFILL_ORDER:
            return state.map((order,index) => {
                return index === payload ?
                    {...order, status: 'fullfilled'} : order
            })
        case C.PAY_FOR_ORDER:
            return state.map((order,index) => {
                return index === payload ?
                    {...order, status: 'paid'} : order
            })

        case C.CANCEL_ORDER:
            return state.filter((order,index) => index !== payload)
        default:
            return state;
    }

}