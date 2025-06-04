import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Feature from '../../Components/Feature/Feature';
import Gallery from '../../Components/Gallery/Gallery';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Gallery></Gallery>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;