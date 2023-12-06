import SideBarProduct from "../../Utils/SideBarProduct";
import SingleProductContent from "./SingleProductContent";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";

const ProductDetails = ({ singleProduct, leatestProducts }) => {
    return (
        <div>
            {/* <!-- SHOP DETAILS AREA START --> */}
            <div className="ltn__shop-details-area pb-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 ">
                            <div className="ltn__shop-details-inner mb-60">
                                <div className="row">
                                    <div className="col-md-6 image-box " onmousemove="zoom(event)" >
                                        <div className="ltn__shop-details-img-gallery ">
                                           
                                            <div className="ltn__shop-details-small-img slick-arrow-2">
                                                <div className="single-small-img">
                                                    <img src={singleProduct.imageUrl} alt="Image" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <SingleProductContent singleProduct={singleProduct}></SingleProductContent>
                                    </div>
                                </div>
                            </div>



                            {/* <!-- Shop Tab Start --> */}
                            <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                                <div className="ltn__shop-details-tab-menu">
                                    <div className="nav">
                                        <a className="active show" data-bs-toggle="tab" href="#liton_tab_details_1_1">Description</a>
                                        <a data-bs-toggle="tab" href="#liton_tab_details_1_2" className="">Reviews</a>
                                    </div>
                                </div>
                                <div className="tab-content">

                                    {/* Product Description Start */}
                                    <ProductDescription></ProductDescription>
                                    {/* Product Description End */}

                                    {/* Customer Review Start */}
                                    <ProductReviews></ProductReviews>
                                    {/* Customer Review End */}
                                </div>
                            </div>
                            {/* <!-- Shop Tab End --> */}
                        </div>



                        {/* SideBar Start */}
                        <div className="col-lg-4">
                            <SideBarProduct leatestProducts={leatestProducts}></SideBarProduct>
                        </div>
                        {/* SideBar End */}
                    </div>
                </div>
            </div>
            {/* <!-- SHOP DETAILS AREA END --> */}
        </div>
    );
};

export default ProductDetails;