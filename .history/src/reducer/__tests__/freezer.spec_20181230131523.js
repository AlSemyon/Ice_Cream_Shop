import C from '../../constants'
import freezer from '../freezer'
import {updateTemperature, addProductToFreezer} from '../../AC'

describe("Freezer reducer", () => {
    it("should store the temperature in the state", () => {
        const newState = freezer(undefined, updateTemperature(10));
        expect(newState.temperature).toEqual(10);
    })

    it("should store product in th state", () => {
        const newState = freezer(undefined, updateTemperature(10));
        expect(newState.temperature).toEqual(10);
    })

})