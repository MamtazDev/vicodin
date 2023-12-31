import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Slider from "react-slick";
import { ProductContext } from "../../Context/ProductContext";
import ProductView from "../Modal/ProductView";

const ProductSlider = ({ leatestProducts }) => {
  const { products, addToCart, openModal, addToWishList } =
    useContext(ProductContext);

  const settings = {
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          arrows: false,
          speed: 600,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          arrows: false,
          speed: 600,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          arrows: false,
          speed: 600,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      {/* <!-- PRODUCT SLIDER AREA START --> */}
      <div className="ltn__product-slider-area ltn__product-gutter pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2">
                <h4 className="title-2">
                  Related Products<span>.</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row ltn__related-product-slider-one-active slick-arrow-1">
            {/* <!-- ltn__product-item --> */}

            <Slider {...settings}>
              {/* <!-- ltn__product-item --> */}
              {leatestProducts.map((leatestProductSingle) => (
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-3 text-center">
                    <div className="product-img">
                      <NavLink
                        to={`/ProductDetails/${leatestProductSingle?.productID}`}
                      >
                        <img
                          height={300}
                          className="w-100"
                          src={`http://localhost:3000/${leatestProductSingle?.imageUrl}`}
                          alt="#"
                        />
                      </NavLink>
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badge">New</li>
                        </ul>
                      </div>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <p
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => openModal(leatestProductSingle)}
                              title="Quick View"
                            >
                              <i className="far fa-eye"></i>
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => addToCart(leatestProductSingle)}
                              title="Add to Cart"
                            >
                              <i className="fas fa-shopping-cart"></i>
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                addToWishList(leatestProductSingle)
                              }
                              title="Wishlist"
                            >
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
                        <NavLink
                          to={`/ProductDetails/${leatestProductSingle?.productID}`}
                        >
                          {leatestProductSingle.productName}
                        </NavLink>
                      </h2>
                      <div className="product-price">
                        <span>{leatestProductSingle.productPrice}</span>
                        <del>{leatestProductSingle.productPreviousPrice}</del>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <ProductView />
      {/* <!-- PRODUCT SLIDER AREA END --> */}
    </div>
  );
};

export default ProductSlider;
