import C from '../../constants'
import freezer from '../freezer'
import {updateTemperature} from '../../AC'

describe("Freezer reducer", () => {
    it("shouldstore the temperature in the state", () => {
        const newState = freezer(undefined, updateTemperature(10));
        expect(newState.temperature).toEqual(C.10)
    })

})