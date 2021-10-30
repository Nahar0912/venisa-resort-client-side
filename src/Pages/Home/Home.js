import React from 'react';
import Banner from './Banner/Banner';
import Packages from './Packages/Packages';
import Services from './Services/Services';
import Video from './Video/Video';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Packages></Packages>
            <Video></Video>
        </div>
    );
};

export default Home;