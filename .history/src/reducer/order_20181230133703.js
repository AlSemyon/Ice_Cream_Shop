import C from '../constants'

const defaultState = {
    temperature: null,
    flavors: {}
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return state
    }
}