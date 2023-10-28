import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import CallTo from '../Utils/CallTo';
import ProductSlider from '../Components/ProductsInfo/ProductSlider';
import ProductDetails from '../Components/ProductsInfo/ProductDetails';

const SingleProduct = () => {

    const { id } = useParams()

    const [leatestProducts, setLeatestProducts] = useState([]);
    
    const [singleProduct, setSingleProduct] = useState([]);
    console.log(singleProduct)

    useEffect(() => {
        fetch("/ProductData.json")
            .then((res) => res.json())
            .then(data => setLeatestProducts(data))
    }, [])

    useEffect(() => {
        leatestProducts?.map(leatestProduct => (
            leatestProduct?.productID == id ? setSingleProduct(leatestProduct) : <></>

        ))
    })

    return (
        <>
            <AboutNaveBarHeader></AboutNaveBarHeader>

            {/*  <!-- BREADCRUMB AREA START --> */}
            <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " style={{
                backgroundImage: "url(" + "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/14.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner">
                                <h1 className="page-title">Product Details</h1>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><NavLink to="/"><span className="ltn__secondary-color"><i className="fas fa-home"></i></span> Home</NavLink></li>
                                        <li>Product Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  <!-- BREADCRUMB AREA END --> */}


            {/* <!-- SHOP DETAILS AREA START --> */}
            <ProductDetails singleProduct = {singleProduct} leatestProducts = {leatestProducts}></ProductDetails>
            {/* <!-- SHOP DETAILS AREA END --> */}


            {/* <!-- PRODUCT SLIDER AREA START --> */}
            <ProductSlider leatestProducts = {leatestProducts}></ProductSlider>
            {/* <!-- PRODUCT SLIDER AREA END --> */}

            

            {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
            <CallTo></CallTo>
            {/* <!-- CALL TO ACTION END --> */}


            <AboutNavBarFooter></AboutNavBarFooter>


        </>
    );
};

export default SingleProduct;