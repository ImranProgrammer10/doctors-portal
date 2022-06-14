import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
 
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Contact></Contact>
        </div>
    );
};

export default Home;