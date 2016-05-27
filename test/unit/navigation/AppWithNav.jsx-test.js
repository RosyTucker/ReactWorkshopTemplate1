import { React, expect, Enzyme, sinon } from '../../TestHelpers';
import AppWithNav from '../../../src/js/navigation/AppWithNav';
import Nav from '../../../src/js/navigation/Nav';

describe('AppWithNav.jsx', () => {
    let appWithNav;

    beforeEach(() => {
        appWithNav = Enzyme.shallow(<AppWithNav><div className="someChild"></div></AppWithNav>);
    });

    it('should be a div with a nav', () => {
        expect(appWithNav.type()).to.equal('div');
        expect(appWithNav.hasClass('app-with-nav')).to.equal(true);

        const nav = appWithNav.childAt(0);

        expect(nav.type()).to.equal(Nav);

        expect(appWithNav.contains(<div className="someChild"></div>)).to.equal(true);
    });
});
