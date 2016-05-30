import React from 'react';
import { connect } from 'react-redux';
import TechnologyRatings from './TechnologyRatings';
import Workshops from '../workshop/Workshops';
import Strings from '../common/Strings';

import '../../sass/user/profile.scss';

const Profile = ({ user }) => (
    <div className="user-profile">
        <h1 className="profile-heading">{Strings.profile.profileTitle}</h1>
        <div className="user-information">
            <div className="avatar-container">
                <img className="avatar" src={user.avatarUrl} alt={user.name} />
            </div>
            <div className="about-user">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-description">{user.description}</p>
            </div>
        </div>
        <div className="skill-summary">
            <TechnologyRatings technologies={user.technologies} />
        </div>
        <hr className="rule" />
        <h1 className="workshops-heading">{Strings.workshops.title}</h1>
        <div className="workshop-summary">
            <Workshops
                title={Strings.workshops.attendedTitle}
                className="workshops-attended-summary"
                workshops={user.workshopsAttended}
            />
            <Workshops
                title={Strings.workshops.upcomingTitle}
                className="workshops-upcoming-summary"
                workshops={user.workshopsUpcoming}
            />
        </div>
    </div>
);

Profile.propTypes = {
    user: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user || {}
});

export { Profile };

export default connect(mapStateToProps)(Profile);
