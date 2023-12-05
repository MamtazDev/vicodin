import React from 'react';
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import Banner from '../assets/bg/144.jpg';
import BreadCrumb from '../Utils/BreadCrumb';
import CallTo from '../Utils/CallTo';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import ServiceSideBar from '../Components/ServiceDetails/ServiceSideBar';
import { serviceDatas } from '../Utils/serviceData';
import { useLocation } from 'react-router-dom';

const ServiceDetails = () => {
    const { pathname } = useLocation();
    const sortedData = serviceDatas.filter(item => pathname.includes(item?.slug))

    return (
        <div>
            <div className="body-wrapper">
                <AboutNaveBarHeader></AboutNaveBarHeader>
                <BreadCrumb title="Detail" bannerImg={Banner}></BreadCrumb>

                <div className="ltn__page-details-area ltn__service-details-area mb-105">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                {sortedData.map((detailsData, index) => (
                                    <div key={index} className="ltn__page-details-inner ltn__service-details-inner">
                                        <div className="ltn__blog-img">
                                            <img src={detailsData.BannerUrl} alt="Image" />
                                        </div>
                                        <p><span className="ltn__first-letter">{detailsData?.serviceDetailOne[0]}</span>
                                            {detailsData.serviceDetailOne.slice(1, detailsData?.serviceDetailOne.length)}
                                        </p>
                                        <p> {detailsData.serviceDetailTwo} </p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <img src={detailsData.innerUrl1} alt="image" />
                                                <label>Image caption here.</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={detailsData.innerUrl2} alt="image" />
                                            </div>
                                        </div>
                                        <p> {detailsData.serviceDetailOne}</p>
                                        <p>{detailsData.serviceDetailTwo}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-4">
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