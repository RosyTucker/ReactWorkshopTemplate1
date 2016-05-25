import { expect } from '../../TestHelpers';
import { ActionTypes } from '../../../src/js/common/Constants';
import reducers from '../../../src/js/common/reducers';

describe('reducers.js', () => {
    it('should set user to an empty object if action type is not receive user', () => {
        const action = { type: 'NOT_RECEIVE_USER' };

        const updatedState = reducers(undefined, action);

        expect(updatedState).to.deep.equal({ user: {} });
    });

    it('should set the user in the state when action type is receive user', () => {
        const user = { someUser: 'some value' };
        const action = { type: ActionTypes.RECEIVE_USER, user };

        const updatedState = reducers(undefined, action);

        expect(updatedState).to.deep.equal({ user });
    });

    it('should append received user to existing user', () => {
        const user = { someUser: 'some value' };
        const action = { type: ActionTypes.RECEIVE_USER, user };
        const existingState = { user: { someOtherKey: 'some other value' } };

        const updatedState = reducers(existingState, action);

        expect(updatedState).to.deep.equal({
            user: { someUser: 'some value', someOtherKey: 'some other value' }
        });
    });
});
