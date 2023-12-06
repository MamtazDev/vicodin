import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CategoriesProducts = ({ params }) => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch("ProductData.json")
    //         .then((res) => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then(data => {
                console.log("Products params: ", params);
                const filteredData = data.filter((item) => item.category === params)
                console.log("Products filteredData: ", filteredData);
                setProducts(filteredData)
            }
            )
    }, [])

    return (
        <div>
            {/* <!-- PRODUCT DETAILS AREA START --> */}
            <div className="ltn__product-area ltn__product-gutter mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__shop-options">
                                <ul>
                                    <li>
                                        <div className="ltn__grid-list-tab-menu ">
                                            <div className="nav">
                                                <a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large"></i></a>
                                                <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="short-by text-center">
                                            <select className="nice-select">
                                                <option>Default sorting</option>
                                                <option>Sort by popularity</option>
                                                <option>Sort by new arrivals</option>
                                                <option>Sort by price: low to high</option>
                                                <option>Sort by price: high to low</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="showing-product-number text-right">
                                            <span>Showing 9 of 20 results</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="liton_product_grid">
                                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                        <div className="row">
                                            {/* <!-- ltn__product-item --> */}

                                            {
                                                products.map((product, index) => (
                                                    <SingleProduct product={product} index={index} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="liton_product_list">
                                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                                        <div className="row">
                                            {/* <!-- ltn__product-item --> */}
                                            {
                                                products.map((product, index) => (<div key={index} className="col-lg-12">
                                                    <div className="ltn__product-item ltn__product-item-3">
                                                        <div className="product-img">
                                                            <NavLink to={`/ProductDetails/${product?.productID}`}>
                                                                <img style={{ maxHeight: '350px', maxWidth: '300px' }} src={product.imageUrl} alt="#" /></NavLink >
                                                            <div className="product-badge">
                                                            </div>
                                                        </div>
                                                        <div className="product-info">
                                                            <h2 className="product-title">
                                                                <NavLink to={`/ProductDetails/${product?.productID}`}>{product.productName}</NavLink>
                                                            </h2>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <span>${product.productPrice}</span>
                                                                <del>${product.productPreviousPrice}</del>
                                                            </div>
                                                            <div className="product-brief">
                                                                <p>${product.detail}</p>
                                                            </div>
                                                            <div className="product-hover-action">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                                            <i className="fas fa-shopping-cart"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                                            <i className="far fa-heart"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                        <li><a href="#">1</a></li>
                                        <li className="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">...</a></li>
                                        <li><a href="#">10</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- PRODUCT DETAILS AREA END --> */}
        </div>
    );
};

export default CategoriesProducts;




function SingleProduct({ product, index }) {
    // console.log("product", product)
    const { id, title, image, descriptopm } = product

    return (
        <>
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                    <div className="product-img">
                        <NavLink to={`/ProductDetails/${id}`}><img src={image} alt="#" /></NavLink >
                        <div className="product-badge">
                            <ul>
                                {/* <li className="sale-badge">New</li> */}
                            </ul>
                        </div>
                        <div className="product-hover-action">
                            <ul>
                                <li>
                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                        <i className="far fa-eye"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                        <i className="fas fa-shopping-cart"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                        <i className="far fa-heart"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="product-ratting">
                            <ul>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                <li><a href="#"><i className="far fa-star"></i></a></li>
                            </ul>
                        </div>
                        <h2 className="product-title"><NavLink to={`/ProductDetails/${product?.id}`}>{title}</NavLink></h2>
                        <div className="product-price">
                            <span>${product.price}</span>
                            <del>${product.price}</del>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
