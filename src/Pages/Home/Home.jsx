import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Feature from '../../Components/Feature/Feature';
import Gallery from '../../Components/Gallery/Gallery';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Sponsor from '../../Components/Sponsor/Sponsor';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Gallery></Gallery>
            <Sponsor></Sponsor>
            <NewsLetter></NewsLetter>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;