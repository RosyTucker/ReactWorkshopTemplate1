import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { AppRoutes } from './common/Constants';
import Login from './user/UserHome';
import Home from './home/Home';
import AppWithNav from './navigation/AppWithNav';
import LoggedInApp from './navigation/LoggedInApp';

const AppRouter = () => (
    <Router history={hashHistory}>
        <Route component={AppWithNav}>
            <Route path={AppRoutes.home} component={Home} />
            <Route component={LoggedInApp} >
                <Route path={AppRoutes.login} component={Login} />
            </Route>
        </Route>
    </Router>
);

export default AppRouter;
