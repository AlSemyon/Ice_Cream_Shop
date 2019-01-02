import C from '../../constants'
import {fullFillOrder, payForOrder, cancelOrder} from '../index'

describe("Order statuses", () => {
    it("should containt the right action type fullfill order", () => {
        const action = fullFillOrder();
        expect(action.type).toEqual(C.FULLFILL_ORDER)
    })

    it("should containt the right action type pay order", () => {
        const action = payForOrder();
        expect(action.type).toEqual(C.PAY_FOR_ORDER)
    })

    it("should containt the right action type cancelled order", () => {
        const action = cancelOrder();
        expect(action.type).toEqual(C.CANCEL_ORDER)
    })

    it("should have a name and amount in payload", () => {
        const action = cancelOrder(F.CHOCOLATE, 5);
        expect(action.payload.name).toEqual(F.CHOCOLATE);
        expect(action.payload.amount).toEqual(5);
    }) 
})