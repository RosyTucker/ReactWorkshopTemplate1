import { combineReducers } from 'redux';
import { ActionTypes } from './Constants';

const user = (state = {}, action) => {
    switch (action.type) {
    case ActionTypes.RECEIVE_USER:
        return Object.assign({}, state, action.user);
    default:
        return state;
    }
};

const reducers = combineReducers({ user });

export default reducers;
