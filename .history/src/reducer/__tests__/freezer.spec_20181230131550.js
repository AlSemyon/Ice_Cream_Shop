import C from '../../constants'
import F from '../../flavors'
import freezer from '../freezer'
import {updateTemperature, addProductToFreezer} from '../../AC'

describe("Freezer reducer", () => {
    it("should store the temperature in the state", () => {
        const newState = freezer(undefined, updateTemperature(10));
        expect(newState.temperature).toEqual(10);
    })

    it("should store product in th state", () => {
        const newState = freezer(undefined, addProductToFreezer(F.CHOCOLATE, 5));
        expect(newState.temperature).toEqual(10);
    })

})