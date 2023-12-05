import React, { useEffect, useState } from 'react';
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import BreadCrumb from '../Utils/BreadCrumb';
import Banner from '../assets/bg/144.jpg';
import CallTo from '../Utils/CallTo';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import { NavLink } from 'react-router-dom';

const WishList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("ProductData.json")
            .then((res) => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="body-wrapper">
                <AboutNaveBarHeader></AboutNaveBarHeader>

                <BreadCrumb title="Wishlist" bannerImg={Banner}></BreadCrumb>

                {/* <!-- WISHLIST AREA START --> */}
                <div className="liton__wishlist-area mb-105">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping-cart-inner">
                                    <div className="shoping-cart-table table-responsive">
                                        <table className="table">
                                            {/* <!-- <thead>
                                                <th className="cart-product-remove">X</th>
                                                <th className="cart-product-image">Image</th>
                                                <th className="cart-product-info">Title</th>
                                                <th className="cart-product-price">Price</th>
                                                <th className="cart-product-quantity">Quantity</th>
                                                <th className="cart-product-subtotal">Subtotal</th>
                                            </thead> --> */}
                                            <tbody>
                                                {
                                                    products.map(product => (
                                                        <tr>
                                                            <td className="cart-product-remove">x</td>
                                                            <td className="cart-product-image">
                                                            <NavLink to={`/ProductDetails/${product?.productID}`}><img src={product.imageUrl}alt="#" /></NavLink>
                                                            </td>
                                                            <td className="cart-product-info">
                                                                <h4>
                                                                    <NavLink to={`/ProductDetails/${product?.productID}`}>
                                                                    </NavLink>
                                                                    {product.productName}
                                                                </h4>
                                                            </td>
                                                            <td className="cart-product-price">${product.productPrice}</td>
                                                            <td className="cart-product-stock">In Stock</td>
                                                            <td className="cart-product-add-cart">
                                                                <a className="submit-button-1" href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">Add to Cart</a>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- WISHLIST AREA START --> */}

                <CallTo></CallTo>
                <AboutNavBarFooter></AboutNavBarFooter>
            </div>
        </div>
    );
};

export default WishList;