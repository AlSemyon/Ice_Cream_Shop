import C from '../../constants'
import {removeScoop} from '../index'

describe("Remove scoop", () => {
    it("should containt the right action type", () => {
        const action = removeScoop('');
        expect(action.type).toEqual(C.REMOVE_SCOOP)
    })

    it("should have a name and amount in payload", () => {
        const action = addProductToFreezer(F.CHOCOLATE, 5);
        expect(action.payload.name).toEqual(F.CHOCOLATE);
        expect(action.payload.amount).toEqual(5);
    }) 
})
