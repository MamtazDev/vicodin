import React from 'react';
import { Link } from 'react-router-dom';

const CoreFeature = () => {
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
    return (
        <div>
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
                                    <h4><Link to="/service">{coreFeature.service}</Link></h4>
                                    <p>{coreFeature.info}</p>
                                </div>
                            </div>
                        </div>))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreFeature;