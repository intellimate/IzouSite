import expect from 'expect'
import * as loginActions from '../src/js/actions/loginAction'

describe('login actions', () => {
    it('login should return its own action', () => {
        expect(loginActions.requestLogin('jundl77', 'test')).toEqual({
            type: loginActions.LOGIN_REQUEST,
            username: 'jundl77',
            password: 'test'
        })
    })
})