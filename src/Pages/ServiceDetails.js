import React from 'react';
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import Banner from '../assets/bg/144.jpg';
import BreadCrumb from '../Utils/BreadCrumb';
import CallTo from '../Utils/CallTo';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {cat} = useParams();
    const decodedTitle = decodeURIComponent(cat)
    return (
        <div>
            <div className="body-wrapper">
                <AboutNaveBarHeader></AboutNaveBarHeader>
                <BreadCrumb title="Details" bannerImg={Banner}></BreadCrumb>
                

                <CallTo></CallTo>
                <AboutNavBarFooter></AboutNavBarFooter>
            </div>
        </div>
    );
};

export default ServiceDetails;