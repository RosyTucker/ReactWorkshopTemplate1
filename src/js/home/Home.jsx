import React from 'react';
import Banner from './Banner';
import Strings from '../common/Strings';

import bannerImg from '../../images/homeBanner.jpg';
import '../../sass/home/home.scss';

const Home = () => {
    const { bannerTitle, bannerSubtitle } = Strings.home;
    return (
        <div className="home">
            <Banner imgSrc={bannerImg} title={bannerTitle} subtitle={bannerSubtitle} />
        </div>
    );
};

export default Home;
