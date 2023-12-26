import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import ProductView from "../Modal/ProductView";

const Product = () => {
  const { products, addToCart, openModal, addToWishList } =
    useContext(ProductContext);

  return (
    <>
      {/* <!-- PRODUCT AREA START (product-item-3) --> */}
      <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Featured Products</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12 col-sm-6">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <NavLink to="/shopgrid">
                        <img
                          className="w-100"
                          height={440}
                          src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/11.jpg"
                          alt="Banner Image"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <NavLink to="/shopgrid">
                        <img
                          className="w-100"
                          height={440}
                          src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/12.jpg"
                          alt="Banner Image"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                {/* <!-- ltn__product-item --> */}

                {products.map((product) => (
                  <div className="col-lg-3--- col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-2 text-left">
                      <div className="product-img">
                        <NavLink to={`/ProductDetails/${product?.productID}`}>
                          <img
                            className="w-100"
                            height={350}
                            src={product.imageUrl}
                            alt="#"
                          />
                        </NavLink>
                        <div className="product-badge">
                          <ul>{/* <li className="sale-badge">New</li> */}</ul>
                        </div>
                        <div className="product-hover-action">
                          <ul>
                            <li>
                              <p
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => openModal(product)}>
                                <i className="far fa-eye"></i>
                              </p>
                            </li>
                            <li>
                              <p
                                title="Add to Cart"
                                onClick={() => addToCart(product)}>
                                <i className="fas fa-shopping-cart"></i>
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => addToWishList(product)}
                                title="Wishlist">
                                <i className="far fa-heart"></i>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h2 className="product-title">
                          <NavLink to={`/ProductDetails/${product.productID}`}>
                            {product.productName}
                          </NavLink>
                        </h2>
                        <div className="product-price">
                          <span>${product.productPrice}</span>
                          <del>${product.productPreviousPrice}</del>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ProductView />
      </div>
      {/* <!-- PRODUCT AREA END --> */}
    </>
  );
};

export default Product;
