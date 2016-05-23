import React from 'react';
import { connect } from 'react-redux';
import { AppRoutes } from '../common/Constants';

class LoggedInApp extends React.Component {
    componentWillMount() {
        if (!this.props.isLoggedIn) {
            this.props.history.replace(AppRoutes.home);
        }
    }

    render() {
        return (
            <div className="logged-in-app">
                Logged in
                {this.props.children}
            </div>
        );
    }
}

LoggedInApp.propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired,
    children: React.PropTypes.any,
    history: React.PropTypes.object.isRequired
};


const mapStateToProps = state => ({ isLoggedIn: !!state.user.email });

export { LoggedInApp };

export default connect(mapStateToProps)(LoggedInApp);
