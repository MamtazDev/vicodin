import { NavLink } from 'react-router-dom';
import Service11 from '../../assets/service/11.jpg';

const ServiceBanner = () => {
    return (
        <div>
            <div class="ltn__about-us-area pb-115">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 align-self-center">
                            <div class="about-us-img-wrap ltn__img-shape-left  about-img-left">
                                <img src={Service11} alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-7 align-self-center">
                            <div class="about-us-info-wrap">
                                <div class="section-title-area ltn__section-title-2--- mb-20">
                                    <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
                                    <h1 class="section-title">Your faithful partners <br /> Medical Goods</h1>
                                    <p>
                                        Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services
                                        </p>
                                </div>
                                <div class="about-us-info-wrap-inner about-us-info-devide---">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div class="btn-wrapper animated">
                                    <NavLink to="/about" class="theme-btn-1 btn btn-effect-1 text-uppercase">About Us</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;