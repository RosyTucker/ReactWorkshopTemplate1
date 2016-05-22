import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { AppRoutes } from './Constants';
import Login from '../login/Login';
import Home from '../home/Home';
import AppWithNav from '../navigation/AppWithNav';

const AppRouter = () => (
    <Router history={hashHistory}>
        <Route component={AppWithNav}>
            <Route path={AppRoutes.home} component={Home} />
            <Route path={AppRoutes.login} component={Login} />
        </Route>
    </Router>
);

export default AppRouter;
