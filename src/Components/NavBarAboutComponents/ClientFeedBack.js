import React from 'react';
import Slider from 'react-slick';

const ClientFeedBack = ({clientsFeedbacks, settings}) => {
    return (
        <div>
            <div>
                    <div className="ltn__testimonial-area section-bg-1 pt-290 pb-70">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title-area ltn__section-title-2 text-center">
                                        <h1 className="section-title">Clients Feedbacks<span>.</span></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
                                <Slider {...settings}>
                                    {
                                        clientsFeedbacks.map(clientsFeedback => (<div>
                                            <div className="col-lg-12">
                                                <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                                    <div className="ltn__testimoni-img">
                                                        <img src={clientsFeedback.imageUrl} alt="#" />
                                                    </div>
                                                    <div className="ltn__testimoni-info">
                                                        <p>{clientsFeedback.info}</p>
                                                        <h4>{clientsFeedback.name}</h4>
                                                        <h6>{clientsFeedback.title}</h6>
                                                    </div>
                                                    <div className="ltn__testimoni-bg-icon">
                                                        <i className="far fa-comments"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>))
                                    }

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ClientFeedBack;