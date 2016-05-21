import React from 'react';
import { connect } from 'react-redux';
import Nav from '../navigation/Nav';
import { attemptLogin } from '../common/actionCreator';

const Login = ({ onLoginClicked, user }) => (
    <div className="login">
        <Nav />
        <button onClick={onLoginClicked}>Login With Github</button>
        Hello {user.name}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
