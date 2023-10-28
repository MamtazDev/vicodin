import Icon10 from '../../assets/icons/10.png';
import Icon11 from '../../assets/icons/11.png';
import Icon12 from '../../assets/icons/12.png';

const ContactAddress = () => {
    return (
        <div>
            <div className="ltn__contact-address-area mb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src={Icon10} alt="Icon Image" />
                                </div>
                                <h3>Email Address</h3>
                                <p>info@webmail.com <br />
                                    jobs@webexample.com</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src={Icon11} alt="Icon Image" />
                                </div>
                                <h3>Phone Number</h3>
                                <p>+0123-456789 <br /> +987-6543210</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src={Icon12} alt="Icon Image" />
                                </div>
                                <h3>Office Address</h3>
                                <p>18/A, New Born Town Hall <br />
                                    New York, US</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;