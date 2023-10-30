import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Logo3 from "../assets/logo-3.png";
const AboutNaveBarHeader = () => {
    return (
        <>

            {/* <!-- HEADER AREA START (header-3) --> */}
            <header className="ltn__header-area ltn__header-3">
                {/* <!-- ltn__header-top-area start --> */}
                <div className="ltn__header-top-area border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="ltn__top-bar-menu">
                                    <ul>
                                        <li>
                                            <NavLink to="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                                <i className="fas fa-envelope"></i> info@webmail.com</NavLink>
                                        </li>
                                        <li><NavLink to="/contact"><i className="fa-solid fa-location-dot"></i> 15/A, Nest Tower, NYC</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="top-bar-right text-right text-end">
                                    <div className="ltn__top-bar-menu">
                                        <ul>
                                            <li>
                                                {/* <!-- ltn__social-media --> */}
                                                <div className="ltn__social-media">
                                                    <ul>
                                                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>

                                                        <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__header-top-area end -->  */}


                {/* <!-- ltn__header-middle-area start --> */}
                <div className="ltn__header-middle-area">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="site-logo">
                                    <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
                                </div>
                            </div>
                            <div className="col header-contact-serarch-column d-none d-lg-block">
                                <div className="header-contact-search">
                                    {/* <!-- header-feature-item --> */}
                                    <div className="header-feature-item">
                                        <div className="header-feature-icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="header-feature-info">
                                            <h6>Phone</h6>
                                            <p><a href="tel:0123456789">+0123-456-789</a></p>
                                        </div>
                                    </div>
                                    {/* <!-- header-search-2 --> */}
                                    <div className="header-search-2">
                                        <form id="#123" method="get" action="#">
                                            <input type="text" name="search" value="" placeholder="Search here..." />
                                            <button type="submit">
                                                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* <!-- header-options --> */}
                                <div className="ltn__header-options">
                                    <ul>
                                        <li className="d-lg-none">
                                            {/* <!-- header-search-1 --> */}
                                            <div className="header-search-wrap">
                                                <div className="header-search-1">
                                                    <div className="search-icon">
                                                        <i className="fa-solid fa-magnifying-glass  for-search-show"></i>
                                                        <i className="fa-solid fa-xmark  for-search-close"></i>
                                                    </div>
                                                </div>
                                                <div className="header-search-1-form">
                                                    <form id="#" method="get" action="#">
                                                        <input type="text" name="search" value="" placeholder="Search here..." />
                                                        <button type="submit">
                                                            <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-none---">
                                            {/* <!-- user-menu --> */}
                                            <div className="ltn__drop-menu user-menu">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i className="fa-solid fa-user"></i></a>
                                                        <ul>
                                                            <li><NavLink to="/login">Sign in</NavLink></li>
                                                            <li><NavLink to="/register">Register</NavLink></li>
                                                            <li><NavLink to="/accountdetails">My Account</NavLink></li>
                                                            <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mini-cart-icon mini-cart-icon-2">
                                                <NavLink to="/cart" className="ltn__utilize-toggle" >
                                                    <span className="mini-cart-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                        <sup>2</sup>
                                                    </span>
                                                    <h6><span>Your Cart</span> <span className="ltn__secondary-color">$89.25</span></h6>
                                                </NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__header-middle-area end --> */}



                {/* <!-- header-bottom-area start --> */}
                <div className="header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white--- ltn__sticky-bg-secondary ltn__secondary-bg section-bg-1 menu-color-white d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col header-menu-column justify-content-center">
                                <div className="sticky-logo">
                                    <div className="site-logo">
                                        <NavLink to="/"><img src={Logo3} alt="Logo" /></NavLink>
                                    </div>
                                </div>
                                <div className="header-menu header-menu-2">
                                    <nav>
                                        <div className="ltn__main-menu">
                                            <ul>
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li><NavLink to="/about">About</NavLink></li>
                                                <li><NavLink to="/service">Service</NavLink></li>
                                                <li><NavLink to="/shopgrid">Shop</NavLink></li>
                                                <li><NavLink to="/contact">Contact</NavLink></li>

                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- header-bottom-area end --> */}
            </header>
            {/* <!-- HEADER AREA END --> */}




            {/* <!-- MOBILE MENU START --> */}
            <div className="mobile-header-menu-fullwidth mb-30 d-block d-lg-none">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- Mobile Menu Button --> */}
                            <div className="mobile-menu-toggle d-lg-none">
                                <span>MENU</span>
                                <NavLink href="" className="ltn__utilize-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWith" aria-controls="offcanvasWithBothOptions">
                                    <svg viewBox="0 0 800 600">
                                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                        <path d="M300,320 L540,320" id="middle"></path>
                                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- MOBILE MENU END --> */}



            {/* <!-- Utilize Mobile Menu Start --> */}
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWith" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-body">
                    <div className="ltn__utilize-mobile-menu">
                        <div className="ltn__utilize-menu-inner ltn__scrollbar">
                            <div className="ltn__utilize-menu-head">
                                <div className="site-logo">
                                    <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
                                </div>
                                <button className="ltn__utilize-close">×</button>
                            </div>
                            <div className="ltn__utilize-menu-search-form">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button><i className="fa-solid fa-magnifying-glass for-search-show"></i></button>
                                </form>
                            </div>
                            <div className="ltn__utilize-menu">
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/service">Service</NavLink></li>
                                    <li ><NavLink to="/shopgrid">Shop Grid</NavLink> </li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>
                            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                                <ul>
                                    <li><NavLink to="/account" title="My Account">
                                        <span className="utilize-btn-icon">
                                            <i className="far fa-user"></i>
                                        </span>
                                        My Account
                                    </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/wishlist" title="Wishlist">
                                            <span className="utilize-btn-icon">
                                                <i className="far fa-heart"></i>
                                                <sup>3</sup>
                                            </span>
                                            Wishlist
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/cart" title="Shoping Cart">
                                            <span className="utilize-btn-icon">
                                                <i className="fas fa-shopping-cart"></i>
                                                <sup>5</sup>
                                            </span>
                                            Shoping Cart
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="ltn__social-media-2">
                                <ul>
                                    <li><NavLink to="#" title="Facebook"><i className="fab fa-facebook-f"></i></NavLink></li>
                                    <li><NavLink to="#" title="Twitter"><i className="fab fa-twitter"></i></NavLink></li>
                                    <li><NavLink to="#" title="Linkedin"><i className="fab fa-linkedin"></i></NavLink></li>
                                    <li><NavLink to="#" title="Instagram"><i className="fab fa-instagram"></i></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Utilize Mobile Menu End --> */}

            <div className="ltn__utilize-overlay"></div>

        </>
    );
};

export default AboutNaveBarHeader;