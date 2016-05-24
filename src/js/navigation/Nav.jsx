import React from 'react';
import { Link } from 'react-router';
import AppRoutes from './AppRoutes';
import Strings from '../common/Strings';

import '../../sass/navigation/nav.scss';

const NavItem = props => (
    <li><Link to={props.route}>{props.title}</Link></li>
);

NavItem.propTypes = {
    title: React.PropTypes.string,
    route: React.PropTypes.string.isRequired
};

const Nav = () => (
    <div className="nav">
        <ul>
            <NavItem title={Strings.nav.home} route={AppRoutes.home} />
            <NavItem title={Strings.nav.problems} route={AppRoutes.problemsHome} />
            <NavItem title={Strings.nav.userHome} route={AppRoutes.userHome} />
        </ul>
    </div>
);

export default Nav;
