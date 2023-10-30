import React from 'react';
import BreadCrumb from '../Utils/BreadCrumb';
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import CallTo from '../Utils/CallTo';
import Banner from '../assets/bg/144.jpg';
import img21 from '../assets/icons/icon-img/21.png';
import LeatestBlogs from '../Components/HomeComponent/LeatestBlogs';
import ServiceBanner from '../Components/Service/ServiceBanner';
import CoreServices from '../Components/Service/CoreServices';

const Service = () => {
    return (
        <div>
            <div className="body-wrapper">
                <AboutNaveBarHeader></AboutNaveBarHeader>
                <BreadCrumb title="Services" bannerImg={Banner}></BreadCrumb>

                {/* <!-- ABOUT US AREA START --> */}
                <ServiceBanner></ServiceBanner>
                {/* <!-- ABOUT US AREA END --> */}

                {/* <!-- SERVICE AREA START (Service 1) --> */}
                <CoreServices></CoreServices>
                {/* <!-- SERVICE AREA END --> */}
                <LeatestBlogs></LeatestBlogs>
                <CallTo></CallTo>
                <AboutNavBarFooter></AboutNavBarFooter>
            </div>
        </div>
    );
};

export default Service;