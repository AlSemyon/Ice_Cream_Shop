import C from '../../constants'
import {addProductToFreezer} from '../index'

describe("Add product to freezer", () => {
    it("should containt the right action type", () => {
        const action = addProductToFreezer();
        expect(action.type).toEqual(C.ADD_PRODUCT_TO_FREEZER)
    })

    it("should containt the temperature in the payload", () => {
        const action = updateTemperature(10);
        expect(action.payload).toEqual(10)
    })
})