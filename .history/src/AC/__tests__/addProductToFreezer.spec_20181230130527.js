import C from '../../constants'
import {addProductToFreezer} from '../index'

describe("Add product to freezer", () => {
    it("should containt the right action type", () => {
        const action = updateTemperature();
        expect(action.type).toEqual(C.UPDATE_TEMPERATURE)
    })

    it("should containt the temperature in the payload", () => {
        const action = updateTemperature(10);
        expect(action.payload).toEqual(10)
    })
})