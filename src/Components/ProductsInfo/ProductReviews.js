import React from 'react';

const ProductReviews = () => {
    return (
        <div>
            <div className="tab-pane fade" id="liton_tab_details_1_2">
                                        <div className="ltn__shop-details-tab-content-inner">
                                            <h4 className="title-2">Customer Reviews</h4>
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                                </ul>
                                            </div>
                                            <hr />
                                            {/* <!-- comment-area --> */}
                                            <div className="ltn__comment-area mb-30">
                                                <div className="ltn__comment-inner">
                                                    <ul>
                                                        <li>
                                                            <div className="ltn__comment-item clearfix">
                                                                <div className="ltn__commenter-img">
                                                                    <img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/1.png" alt="Image" />
                                                                </div>
                                                                <div className="ltn__commenter-comment">
                                                                    <h6><a href="#">Adam Smit</a></h6>
                                                                    <div className="product-ratting">
                                                                        <ul>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                                    <span className="ltn__comment-reply-btn">September 3, 2020</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="ltn__comment-item clearfix">
                                                                <div className="ltn__commenter-img">
                                                                    <img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/3.png" alt="Image" />
                                                                </div>
                                                                <div className="ltn__commenter-comment">
                                                                    <h6><a href="#">Adam Smit</a></h6>
                                                                    <div className="product-ratting">
                                                                        <ul>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                                    <span className="ltn__comment-reply-btn">September 2, 2020</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="ltn__comment-item clearfix">
                                                                <div className="ltn__commenter-img">
                                                                    <img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/4.png" alt="Image" />
                                                                </div>
                                                                <div className="ltn__commenter-comment">
                                                                    <h6><a href="#">Adam Smit</a></h6>
                                                                    <div className="product-ratting">
                                                                        <ul>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                                    <span className="ltn__comment-reply-btn">September 2, 2020</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            
                                            {/* <!-- comment-reply --> */}

                                            <div className="ltn__comment-reply-area ltn__form-box mb-30">
                                                <form action="#">
                                                    <h4 className="title-2">Add a Review</h4>
                                                    <div className="mb-30">
                                                        <div className="add-a-review">
                                                            <h6>Your Ratings:</h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input-item input-item-textarea ltn__custom-icon">
                                                        <textarea placeholder="Type your comments...."></textarea>
                                                    </div>
                                                    <div className="input-item input-item-name ltn__custom-icon">
                                                        <input type="text" placeholder="Type your name...." />
                                                    </div>
                                                    <div className="input-item input-item-email ltn__custom-icon">
                                                        <input type="email" placeholder="Type your email...." />
                                                    </div>
                                                    <div className="input-item input-item-website ltn__custom-icon">
                                                        <input type="text" name="website" placeholder="Type your website...." />
                                                    </div>
                                                    <label className="mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label>
                                                    <div className="btn-wrapper">
                                                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
        </div>
    );
};

export default ProductReviews;