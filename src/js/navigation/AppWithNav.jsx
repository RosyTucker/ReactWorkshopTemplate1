import React from 'react';
import Nav from './Nav';

const AppWithNav = props => (
    <div className="app-with-nav">
        <Nav />
        {props.children}
    </div>
);

AppWithNav.propTypes = {
    children: React.PropTypes.any
};

export default AppWithNav;

