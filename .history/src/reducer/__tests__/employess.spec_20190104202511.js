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
        it('should store the employee data', function() {
            const fakeData = [1, 2, 3];
            const result = employess(undefined, {
                type: C.FETCH_EMPLOYESS_SUCCESS,
                payload: fakeData
            })

            expect(result.data).toEqual(fakeData)
        })
    })
})