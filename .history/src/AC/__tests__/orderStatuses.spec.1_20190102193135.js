import C from '../../constants'
import {fullFillOrder, payForOrder, cancelOrder} from '../index'

describe("Order statuses", () => {
    it("should containt the right action type", () => {
        const action = fullFillOrder();
        expect(action.type).toEqual(C.FULLFILL_ORDER)
    })

    it("should have a name and amount in payload", () => {
        const action = addProductToFreezer(F.CHOCOLATE, 5);
        expect(action.payload.name).toEqual(F.CHOCOLATE);
        expect(action.payload.amount).toEqual(5);
    }) 
})