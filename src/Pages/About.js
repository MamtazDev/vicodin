import React, { useEffect, useState } from 'react';
import Countdown from '../Components/HomeComponent/Countdown';
import { NavLink } from 'react-router-dom';
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


const About = () => {

    const [leatestBloges, setleatestBloge] = useState([]);
    useEffect(() => {
        fetch("leatestBloge.json")
            .then((res) => res.json())
            .then(data => setleatestBloge(data))
    }, [])

    const ourExpeExpertDoctors = [{
        "name": "Rosalina D. William",
        "title": "Scientist",
        "faceBook": "https://www.facebook.com/",
        "twiter": "https://twitter.com/i/flow/login",
        "linkedIn": "https://www.linkedin.com/",
        "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/team/4.jpg"
    },

    {
        "name": "Kelian Anderson",
        "title": "Dentist",
        "faceBook": "https://www.facebook.com/",
        "twiter": "https://twitter.com/i/flow/login",
        "linkedIn": "https://www.linkedin.com/",
        "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/team/2.jpg"
    },

    {
        "name": "Miranda H. Halim",
        "title": "Caardiologist",
        "faceBook": "https://www.facebook.com/",
        "twiter": "https://twitter.com/i/flow/login",
        "linkedIn": "https://www.linkedin.com/",
        "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/team/5.jpg"
    }
    ]

    const coreFeatures = [{
        "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/icons/icon-img/24.png",
        "service": "Free Delivery",
        "info": "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore."
    },
    {
        "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/icons/icon-img/25.png",
        "service": "100% Cash Back",
        "info": "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore."
    },
    {
        "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/icons/icon-img/26.png",
        "service": "Quality Product",
        "info": "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore."
    },
    {
        "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/icons/icon-img/27.png",
        "service": "24/7 Support",
        "info": "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore."
    }]

    const clientsFeedbacks = [
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/1.jpg"
        },
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/2.jpg"
        },
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/5.jpg"
        },
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/6.jpg"
        },
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/7.jpg"
        }

    ]

    const settings = {
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    arrows: false,
                    speed: 600,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    arrows: false,
                    speed: 600,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    //  dots: true,
                    infinite: true,
                    arrows: false,
                    speed: 600,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
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
                <div className="ltn__feature-area pt-90 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area ltn__section-title-2--- text-center">
                                    <h1 className="section-title">Core Features</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row ltn__custom-gutter">
                            {coreFeatures.map(coreFeature => (<div className="col-lg-3 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 text-center">
                                    <div className="ltn__feature-icon">
                                        {/* <!-- <span><i className="flaticon-apartment"></i></span> --> */}
                                        <img src={coreFeature.imageUrl} alt="#" />
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h4><a href="service-details.html">{coreFeature.service}</a></h4>
                                        <p>{coreFeature.info}</p>
                                    </div>
                                </div>
                            </div>))
                            }

                        </div>
                    </div>
                </div>
                {/* <!-- FEATURE AREA END --> */}

                {/* <!-- PROGRESS BAR AREA START --> */}
                <div className="ltn__progress-bar-area section-bg-1 pt-120 pb-10 mb-120 d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__progress-bar-wrap">
                                    <div className="ltn__progress-bar-inner">
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="ltn__progress-bar-item-2 text-center">
                                                    <div className="progress" data-value='78'>
                                                        <span className="progress-left">
                                                            <span className="progress-bar border-primary"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar border-primary"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <div className="progress-count">78<sup className="small">%</sup></div>
                                                        </div>
                                                    </div>
                                                    <div className="ltn__progress-info">
                                                        <h3>Project Done</h3>
                                                        <p>Construction Simulator</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="ltn__progress-bar-item-2 text-center">
                                                    <div className="progress" data-value='62'>
                                                        <span className="progress-left">
                                                            <span className="progress-bar border-danger"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar border-danger"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <div className="progress-count">62<sup className="small">%</sup></div>
                                                        </div>
                                                    </div>
                                                    <div className="ltn__progress-info">
                                                        <h3>Country Cover</h3>
                                                        <p>Construction Simulator</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="ltn__progress-bar-item-2 text-center">
                                                    <div className="progress" data-value='50'>
                                                        <span className="progress-left">
                                                            <span className="progress-bar border-success"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar border-success"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <div className="progress-count">50<sup className="small">%</sup></div>
                                                        </div>
                                                    </div>
                                                    <div className="ltn__progress-info">
                                                        <h3>Completed Co.</h3>
                                                        <p>Construction Simulator</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="ltn__progress-bar-item-2 text-center">
                                                    <div className="progress" data-value='90'>
                                                        <span className="progress-left">
                                                            <span className="progress-bar border-warning"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar border-warning"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <div className="progress-count">90<sup className="small">%</sup></div>
                                                        </div>
                                                    </div>
                                                    <div className="ltn__progress-info">
                                                        <h3>Happy Clients</h3>
                                                        <p>Construction Simulator</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- PROGRESS BAR AREA END --> */}

                {/* <!-- COUNTER UP AREA START --> */}
                <div className="ltn__counterup-area section-bg-1 bg-image bg-overlay-theme-black-80--- pt-115 pb-70" data-bs-bg="img/bg/30.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 align-self-center">
                                <div className="ltn__counterup-item text-center">
                                    <div className="counter-icon">
                                        {/* <!-- <img src="img/icons/icon-img/2.png" alt="#">  --> */}
                                        <i className="flaticon-add-user-1"></i>
                                    </div>
                                    <h1><span className="counter">733</span><span className="counterUp-icon">+</span> </h1>
                                    <h6>Active Clients</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 align-self-center">
                                <div className="ltn__counterup-item text-center">
                                    <div className="counter-icon">
                                        {/* <!-- <img src="img/icons/icon-img/3.png" alt="#">  --> */}
                                        <i className="flaticon-dining-table-with-chairs"></i>
                                    </div>
                                    <h1><span className="counter">33</span><span className="counterUp-letter">K</span><span className="counterUp-icon">+</span> </h1>
                                    <h6>Cup Of Coffee</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 align-self-center">
                                <div className="ltn__counterup-item text-center">
                                    <div className="counter-icon">
                                        {/* <!-- <img src="img/icons/icon-img/3.png" alt="#">  --> */}
                                        <i className="flaticon-package"></i>
                                    </div>
                                    <h1><span className="counter">100</span><span className="counterUp-icon">+</span> </h1>
                                    <h6>Get Rewards</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 align-self-center">
                                <div className="ltn__counterup-item text-center">
                                    <div className="counter-icon">
                                        {/* <!-- <img src="img/icons/icon-img/3.png" alt="#">  --> */}
                                        <i className="flaticon-maps-and-location"></i>
                                    </div>
                                    <h1><span className="counter">21</span><span className="counterUp-icon">+</span> </h1>
                                    <h6>Country Cover</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- COUNTER UP AREA END --> */}

                {/* <!-- TEAM AREA START (Team - 3) --> */}
                <div className="ltn__team-area pt-115 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area ltn__section-title-2--- text-center">
                                    <h1 className="section-title">Our Expert Doctor</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">

                            {
                                ourExpeExpertDoctors.map(ourExpeExpertDoctor => (<div className="col-lg-4 col-sm-6">
                                    <div className="ltn__team-item ltn__team-item-3---">
                                        <div className="team-img">
                                            <img src={ourExpeExpertDoctor.imageUrl} alt="Image" />
                                        </div>
                                        <div className="team-info">
                                            <h4><a href="team-details.html">{ourExpeExpertDoctor.name}</a></h4>
                                            <h6 className="ltn__secondary-color">{ourExpeExpertDoctor.title}</h6>
                                            <div className="ltn__social-media">
                                                <ul>
                                                    <li><NavLink to={ourExpeExpertDoctor.faceBook}><i className="fab fa-facebook-f"></i></NavLink></li>
                                                    <li><NavLink to={ourExpeExpertDoctor.twiter}><i className="fab fa-twitter"></i></NavLink></li>
                                                    <li><NavLink to={ourExpeExpertDoctor.linkedIn}><i className="fab fa-linkedin"></i></NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>))
                            }

                        </div>
                    </div>
                </div>
                {/* <!-- TEAM AREA END --> */}

                {/* <!-- VIDEO AREA START --> */}
                <div className="ltn__video-popup-area ltn__video-popup-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-10-- bg-image" style={{
                                    backgroundImage: "url(" + "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/15.jpg" + ")",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <a className="ltn__video-icon-2 ltn__video-icon-2-border border-radius-no" href="https://www.youtube.com/embed/Cr4LFOgRGeo?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- VIDEO AREA END --> */}

                {/* <!-- TESTIMONIAL AREA START (testimonial-4) --> */}
                <ClientFeedBack clientsFeedbacks = {clientsFeedbacks} settings= {settings}></ClientFeedBack>
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