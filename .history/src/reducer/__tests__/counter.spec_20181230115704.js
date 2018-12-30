import {increase, reducer} from '../counter'

describe("Counter", () => {
    it('should have default state', () => {
        const result = reducer();
        expect(result.count).toEqual(0)
    })

    it('should increase counter', () => {
        
    })
})