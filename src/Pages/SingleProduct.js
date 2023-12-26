import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AboutNaveBarHeader from "../SharedPages/AboutNaveBarHeader";
import AboutNavBarFooter from "../SharedPages/AboutNavBarFooter";
import CallTo from "../Utils/CallTo";
import ProductSlider from "../Components/ProductsInfo/ProductSlider";
import ProductDetails from "../Components/ProductsInfo/ProductDetails";
import BreadCrumb from "../Utils/BreadCrumb";
import Banner from "../assets/bg/144.jpg";

const SingleProduct = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { id } = useParams();

  const [leatestProducts, setLeatestProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch("/ProductData.json")
      .then((res) => res.json())
      .then((data) => setLeatestProducts(data));
  }, []);

  useEffect(() => {
    leatestProducts?.map((leatestProduct) =>
      leatestProduct?.productID == id ? setSingleProduct(leatestProduct) : <></>
    );
  });

  return (
    <>
      <AboutNaveBarHeader></AboutNaveBarHeader>

      {/*  <!-- BREADCRUMB AREA START --> */}
      <BreadCrumb
        title={singleProduct.productName}
        bannerImg={Banner}></BreadCrumb>
      {/*  <!-- BREADCRUMB AREA END --> */}

      {/* <!-- SHOP DETAILS AREA START --> */}
      <ProductDetails
        singleProduct={singleProduct}
        leatestProducts={leatestProducts}></ProductDetails>
      {/* <!-- SHOP DETAILS AREA END --> */}

      {/* <!-- PRODUCT SLIDER AREA START --> */}
      <ProductSlider leatestProducts={leatestProducts}></ProductSlider>
      {/* <!-- PRODUCT SLIDER AREA END --> */}

      {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <CallTo></CallTo>
      {/* <!-- CALL TO ACTION END --> */}

      <AboutNavBarFooter></AboutNavBarFooter>
    </>
  );
};

export default SingleProduct;
