import AboutNaveBarHeader from "../SharedPages/AboutNaveBarHeader";
import AboutNavBarFooter from "../SharedPages/AboutNavBarFooter";
import CallTo from "../Utils/CallTo";
import BreadCrumb from "../Utils/BreadCrumb";
import Banner from "../assets/bg/144.jpg";
import BillingDetail from "../Components/CheckOutComponent/BillingDetail";
import PaymentMethod from "../Components/CheckOutComponent/PaymentMethod";
import CheckOutTotal from "../Components/CheckOutComponent/CheckOutTotal";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  return (
    <div>
      <AboutNaveBarHeader></AboutNaveBarHeader>
      <BreadCrumb title="CheckOut" bannerImg={Banner}></BreadCrumb>

      {/* <!-- WISHLIST AREA START --> */}
      <div className="ltn__checkout-area mb-105">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__checkout-inner">
                <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                  <h5>
                    Returning customer?
                    <a
                      className="ltn__secondary-color"
                      href="#ltn__returning-customer-login"
                      data-bs-toggle="collapse">
                      Click here to login
                    </a>
                  </h5>
                  <div
                    id="ltn__returning-customer-login"
                    className="collapse ltn__checkout-single-content-info">
                    <div className="ltn_coupon-code-form ltn__form-box">
                      <p>Please login your accont.</p>
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__name"
                                placeholder="Enter your name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-email ltn__custom-icon">
                              <input
                                type="email"
                                name="ltn__email"
                                placeholder="Enter email address"
                              />
                            </div>
                          </div>
                        </div>
                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                          Login
                        </button>
                        <label className="input-info-save mb-0">
                          <input type="checkbox" name="agree" /> Remember me
                        </label>
                        <p className="mt-30">
                          <NavLink to="/register">Lost your password?</NavLink>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                  <h5>
                    Have a coupon?{" "}
                    <a
                      className="ltn__secondary-color"
                      href="#ltn__coupon-code"
                      data-bs-toggle="collapse">
                      Click here to enter your code
                    </a>
                  </h5>
                  <div
                    id="ltn__coupon-code"
                    className="collapse ltn__checkout-single-content-info">
                    <div className="ltn__coupon-code-form">
                      <p>If you have a coupon code, please apply it below.</p>
                      <form action="#">
                        <input
                          type="text"
                          name="coupon-code"
                          placeholder="Coupon code"
                        />
                        <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <BillingDetail></BillingDetail>
              </div>
            </div>
            <div className="col-lg-6">
              <PaymentMethod></PaymentMethod>
            </div>
            <div className="col-lg-6">
              <CheckOutTotal></CheckOutTotal>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- WISHLIST AREA START --> */}

      <CallTo></CallTo>
      <AboutNavBarFooter></AboutNavBarFooter>
    </div>
  );
};

export default CheckOut;
