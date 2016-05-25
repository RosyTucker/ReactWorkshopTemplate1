import { React, expect, Enzyme, Sandbox } from '../../TestHelpers';
import Nav from '../../../src/js/navigation/Nav';
import NavItem from '../../../src/js/navigation/NavItem';
import Strings from '../../../src/js/common/Strings';
import AppRoutes from '../../../src/js/navigation/AppRoutes';

describe('Nav.jsx', () => {
    const sandbox = new Sandbox();
    let nav;

    beforeEach(() => {
        nav = Enzyme.shallow(<Nav />);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should be a container with a list', () => {
        expect(nav.type()).to.equal('div');
        expect(nav.hasClass('nav'));

        const list = nav.find('ul');
        expect(list).to.have.length(1);
    });

    it('should contain a home nav item as item 0', () => {
        const list = nav.find('ul');

        const homeItem = list.childAt(0);
        expect(homeItem.type()).to.equal(NavItem);
        expect(homeItem.props().title).to.equal(Strings.nav.home);
        expect(homeItem.props().route).to.equal(AppRoutes.home);
    });

    it('should contain a problems nav item as item 1', () => {
        const list = nav.find('ul');

        const homeItem = list.childAt(1);
        expect(homeItem.type()).to.equal(NavItem);
        expect(homeItem.props().title).to.equal(Strings.nav.problems);
        expect(homeItem.props().route).to.equal(AppRoutes.problemsHome);
    });

    it('should contain a problems nav item as item 2', () => {
        const list = nav.find('ul');

        const homeItem = list.childAt(2);
        expect(homeItem.type()).to.equal(NavItem);
        expect(homeItem.props().title).to.equal(Strings.nav.userHome);
        expect(homeItem.props().route).to.equal(AppRoutes.userHome);
    });
});