import React from 'react';
import BreadCrumb from '../Utils/BreadCrumb';
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import CallTo from '../Utils/CallTo';
import Banner from '../assets/bg/144.jpg';

const Service = () => {
    return (
        <div>
            <div className="body-wrapper">
                <AboutNaveBarHeader></AboutNaveBarHeader>
                <BreadCrumb title="All Products" bannerImg={Banner}></BreadCrumb>
                <CallTo></CallTo>
                <AboutNavBarFooter></AboutNavBarFooter>
            </div>
        </div>
    );
};

export default Service;