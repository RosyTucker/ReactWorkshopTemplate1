import { React, expect, sinon, Enzyme } from '../../TestHelpers';
import { Login } from '../../../src/js/login/Login';
import Strings from '../../../src/js/common/Strings';

describe('Login.jsx', () => {
    let login;
    let onLoginClicked;
    let user;

    beforeEach(() => {
        onLoginClicked = sinon.spy();
        user = {};

        const props = { onLoginClicked, user };
        login = Enzyme.shallow(<Login {...props} />);
    });

    it('should be a login div', () => {
        expect(login.type()).to.equal('div');
        expect(login.hasClass('login')).to.equal(true);
    });

    it('should contain a login button', () => {
        const buttons = login.find('button');

        expect(buttons).to.have.length(1);

        const loginButton = buttons.first();

        expect(loginButton.hasClass('login-button')).to.equal(true);
        expect(loginButton.props().onClick).to.equal(onLoginClicked);
        expect(loginButton.text()).to.equal(Strings.login.buttonText);
    });

    it('should say hello if the user has a name', () => {
        user = { name: 'A name' };
        const props = { onLoginClicked, user };
        login = Enzyme.shallow(<Login {...props} />);

        const userNames = login.find('.user-name');

        expect(userNames).to.have.length(1);

        const userName = userNames.first();

        expect(userName.text()).to.equal('Hello A name');
    });

    it('should not say hello if the user has not got a name', () => {
        const userNames = login.find('.user-name');

        expect(userNames).to.have.length(0);
    });
});
