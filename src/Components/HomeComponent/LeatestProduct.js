import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import ProductView from "../Modal/ProductView";

const LeatestProduct = () => {
  // const [leatestProducts, setLeatestProducts] = useState([]);
  // console.log(leatestProducts);

  // useEffect(() => {
  //   fetch("ProductData.json")
  //     .then((res) => res.json())
  //     .then((data) => setLeatestProducts(data));
  // }, []);

  const { products, addToCart, addToWishList, openModal } =
    useContext(ProductContext);

  return (
    <>
      {/* <!-- PRODUCT AREA START (product-item-3) --> */}
      <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Leatest Product</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            {/* <!-- ltn__product-item --> */}
            {products.map((leatestProduct, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-left">
                  <div className="product-img">
                    {/* <NavLink to="/ProductDetails"><img src={leatestProduct.imageUrl}alt="#"/></NavLink > */}

                    <a href={`/ProductDetails/${leatestProduct?.productID}`}>
                      <img
                        className="w-100"
                        height={300}
                        src={leatestProduct.imageUrl}
                        alt="#"
                      />
                    </a>
                    <div className="product-badge">
                      <ul>{/* <li className="sale-badge">New</li> */}</ul>
                    </div>
                    <div className="product-hover-action">
                      <ul>
                        <li>
                          <p
                            title="Quick View"
                            onClick={() => openModal(leatestProduct)}
                          >
                            <i className="far fa-eye"></i>
                          </p>
                        </li>
                        <li>
                          <p
                            onClick={() => addToCart(leatestProduct)}
                            title="Add to Cart"
                          >
                            <i className="fas fa-shopping-cart"></i>
                          </p>
                        </li>
                        <li>
                          <p
                            onClick={() => addToWishList(leatestProduct)}
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
                      <a href={`/ProductDetails/${leatestProduct?.productID}`}>
                        {leatestProduct.productName}
                      </a>
                    </h2>
                    <div className="product-price">
                      <span>${leatestProduct.productPrice}</span>
                      <del>${leatestProduct.productPreviousPrice}</del>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ProductView />
      </div>
      {/* <!-- PRODUCT AREA END --> */}
    </>
  );
};

export default LeatestProduct;
