import React from 'react';
import NavBar from '../LandingPage/NavBar';
import '../../index.css';
import CardItem from '../LandingPage/CardItem';
import Serveices from '../LandingPage/Serveices';
import AppStore from '../LandingPage/AppStore';
import About from '../LandingPage/About';
import Contact from '../LandingPage/Connect';
import Footer from '../LandingPage/Footer';

function HomePage() {
    return (
        <div>
            <NavBar />
            <CardItem />
            <Serveices />
            <AppStore />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}
export default HomePage;