import { React, expect, Enzyme } from '../../TestHelpers';
import AppWithNav from '../../../src/js/navigation/AppWithNav';
import AppRoutes from '../../../src/js/navigation/AppRoutes';
import Nav from '../../../src/js/navigation/Nav';

describe('AppWithNav.jsx', () => {
    let appWithNav;
    let location;

    beforeEach(() => {
        location = { pathname: '/someRoute' };
        appWithNav = Enzyme.shallow(
            <AppWithNav location={location}>
                <div className="someChild"></div>
            </AppWithNav>
        );
    });

    it('should be a div with a nav', () => {
        expect(appWithNav.type()).to.equal('div');
        expect(appWithNav.hasClass('app-with-nav')).to.equal(true);

        const nav = appWithNav.childAt(0);

        expect(nav.type()).to.equal(Nav);

        expect(appWithNav.contains(<div className="someChild"></div>)).to.equal(true);
    });

    it('should pass isClear to Nav if location is home', () => {
        location = { pathname: AppRoutes.home };
        appWithNav = Enzyme.shallow(
            <AppWithNav location={location} />
        );

        const nav = appWithNav.find(Nav);
        expect(nav.props().isClear).to.equal(true);
    });

    it('should not pass isClear to Nav if location is not home', () => {
        location = { pathname: AppRoutes.problems };
        appWithNav = Enzyme.shallow(
            <AppWithNav location={location} />
        );

        const nav = appWithNav.find(Nav);
        expect(nav.props().isClear).to.equal(false);
    });
});
