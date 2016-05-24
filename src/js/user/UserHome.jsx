import React from 'react';
import { connect } from 'react-redux';

import '../../sass/user/userHome.scss';

const UserHome = ({ user }) => (
    <div className="userHome">
        {user.name ? <span className="user-name">Hello {user.name}</span> : null}
    </div>
);

UserHome.propTypes = {
    user: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user || {}
});

export { UserHome };

export default connect(mapStateToProps)(UserHome);
