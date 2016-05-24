import { React, expect, Enzyme } from '../../TestHelpers';
import { UserHome } from '../../../src/js/user/UserHome';

describe('User.jsx', () => {
    let userHome;
    let user;

    beforeEach(() => {
        user = {};
        userHome = Enzyme.shallow(<UserHome user={user} />);
    });

    it('should be a user div', () => {
        expect(userHome.type()).to.equal('div');
        expect(userHome.hasClass('userHome')).to.equal(true);
    });

    it('should say hello if the user has a name', () => {
        user = { name: 'A name' };
        userHome = Enzyme.shallow(<UserHome user={user} />);

        const userNames = userHome.find('.user-name');

        expect(userNames).to.have.length(1);

        const userName = userNames.first();

        expect(userName.text()).to.equal('Hello A name');
    });

    it('should not say hello if the user has not got a name', () => {
        const userNames = userHome.find('.user-name');

        expect(userNames).to.have.length(0);
    });
});
