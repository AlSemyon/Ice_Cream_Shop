import C from '../constants'

const defaultState = {
    data: [],
    error: null,
    loading: false
}

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch(type) {
        default: 
            return state;
    }
}