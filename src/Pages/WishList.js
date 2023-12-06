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
            <div class="body-wrapper">
                <AboutNaveBarHeader></AboutNaveBarHeader>

                <BreadCrumb title="Wishlist" bannerImg={Banner}></BreadCrumb>

                {/* <!-- WISHLIST AREA START --> */}
                <div class="liton__wishlist-area mb-105">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="shoping-cart-inner">
                                    <div class="shoping-cart-table table-responsive">
                                        <table class="table">
                                            {/* <!-- <thead>
                                                <th class="cart-product-remove">X</th>
                                                <th class="cart-product-image">Image</th>
                                                <th class="cart-product-info">Title</th>
                                                <th class="cart-product-price">Price</th>
                                                <th class="cart-product-quantity">Quantity</th>
                                                <th class="cart-product-subtotal">Subtotal</th>
                                            </thead> --> */}
                                            <tbody>
                                                {
                                                    products.map((product, index) => (
                                                        <tr key={index}>
                                                            <td class="cart-product-remove">x</td>
                                                            <td class="cart-product-image">
                                                                <NavLink to={`/ProductDetails/${product?.productID}`}><img src={product.imageUrl} alt="#" /></NavLink>
                                                            </td>
                                                            <td class="cart-product-info">
                                                                <h4>
                                                                    <NavLink to={`/ProductDetails/${product?.productID}`}>
                                                                    </NavLink>
                                                                    {product.productName}
                                                                </h4>
                                                            </td>
                                                            <td class="cart-product-price">${product.productPrice}</td>
                                                            <td class="cart-product-stock">In Stock</td>
                                                            <td class="cart-product-add-cart">
                                                                <a class="submit-button-1" href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">Add to Cart</a>
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