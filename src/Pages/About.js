import React, { useEffect, useState } from 'react';
import Countdown from '../Components/HomeComponent/Countdown';
import AboutSection from '../Components/HomeComponent/About';
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import BreadCrumb from '../Utils/BreadCrumb';
import Banner from '../assets/bg/144.jpg';
import CallTo from '../Utils/CallTo';
import LeatestBlogs from '../Components/HomeComponent/LeatestBlogs';
import AboutFeature from '../Components/NavBarAboutComponents/AboutFeature';
import Faq from '../Components/NavBarAboutComponents/Faq';
import ClientFeedBack from '../Components/NavBarAboutComponents/ClientFeedBack';
import Video from '../Components/NavBarAboutComponents/Video';
import Team from '../Components/NavBarAboutComponents/Team';
import CounterUp from '../Components/NavBarAboutComponents/CounterUp';
import CoreFeature from '../Components/NavBarAboutComponents/CoreFeature';


const About = () => {

    return (
        <>

            {/* <!-- Body main wrapper start --> */}
            <div className="body-wrapper">

                <AboutNaveBarHeader></AboutNaveBarHeader>

                {/* <!-- BREADCRUMB AREA START --> */}
                <BreadCrumb title="About US" bannerImg={Banner}></BreadCrumb>
                {/* <!-- BREADCRUMB AREA END --> */}

                {/* <!-- ABOUT US AREA START --> */}

                <AboutSection></AboutSection>
                {/* <!-- ABOUT US AREA END --> */}

                {/* <!-- COUNTDOWN AREA START --> */}
                <Countdown></Countdown>
                {/* <!-- COUNTDOWN AREA END --> */}

                {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
                <CoreFeature></CoreFeature>
                {/* <!-- FEATURE AREA END --> */}


                {/* <!-- COUNTER UP AREA START --> */}
               <CounterUp></CounterUp>
                {/* <!-- COUNTER UP AREA END --> */}

                {/* <!-- TEAM AREA START (Team - 3) --> */}
               <Team></Team>
                {/* <!-- TEAM AREA END --> */}

                {/* <!-- VIDEO AREA START --> */}
                <Video></Video>
                {/* <!-- VIDEO AREA END --> */}

                {/* <!-- TESTIMONIAL AREA START (testimonial-4) --> */}
                <ClientFeedBack></ClientFeedBack>
                {/* <!-- TESTIMONIAL AREA END --> */}

                {/* <!-- FAQ AREA START (faq-2) (ID > accordion_2) --> */}
                <Faq></Faq>
                {/* <!-- FAQ AREA START --> */}

                {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
                <AboutFeature></AboutFeature>
                {/* <!-- FEATURE AREA END --> */}

                {/* <!-- BLOG AREA START (blog-3) --> */}
                <LeatestBlogs></LeatestBlogs>
                {/* <!-- BLOG AREA END --> */}

                {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
                <CallTo></CallTo>
                {/* <!-- CALL TO ACTION END --> */}

                <AboutNavBarFooter></AboutNavBarFooter>

            </div>
            {/* <!-- Body main wrapper end --> */}
        </>
    );
};

export default About;