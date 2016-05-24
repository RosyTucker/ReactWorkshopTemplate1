import { ActionTypes } from './Constants';
import { hashHistory } from 'react-router';
import AppRoutes from '../navigation/AppRoutes';

const redirect = route => hashHistory.push(route);

const receiveUser = user => ({
    type: ActionTypes.RECEIVE_USER,
    user
});

const attemptLogin = () => dispatch => {
    setTimeout(() => {
        dispatch(receiveUser({ name: 'Rosy', email: 'rosy.m.tucker@gmail.com' }));
        redirect(AppRoutes.userHome);
    }, 500);
};

export {
    attemptLogin,
    receiveUser
};
