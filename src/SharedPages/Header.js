import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Menubanner1 from "../assets/banner/menu-banner-1.png";
import { ProductContext } from "../Context/ProductContext";

const Header = () => {
  const { cart } = useContext(ProductContext);
  const cartLength = cart.length;
  return (
    <>
      <div className="body-wrapper">
        {/* HEADER AREA START (header-5) */}
        <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile--- ltn__header-logo-and-mobile-menu--- ltn__header-transparent gradient-color-4---">
          {/* <!-- ltn__header-top-area start --> */}
          <div className="ltn__header-top-area border-bottom top-area-color-white---">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <NavLink href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                          <i className="fas fa-envelope"></i> info@webmail.com
                        </NavLink>
                      </li>
                      <li>
                        <NavLink href="locations.html">
                          <i className="fa-solid fa-location-dot"></i> 15/A,
                          Nest Tower, NYC
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="top-bar-right text-end">
                    <div className="ltn__top-bar-menu">
                      <ul>
                        <li>
                          {/* <!-- ltn__social-media --> */}
                          <div className="ltn__social-media">
                            <ul>
                              <li>
                                <a href="#" title="Facebook">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Twitter">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </li>

                              <li>
                                <a href="#" title="Instagram">
                                  <i className="fab fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Dribbble">
                                  <i className="fab fa-dribbble"></i>
                                </a>
                              </li>
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
          {/* <!-- ltn__header-top-area end -->
        <!-- ltn__header-middle-area start --> */}
          <div className="ltn__header-middle-area ltn__logo-right-menu-option ltn__header-row-bg-white ltn__header-padding ltn__header-sticky ltn__sticky-bg-white">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo">
                      <NavLink tO="/">
                        <img src={Logo} alt="Logo" />
                      </NavLink>
                    </div>
                    <div className="get-support clearfix d-none">
                      <div className="get-support-icon">
                        <i className="icon-call"></i>
                      </div>
                      <div className="get-support-info">
                        <h6>Get Support</h6>
                        <h4>
                          <a href="tel:+123456789">123-456-789-10</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column menu-color-white---">
                  <div className="header-menu d-none d-xl-block">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li>
                            <NavLink to="/about">About</NavLink>
                          </li>
                          <li>
                            <NavLink to="/service">Service</NavLink>
                          </li>
                          <li>
                            <NavLink to="/shopgrid">Shop</NavLink>
                          </li>
                          <li>
                            <NavLink to="/contact">Contact</NavLink>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col--- ltn__header-options ltn__header-options-2 mb-sm-20">
                  {/* <!-- header-search-1 --> */}
                  <div className="header-search-wrap">
                    <div className="header-search-1">
                      <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass for-search-show"></i>
                        <i className="fa-solid fa-xmark  for-search-close"></i>
                      </div>
                    </div>
                    <div className="header-search-1-form">
                      <form id="#" method="get" action="#">
                        <input
                          type="text"
                          name="search"
                          value=""
                          placeholder="Search here..."
                        />
                        <button type="submit">
                          <span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* <!-- user-menu --> */}
                  <div className="ltn__drop-menu user-menu">
                    <ul>
                      <li>
                        <NavLink>
                          <i className="fa-solid fa-user"></i>
                        </NavLink>
                        <ul>
                          <li>
                            <NavLink to="/login">Sign in</NavLink>
                          </li>
                          <li>
                            <NavLink to="/register">Register</NavLink>
                          </li>
                          <li>
                            <NavLink to="/accountdetails">My Account</NavLink>
                          </li>
                          <li>
                            <NavLink to="/wishlist">Wishlist</NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- mini-cart --> */}
                  <div className="mini-cart-icon" type="button">
                    <NavLink to="/cart" className="ltn__utilize-toggle">
                      <i className="fa-solid fa-cart-shopping"></i>
                      <sup>{cartLength}</sup>
                    </NavLink>
                  </div>
                  {/* <!-- mini-cart -->


                                    <!-- Mobile Menu Button --> */}

                  <div className="mobile-menu-toggle d-xl-none ">
                    <NavLink
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasWithBothOptions"
                      aria-controls="offcanvasWithBothOptions"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        ></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        ></path>
                      </svg>
                    </NavLink>
                  </div>
                  {/* Mobile Menu Start */}
                  <div
                    className="offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    tabindex="-1"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                  >
                    <div className="offcanvas-body">
                      <div className="ltn__utilize-mobile-menu">
                        <div className="ltn__utilize-menu-inner ltn__scrollbar">
                          <div className="ltn__utilize-menu-head">
                            <div className="site-logo">
                              <NavLink to="/">
                                <img src={Logo} alt="Logo" />
                              </NavLink>
                            </div>
                            <button
                              className="ltn__utilize-close"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            >
                              ×
                            </button>
                          </div>
                          <div className="ltn__utilize-menu-search-form">
                            <form action="#">
                              <input type="text" placeholder="Search..." />
                              <button>
                                <i className="fas fa-search"></i>
                              </button>
                            </form>
                          </div>
                          <div className="ltn__utilize-menu">
                            <ul>
                              <li>
                                <NavLink to="/">Home</NavLink>
                              </li>
                              <li>
                                <NavLink to="/about">About</NavLink>
                              </li>
                              <li>
                                <NavLink to="/service">Service</NavLink>
                              </li>
                              <li>
                                <NavLink to="/shopgrid">Shop Grid</NavLink>{" "}
                              </li>
                              <li>
                                <NavLink to="/contact">Contact</NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                            <ul>
                              <li>
                                <NavLink to="/account" title="My Account">
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
                              <li>
                                <NavLink to="#" title="Facebook">
                                  <i className="fab fa-facebook-f"></i>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#" title="Twitter">
                                  <i className="fab fa-twitter"></i>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#" title="Linkedin">
                                  <i className="fab fa-linkedin"></i>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#" title="Instagram">
                                  <i className="fab fa-instagram"></i>
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Menu Start */}

                  {/* <!-- Mobile Menu Button --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ltn__header-middle-area end --> */}
        </header>
        {/* <!-- HEADER AREA END --> */}

        <div div className="ltn__utilize-overlay"></div>
      </div>
    </>
  );
};

export default Header;
