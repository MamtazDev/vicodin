import React from 'react';

const SingleProductContent = ({singleProduct}) => {
    return (
        <div>
            <div className="modal-product-info shop-details-info pl-0">
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
                <h3>{singleProduct.productName}</h3>
                <div className="product-price">
                    <span>{singleProduct.productPrice}</span>
                    <del>{singleProduct.productPreviousPrice}</del>
                </div>
                <div className="modal-product-meta ltn__product-details-menu-1">
                    <ul>
                        <li>
                            <strong>Categories:</strong>
                            <span>
                                <a href="#">face-mask</a>
                                <a href="#">ppe-kit</a>
                                <a href="#">safety-suits</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="ltn__product-details-menu-2">
                    <ul>
                        <li>
                            <div className="cart-plus-minus">
                                <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
                            </div>
                        </li>
                        <li>
                            <a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                <i className="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ltn__product-details-menu-3">
                    <ul>
                        <li>
                            <a href="#" className="" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                <i className="far fa-heart"></i>
                                <span>Add to Wishlist</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="" title="Compare" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                <i className="fas fa-exchange-alt"></i>
                                <span>Compare</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="ltn__social-media">
                    <ul>
                        <li>Share:</li>
                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>

                    </ul>
                </div>
                <hr />
                <div className="ltn__safe-checkout">
                    <h5>Guaranteed Safe Checkout</h5>
                    <img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/icons/payment-2.png" alt="Payment Image" />
                </div>
            </div>
        </div>
    );
};

export default SingleProductContent;