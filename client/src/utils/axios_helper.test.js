import axios from 'axios'
import GlobeTrotter from './axios_helper'

jest.mock('./axios_helper')
let stubToken;


describe('axios helper', () => {

    stubToken = 'testtesttest'

    test('it calls loginRegUser', () => {
        const mockGlobeTrotter = jest.fn((stubToken) => {
            GlobeTrotter(stubToken)
        })
        mockGlobeTrotter
        expect(mockGlobeTrotter).toBeCalled();
    })
})