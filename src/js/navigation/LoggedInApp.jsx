import React from 'react';
import { connect } from 'react-redux';
import AppRoutes from '../navigation/AppRoutes';


class LoggedInApp extends React.Component {
    componentWillMount() {
        if (!this.props.isLoggedIn) {
            this.props.history.replace(AppRoutes.home);
        }
    }

    renderLoggedIn() {
        return (<div className="logged-in-app">{this.props.children}</div>);
    }

    renderNotLoggedIn() {
        return <div></div>;
    }

    render() {
        return this.props.isLoggedIn ? this.renderLoggedIn() : this.renderNotLoggedIn();
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
