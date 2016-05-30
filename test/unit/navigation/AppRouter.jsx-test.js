import { React, expect, Enzyme, Sandbox, ComponentHelpers } from '../../TestHelpers';
import { Router, Route } from 'react-router';
import AppRouter from '../../../src/js/navigation/AppRouter';
import AppWithNav from '../../../src/js/navigation/AppWithNav';
import Home from '../../../src/js/home/Home';
import Profile from '../../../src/js/user/Profile';
import ProblemsHome from '../../../src/js/problems/ProblemsHome';
import LoggedInApp from '../../../src/js/navigation/LoggedInApp';
import AppRoutes from '../../../src/js/navigation/AppRoutes';

describe('AppRouter.jsx', () => {
    const sandbox = new Sandbox();
    let appRouter;
    let history;

    beforeEach(() => {
        ComponentHelpers.stub(sandbox, Router);
        ComponentHelpers.stub(sandbox, Route);

        history = { someHistoryStuff: {} };
        appRouter = Enzyme.shallow(
            <AppRouter history={history} />
        );
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should be a router', () => {
        expect(appRouter.type()).to.equal(Router);
        expect(appRouter.props().history).to.equal(history);
    });

    describe('AppWithNav routing', () => {
        let outerRoute;

        beforeEach(() => {
            outerRoute = appRouter.childAt(0);
        });

        it('should have an wrapping route of AppWithNav', () => {
            expect(outerRoute.type()).to.equal(Route);
            expect(outerRoute.props().component).to.equal(AppWithNav);
        });

        it('should contain a home route', () => {
            const homeRoute = outerRoute.childAt(0);
            expect(homeRoute.props().path).to.equal(AppRoutes.home);
            expect(homeRoute.props().component).to.equal(Home);
        });

        it('should contain a problems route', () => {
            const problemsRoute = outerRoute.childAt(1);
            expect(problemsRoute.props().path).to.equal(AppRoutes.problems);
            expect(problemsRoute.props().component).to.equal(ProblemsHome);
        });

        it('should contain a logged in app route', () => {
            const loggedInApp = outerRoute.childAt(2);
            expect(loggedInApp.props().component).to.equal(LoggedInApp);
        });

        it('should contain a profile within the logged in app', () => {
            const loggedInApp = outerRoute.childAt(2);

            const userHome = loggedInApp.childAt(0);
            expect(userHome.props().path).to.equal(AppRoutes.profile);
            expect(userHome.props().component).to.equal(Profile);
        });

        it('should redirect to home for unknown route as the last option', () => {
            const redirectRoute = outerRoute.children().last();

            expect(redirectRoute.props().from).to.equal('*');
            expect(redirectRoute.props().to).to.equal(AppRoutes.home);
        });
    });
});
