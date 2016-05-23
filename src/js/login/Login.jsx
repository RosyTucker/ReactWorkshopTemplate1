import React from 'react';
import { connect } from 'react-redux';
import { attemptLogin } from '../common/actionCreator';
import LoginButton from './LoginButton';
import '../../sass/login/login.scss';

const Login = ({ onLoginClicked, user }) => (
    <div className="login">
        <LoginButton onClick={onLoginClicked} />
        {user.name ? <span className="user-name">Hello {user.name}</span> : null}
    </div>
);

Login.propTypes = {
    onLoginClicked: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user || {}
});

const mapDispatchToProps = dispatch => ({
    onLoginClicked: () => dispatch(attemptLogin())
});

export { Login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
