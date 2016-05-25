import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import AppRoutes from './AppRoutes';
import AppWithNav from './AppWithNav';
import LoggedInApp from './LoggedInApp';
import Login from '../user/UserHome';
import Home from '../home/Home';
import ProblemsHome from '../problems/ProblemsHome';

const AppRouter = ({ history }) => (
    <Router history={history}>
        <Route component={AppWithNav}>
            <Route path={AppRoutes.home} component={Home} />
            <Route path={AppRoutes.problemsHome} component={ProblemsHome} />
            <Route component={LoggedInApp} >
                <Route path={AppRoutes.userHome} component={Login} />
            </Route>
        </Route>
    </Router>
);

AppRouter.propTypes = {
    history: React.PropTypes.object.isRequired
};

export default AppRouter;
