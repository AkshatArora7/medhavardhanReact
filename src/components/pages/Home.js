import React from 'react';
import '../../App.css';
import HomeFunction from '../HomeFunction.js';
import Seperator from '../Seperator.js';
import Navbar from '../Navbar';
import CustomFAB from '../fab/CustomFAB.js';
import AboutPage from '../AboutPage.js';
import Courses from '../Courses.js';
import Testimony from '../Testimony.js';
import Contacts from '../Contact.js';
import DirectorsMessage from '../directorsMessage/DirectorsMessage.js';
import CopyrightSection from '../copyrightSection/CopyrightSection.js';


function Home(){
    return (
        <>
        <Navbar/>
        <CustomFAB/>
        <HomeFunction/>
        <Seperator/>
        <AboutPage/>
        <Seperator/>
        <Courses/>
        <Seperator/>
        <DirectorsMessage/>
        <Testimony/>
        <Contacts/>
        <CopyrightSection/>
        </>
    );
}

export default Home;