import Payment from '../../assets/icons/payment-3.png';

const PaymentMethod = () => {
    const isScrollEnabled = true;
    return (
        <div>
            <div className="ltn__checkout-payment-method mt-50">
                <h4 className="title-2">Payment Method</h4>
                <div id="checkout_accordion_1">
                    {/* <!-- card --> */}
                    <div className="card">
                        <h5 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                            Check payments
                        </h5>
                        <div id="faq-item-2-1" className="collapse" data-bs-parent="#checkout_accordion_1">
                            <div className="card-body">
                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- card --> */}
                    <div className="card">
                        <h5 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded={isScrollEnabled.toString()}>
                            Cash on delivery
                        </h5>
                        <div id="faq-item-2-2" className="collapse show" data-bs-parent="#checkout_accordion_1">
                            <div className="card-body">
                                <p>Pay with cash upon delivery.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card --> */}
                    <div className="card">
                        <h5 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false" >
                            PayPal <img src={Payment} alt="#" />
                        </h5>
                        <div id="faq-item-2-3" className="collapse" data-bs-parent="#checkout_accordion_1">
                            <div className="card-body">
                                <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ltn__payment-note mt-30 mb-30">
                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                </div>
                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Place order</button>
            </div>
        </div>
    );
};

export default PaymentMethod;