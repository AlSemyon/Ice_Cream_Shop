import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import C from '../../constants'
import {fetchEmployess} from '../index'

describe("Fetch employess", () => {
    it('should dispatch REQUEST action when action is dispatched', () => {
        const spy = jest.fn();
        const thunk = fetchEmployess();
        thunk(spy);

        expect(spy.mock.calls[0][0]).toEqual({
            type: C.FETCH_EMPLOYESS_REQUEST
        })

    })
})