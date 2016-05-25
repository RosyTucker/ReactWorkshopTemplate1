import React from 'react';
import { Link } from 'react-router';
import NavItem from '../navigation/NavItem';
import Strings from '../common/Strings';
import AppRoutes from './AppRoutes';

import '../../sass/navigation/nav.scss';

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
