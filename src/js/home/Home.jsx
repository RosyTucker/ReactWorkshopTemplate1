import React from 'react';

import '../../sass/home.scss';

const data = {
    title: 'some title'
};

const Home = () => (
    <div className="some-class">
        {data.title}
    </div>
);

export default Home;
