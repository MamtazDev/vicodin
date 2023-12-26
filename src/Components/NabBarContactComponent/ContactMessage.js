import React from "react";

const ContactMessage = () => {
  return (
    <div>
      <div className="ltn__contact-message-area mb-120 mb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h4 className="title-2">Get A Quote</h4>
                <form id="contact-form" action="mail.php" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-subject ltn__custom-icon">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Enter the subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Enter message"
                      required></textarea>
                  </div>
                  <p>
                    <label className="input-info-save mb-0">
                      <input type="checkbox" name="agree" /> Save my name,
                      email, and website in this browser for the next time I
                      comment.
                    </label>
                  </p>
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit">
                      get a free service
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
