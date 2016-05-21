import { React, expect, Enzyme, Sandbox, ComponentHelpers } from '../../TestHelpers';
import Home from '../../../src/js/home/Home';
import Nav from '../../../src/js/navigation/Nav';

describe('Home.jsx', () => {
    let home;
    const sandbox = new Sandbox();

    beforeEach(() => {
        ComponentHelpers.stub(sandbox, Nav);

        const app = Enzyme.shallow(<Home />);
        home = app.find('.home');
    });

    it('should contain a home div', () => {
        expect(home).to.have.length(1);
    });

    it('should contain a nav', () => {
        expect(home.contains(<Nav />)).to.equal(true);
    });
});
