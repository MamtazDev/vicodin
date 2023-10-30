import { NavLink } from "react-router-dom";

const AboutFeature = () => {
    return (
        <div>
            <div className="ltn__feature-area section-bg-1 pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2 text-center">
                                <h6 className="section-subtitle ltn__secondary-color">//  features  //</h6>
                                <h1 className="section-title">Why Choose Us<span>.</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="ltn__feature-item ltn__feature-item-7">
                                <div className="ltn__feature-icon-title">
                                    <div className="ltn__feature-icon">
                                        {/* <!-- <span><img src="img/icons/icon-img/21.png" alt="#"></span> --> */}
                                        <span><i className="fas fa-hand-holding-medical"></i> </span>
                                    </div>
                                    <h3><NavLink to="/sevice">All Kind Brand</NavLink></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="ltn__feature-item ltn__feature-item-7">
                                <div className="ltn__feature-icon-title">
                                    <div className="ltn__feature-icon">
                                        {/* <!-- <span><img src="img/icons/icon-img/22.png" alt="#"></span> --> */}
                                        <span><i className="fas fa-microscope"></i> </span>
                                    </div>
                                    <h3><NavLink to="/sevice">Curated Products</NavLink></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="ltn__feature-item ltn__feature-item-7">
                                <div className="ltn__feature-icon-title">
                                    <div className="ltn__feature-icon">
                                        {/* <!-- <span><img src="img/icons/icon-img/23.png" alt="#"></span> --> */}
                                        <span><i className="fas fa-stethoscope"></i> </span>
                                    </div>
                                    <h3><NavLink to="/sevice">Pesticide Free Goods</NavLink></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFeature;