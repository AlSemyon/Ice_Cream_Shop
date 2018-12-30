import {increase, reducer, store} from '../counter'

describe("Counter", () => {
    it('should return the state', () => {
        const state = store.getState();
    })

    it('should increase counter', () => {
        const action = increase(3);
        const result = reducer(undefined, action);
        expect(result.count).toEqual(3)
    })
})