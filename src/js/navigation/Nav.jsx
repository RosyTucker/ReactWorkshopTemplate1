import React from 'react';
import { Link } from 'react-router';
import { AppRoutes } from '../common/Constants';

import '../../sass/nav.scss';

const NavItem = props => (
    <li><Link to={props.route}>{props.title}</Link></li>
);

NavItem.propTypes = {
    title: React.PropTypes.string,
    route: React.PropTypes.string.isRequired
};

const Nav = () => (
    <div className="nav">
        <ul className="nav-items">
            <NavItem title="Home" route={AppRoutes.home} />
            <NavItem title="Login" route={AppRoutes.login} />
        </ul>
    </div>
);

export default Nav;
