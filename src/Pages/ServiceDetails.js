import React from 'react';
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import Banner from '../assets/bg/144.jpg';
import BreadCrumb from '../Utils/BreadCrumb';
import CallTo from '../Utils/CallTo';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import ServiceSideBar from '../Components/ServiceDetails/ServiceSideBar';

const ServiceDetails = () => {
    return (
        <div>
            <div className="body-wrapper">
                <AboutNaveBarHeader></AboutNaveBarHeader>
                <BreadCrumb title="Details" bannerImg={Banner}></BreadCrumb>

                <div class="ltn__page-details-area ltn__service-details-area mb-105">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="ltn__page-details-inner ltn__service-details-inner">
                                    <div class="ltn__blog-img">
                                        <img src="img/service/21.jpg" alt="Image" />
                                    </div>
                                    <p>
                                        <span class="ltn__first-letter">L</span>
                                        orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
                                    </p>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <img src="img/service/31.jpg" alt="image" />
                                            <label>Image caption here.</label>
                                        </div>
                                        <div class="col-lg-6">
                                            <img src="img/service/32.jpg" alt="image" />
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.

                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                    </p>
                                    <div class="ltn__service-list-menu text-uppercase mt-50 d-none">
                                        <ul>
                                            <li><i class="fas fa-car"></i> Front Brakes Repair <span class="service-price">$225.95 <span>Plus Parts</span></span> </li>
                                            <li><i class="fas fa-life-ring"></i> Rear Brakes Repair <span class="service-price">$225.95 <span>Plus Parts</span></span> </li>
                                            <li><i class="fas fa-cog"></i> Axle <span class="service-price">$225.95 <span>Plus Parts</span></span> </li>
                                            <li><i class="fas fa-car"></i> Starters / Alternators <span class="service-price">$225.95 <span>Plus Parts</span></span> </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <ServiceSideBar />
                            </div>
                        </div>
                    </div>
                </div>

                <CallTo></CallTo>
                <AboutNavBarFooter></AboutNavBarFooter>
            </div>
        </div>
    );
};

export default ServiceDetails;