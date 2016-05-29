import React from 'react';
import { Link } from 'react-router';
import NavItem from '../navigation/NavItem';
import Strings from '../common/Strings';
import AppRoutes from './AppRoutes';

import '../../sass/navigation/nav.scss';

const Nav = props => {
    const navClass = props.isClear ? 'nav clear' : 'nav opaque';
    return (
        <div className={navClass}>
            <ul>
                <NavItem title={Strings.nav.home} route={AppRoutes.home} />
                <NavItem title={Strings.nav.problems} route={AppRoutes.problems} />
                <NavItem title={Strings.nav.profile} route={AppRoutes.profile} />
            </ul>
        </div>
    );
};

Nav.propTypes = {
    isClear: React.PropTypes.bool
};

export default Nav;
