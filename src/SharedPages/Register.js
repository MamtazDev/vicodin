import React from 'react';
import AboutNavBarFooter from './AboutNavBarFooter';
import AboutNaveBarHeader from './AboutNaveBarHeader';
import { NavLink } from "react-router-dom";
const Register = () => {
    return (
        <>
        <div className="body-wrapper">
          <AboutNaveBarHeader></AboutNaveBarHeader>

          {/* <!-- BREADCRUMB AREA START --> */}
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
                                <li>Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- BREADCRUMB AREA END --> */}


    {/* <!-- LOGIN AREA START (Register) --> */}
    <div className="ltn__login-area pb-110">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area text-center">
                        <h1 className="section-title">Register <br/>Your Account</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                             Sit aliquid,  Non distinctio vel iste.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="account-login-inner">
                        <form action="#" className="ltn__form-box contact-form-box">
                            <input type="text" name="firstname" placeholder="First Name"/>
                            <input type="text" name="lastname" placeholder="Last Name"/>
                            <input type="text" name="email" placeholder="Email*"/>
                            <input type="password" name="password" placeholder="Password*"/>
                            <input type="password" name="confirmpassword" placeholder="Confirm Password*"/>
                            <label className="checkbox-inline">
                                <input type="checkbox" value=""/>
                                I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value=""/>
                                By clicking "create account", I consent to the privacy policy.
                            </label>
                            <div className="btn-wrapper">
                                <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                            </div>
                        </form>
                        <div className="by-agree text-center">
                            <p>By creating an account, you agree to our:</p>
                            <p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
                            <div className="go-to-btn mt-50">
                                {/* <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a> */}
                                <NavLink to="/login">ALREADY HAVE AN ACCOUNT ?</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- LOGIN AREA END --> */}


    {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
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
    {/* <!-- CALL TO ACTION END --> */}

    <AboutNavBarFooter></AboutNavBarFooter>
    </div>

        

        </>
    );
};

export default Register;