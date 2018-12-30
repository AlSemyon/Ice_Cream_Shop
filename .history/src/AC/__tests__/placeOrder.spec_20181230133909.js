import C from '../../constants'
import {placeOrder} from '../index'

describe("Add product to freezer", () => {
    it("should containt the right action type", () => {
        const action = addProductToFreezer();
        expect(action.type).toEqual(C.ADD_PRODUCT_TO_FREEZER)
    })
})