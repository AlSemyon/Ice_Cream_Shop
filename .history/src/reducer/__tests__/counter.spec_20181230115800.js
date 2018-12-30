import {increase, reducer} from '../counter'

describe("Counter", () => {
    it('should have default state', () => {
        const result = reducer();
        expect(result.count).toEqual(0)
    })

    it('should increase counter', () => {
        const action = increase(3);
        const result = reducer(undefined, action);
        expect(result.count).toEqual(3)
    })
})