import React from 'react';

const BillingDetail = () => {
    return (
        <div>
            <div className="ltn__checkout-single-content mt-50">
                <h4 className="title-2">Billing Details</h4>
                <div className="ltn__checkout-single-content-info">
                    <form action="#" >
                        <h6>Personal Information</h6>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-item input-item-name ltn__custom-icon">
                                    <input type="text" name="ltn__name" placeholder="First name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-name ltn__custom-icon">
                                    <input type="text" name="ltn__lastname" placeholder="Last name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-email ltn__custom-icon">
                                    <input type="email" name="ltn__email" placeholder="email address" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-phone ltn__custom-icon">
                                    <input type="text" name="ltn__phone" placeholder="phone number" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-website ltn__custom-icon">
                                    <input type="text" name="ltn__company" placeholder="Company name (optional)" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-item input-item-website ltn__custom-icon">
                                    <input type="text" name="ltn__phone" placeholder="Company address (optional)" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <h6>Country</h6>
                                <div className="input-item">
                                    <select className="nice-select">
                                        <option>Select Country</option>
                                        <option>Australia</option>
                                        <option>Canada</option>
                                        <option>China</option>
                                        <option>Morocco</option>
                                        <option>Saudi Arabia</option>
                                        <option>United Kingdom (UK)</option>
                                        <option>United States (US)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <h6>Address</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item">
                                            <input type="text" placeholder="House number and street name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item">
                                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h6>Town / City</h6>
                                <div className="input-item">
                                    <input type="text" placeholder="City" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h6>State </h6>
                                <div className="input-item">
                                    <input type="text" placeholder="State" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h6>Zip</h6>
                                <div className="input-item">
                                    <input type="text" placeholder="Zip" />
                                </div>
                            </div>
                        </div>
                        <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Create an account?</label></p>
                        <h6>Order Notes (optional)</h6>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                            <textarea name="ltn__message" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BillingDetail;