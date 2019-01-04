import employess from '../employees'
import C from '../../constants'

describe("Fetching employess", () => {
    describe("Request start", () => {
        it("should set the loading property to true", () => {
            const result = employess(undefined, {
                type: C.FETCH_EMPLOYESS_REQUEST
            })

            expect(result.loading).toEqual(true)
            
        })
    })
})