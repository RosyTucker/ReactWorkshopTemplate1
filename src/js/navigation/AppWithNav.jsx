import React from 'react';
import AppRoutes  from './AppRoutes';
import { connect } from 'react-redux';
import Nav from './Nav';

const AppWithNav = props => {
    const isClear = props.location.pathname === AppRoutes.home;
    return (
        <div className="app-with-nav">
            <Nav isClear={isClear} />
            {props.children}
        </div>
    );
};

AppWithNav.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object.isRequired
};

export default AppWithNav;
