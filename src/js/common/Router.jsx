import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { AppRoutes } from './Constants';
import Login from '../login/Login';
import App from '../home/Home';

const AppRouter = () => (
    <Router history={hashHistory}>
        <Route path={AppRoutes.home} component={App} />
        <Route path={AppRoutes.login} component={Login} />
    </Router>
);

export default AppRouter;
