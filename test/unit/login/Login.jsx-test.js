import { React, expect, sinon, Enzyme, ComponentHelpers, Sandbox } from '../../TestHelpers';
import { Login } from '../../../src/js/login/Login';
import LoginButton from '../../../src/js/home/LoginButton';

describe('Login.jsx', () => {
    const sandbox = new Sandbox();
    let login;
    let onLoginClicked;
    let user;

    beforeEach(() => {
        ComponentHelpers.stub(sandbox, LoginButton);
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
        const buttons = login.find(LoginButton);

        expect(buttons).to.have.length(1);

        const loginButton = buttons.first();

        expect(loginButton.props().onClick).to.equal(onLoginClicked);
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
