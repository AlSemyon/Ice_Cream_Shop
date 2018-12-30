export const increase = val = ({
    type: "INCREASE",
    payload: val
})

const defaultState = { 
    count: 0
}

export function reducer(state = defaultState, action = {}) {
    return state
}