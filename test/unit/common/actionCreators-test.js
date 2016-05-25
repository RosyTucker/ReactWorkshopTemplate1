import { expect } from '../../TestHelpers';
import { ActionTypes } from '../../../src/js/common/Constants';
import * as ActionCreators from '../../../src/js/common/actionCreator';

describe('actionCreators.js', () => {
    describe('receiveUser', () => {
        it('should create an action with type RECEIVE_USER and pass the user object', () => {
            const user = { someKey: 'somevalue' };
            expect(ActionCreators.receiveUser(user)).to.deep.equal({
                type: ActionTypes.RECEIVE_USER,
                user
            });
        });
    });

    describe('attemptLogin', () => {
        it('should dispatch a receive user event when api call returns', () => {
            // TODO when we have an API to call/ mock
        });

        it('should redirect to userHome on successful login', () => {
            // TODO when we have an API to call/ mock
        });
    });
});
