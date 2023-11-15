import React from 'react';
import { NavLink } from "react-router-dom";
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import Banner from '../assets/bg/144.jpg';
import BreadCrumb from '../Utils/BreadCrumb';
import CallTo from '../Utils/CallTo';
import ContactAddress from '../Components/NabBarContactComponent/ContactAddress';
import ContactMessage from '../Components/NabBarContactComponent/ContactMessage';

const Contact = () => {
    return (
        <>
            <AboutNaveBarHeader></AboutNaveBarHeader>

            <BreadCrumb title="Contact" bannerImg={Banner}></BreadCrumb>

            {/* <!-- CONTACT ADDRESS AREA START --> */}
            <ContactAddress></ContactAddress>

            {/* <!-- CONTACT ADDRESS AREA END --> */}

            {/* <!-- CONTACT MESSAGE AREA START --> */}
            <ContactMessage></ContactMessage>
            {/* <!-- CONTACT MESSAGE AREA END --> */}

            {/* <!-- GOOGLE MAP AREA START --> */}
            <div className="google-map mb-120">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            {/* <!-- GOOGLE MAP AREA END --> */}

            <CallTo></CallTo>
            <AboutNavBarFooter></AboutNavBarFooter>
        </>
    );
};

export default Contact;