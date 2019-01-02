import order from '../order'
import {cancelOrder, fullFillOrder, payForOrder} from '../../AC'

describe("Order reducer", () => {
    it("should mark a giver order as fullfielled", () => {
        const existingState = [{
            customerName: 'Vasya',
            status: 'pending',
            id: 1
        }];
        const newState = order(existingState, fullFillOrder(1));
        expect(newState[0].status).toEqual('fuullfilled')
    })
    it("should store product in th state", () => {
        const newState = freezer(undefined, addProductToFreezer(F.CHOCOLATE, 5));
        expect(newState.flavors[F.CHOCOLATE]).toEqual(5);
    })

    it("should add the product in the flavot if it alreadyexists", () => {
        const oldState = {
                flavors: {
                    [F.CHOCOLATE]: 5
                }
        }
        const newState = freezer(oldState, addProductToFreezer(F.CHOCOLATE, 5));
        expect(newState.flavors[F.CHOCOLATE]).toEqual(10);
    })

    
    it("should make sure to overflow the freezer", () => {
        const oldState = {
                flavors: {
                    [F.CHOCOLATE]: 90
                }
        }
        const newState = freezer(oldState, addProductToFreezer(F.CHOCOLATE, 15));
        expect(newState.flavors[F.CHOCOLATE]).toEqual(100);
    })

})