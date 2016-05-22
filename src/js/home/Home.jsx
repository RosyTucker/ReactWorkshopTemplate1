import React from 'react';
import Banner from './Banner';
import Strings from '../common/Strings';

import bannerImg from '../../images/homeBanner.jpg';
import featuredAttendee from '../../images/attendantAvatar.jpg';
import '../../sass/home/home.scss';

const Home = () => {
    const { bannerTitle, bannerSubtitle } = Strings.home;
    return (
        <div className="home">
            <Banner imgSrc={bannerImg} title={bannerTitle} subtitle={bannerSubtitle} />
            <div className="featured-content">
                <div className="featured-attendee">
                    <div className="avatar-container">
                        <img alt="Attendee name" className="avatar" src={featuredAttendee} />
                    </div>
                    <blockquote className="featured-attendee-description">
                        Dreamcatcher small batch tattooed wayfarers offal. Distillery occupy 3 wolf
                        moon cornhole knausgaard, crucifix meditation man braid vice. Thundercats
                        asymmetrical jean shorts forage, narwhal cronut flexitarian PBR&B iPhone
                        heirloom tacos kale chips dreamcatcher paleo. Irony meggings ethical pop-up
                        banh mi hella. Paleo bitters dreamcatcher, cronut normcore art party beard
                        +1 squid semiotics chicharrones intelligentsia.
                        <cite>Rose Tucker</cite>
                    </blockquote>
                </div>
            </div>
            <div className="mission-statement">
                <p>
                    We aim to do <em>cool things</em>. Skateboard paleo asymmetrical, shoreditch
                    fapwilliamsburg cardigan selvage taxidermy. Cardigan pitchfork <em>twee 90's
                    butcher</em>. Mustache YOLO godard post-ironic stumptown, selfies retro bicycle
                    rights <em>hoodie</em> flannel.
                </p>
            </div>
            <div className="login-container">
                <button className="login-button">
                    {Strings.login.buttonText}
                </button>
            </div>
        </div>
    );
};

export default Home;
