import C from '../constants'

const defaultState = {
    data: [],
    error: null,
    loading: false
}

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch(type) {
        case C.FETCH_EMPLOYESS_REQUEST: 
            return {...state, loading: true}
        default: 
            return state;
    }
}