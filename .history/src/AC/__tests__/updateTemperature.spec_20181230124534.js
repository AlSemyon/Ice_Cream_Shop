import C from '../../constants'
import {updateTemperature} from '../index'

describe("Update temprature", () => {
    it("should containt the right action type", () => {
        const action = updateTemperature();
        expect(action.type).toEqual(C.UPDATE_TEMPERATURE)
    })
})