import React from 'react';
import AboutNavBarFooter from './AboutNavBarFooter';
import AboutNaveBarHeader from './AboutNaveBarHeader';
import { NavLink } from "react-router-dom";
const Login = () => {
    return (
        <>
        <div className="body-wrapper">
            <AboutNaveBarHeader></AboutNaveBarHeader>

            {/*  <!-- BREADCRUMB AREA START --> */}
    <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "  style={{  
  backgroundImage: "url(" + "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/14.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner">
                        <h1 className="page-title">Account</h1>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><NavLink to="/"><span className="ltn__secondary-color"><i className="fas fa-home"></i></span> Home</NavLink></li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  <!-- BREADCRUMB AREA END --> */}

    {/*  <!-- LOGIN AREA START --> */}
    <div className="ltn__login-area pb-65">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area text-center">
                        <h1 className="section-title">Sign In <br/>To  Your Account</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                             Sit aliquid,  Non distinctio vel iste.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="account-login-inner">
                        <form action="#" className="ltn__form-box contact-form-box">
                            <input type="text" name="email" placeholder="Email*"/>
                            <input type="password" name="password" placeholder="Password*"/>
                            <div className="btn-wrapper mt-0">
                                <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                            </div>
                            <div className="go-to-btn mt-20">
                                <a href="#"><small>FORGOTTEN YOUR PASSWORD?</small></a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="account-create text-center pt-50">
                        <h4>DON'T HAVE AN ACCOUNT?</h4>
                        <p>Add items to your wishlistget personalised recommendations <br/>
                            check out more quickly track your orders register</p>
                        <div className="btn-wrapper">
                            {/* <a href="register.html" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</a> */}
                            
                            
                            <NavLink to="/register" className="theme-btn-1 btn black-btn"> <button className="theme-btn-1 btn reverse-color btn-block">CREATE ACCOUNT </button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  <!-- LOGIN AREA END --> */}

    {/*  <!-- CALL TO ACTION START (call-to-action-6) --> */}
    <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" data-bs-bg="img/1.jpg--">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                        <div className="coll-to-info text-color-white">
                            <h1>Buy medical disposable face mask <br/> to protect your loved ones</h1>
                        </div>
                        <div className="btn-wrapper">
                            <a className="btn btn-effect-3 btn-white" href="shop.html">Explore Products <i className="icon-next"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  <!-- CALL TO ACTION END --> */}

            <AboutNavBarFooter></AboutNavBarFooter>
        </div>
        </>
    );
};

export default Login;