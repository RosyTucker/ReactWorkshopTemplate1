import { React, expect, Enzyme, sinon } from '../../TestHelpers';
import { LoggedInApp } from '../../../src/js/navigation/LoggedInApp';
import AppRoutes from '../../../src/js/navigation/AppRoutes';

describe('LoggedInApp.jsx', () => {
    const children = <div className="some-logged-in-thing"></div>;
    let loggedInApp;
    let history;

    beforeEach(() => {
        history = {
            replace: sinon.spy()
        };
    });

    it('should be a div with children when logged in', () => {
        loggedInApp = Enzyme.shallow(
            <LoggedInApp history={history} isLoggedIn >{children}</LoggedInApp>
        );

        expect(loggedInApp.type()).to.equal('div');
        expect(loggedInApp.hasClass('logged-in-app')).to.equal(true);

        expect(loggedInApp.contains(<div className="some-logged-in-thing"></div>)).to.equal(true);
    });

    it('should kick user back to home when not logged in', () => {
        loggedInApp = Enzyme.shallow(
            <LoggedInApp history={history} isLoggedIn={false}>{children}</LoggedInApp>
        );

        expect(history.replace).to.have.been.calledWith(AppRoutes.home);
    });
});
