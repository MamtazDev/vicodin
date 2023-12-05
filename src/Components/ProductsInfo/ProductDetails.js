import SideBarProduct from "../../Utils/SideBarProduct";
import SingleProductContent from "./SingleProductContent";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
// import ProductImg from "../../../public/img/product/p1.png";

const ProductDetails = ({ singleProduct, leatestProducts }) => {
  console.log(singleProduct, "oooooooo");
  console.log("./img/product/p1.png".split("./").join(""));
  console.log(
    `../../../public/${singleProduct?.imageUrl?.split("./").join("")}`
  );
  return (
    <div>
      {/* <!-- SHOP DETAILS AREA START --> */}
      <div className="ltn__shop-details-area pb-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 ">
              <div className="ltn__shop-details-inner mb-60">
                <div className="row">
                  <div
                    className="col-md-6 image-box "
                    onmousemove="zoom(event)"
                  >
                    <div className="ltn__shop-details-img-gallery ">
                      {/* <div className="ltn__shop-details-large-img">
                                        <div className="single-large-img">
                                            <a href="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/1.png" data-rel="lightcase:myCollection">
                                                <img src="img/product/1.png" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/1.png" data-rel="lightcase:myCollection">
                                                <img src="img/product/2.png" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/3.png" data-rel="lightcase:myCollection">
                                                <img src="img/product/3.png" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/4.png" data-rel="lightcase:myCollection">
                                                <img src="img/product/4.png" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/5.png" data-rel="lightcase:myCollection">
                                                <img src="img/product/5.png" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/6.png" data-rel="lightcase:myCollection">
                                                <img src="img/product/6.png" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/7.png" data-rel="lightcase:myCollection">
                                                <img src="img/product/7.png" alt="Image"/>
                                            </a>
                                        </div>
                                    </div> */}
                      <div className="ltn__shop-details-small-img slick-arrow-2">
                        <div className="single-small-img">
                          {/* <img src={singleProduct?.imageUrl} alt="Image" /> */}
                          <img src={`http://localhost:3000/${singleProduct?.imageUrl}`} alt={singleProduct?.imageUrl} />
                          {/* <img src={`../../../public/${(singleProduct?.imageUrl)?.split("./")?.join("")}`} alt="" /> */}
                          {/* <img src={ProductImg} alt="" /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <SingleProductContent
                      singleProduct={singleProduct}
                    ></SingleProductContent>
                  </div>
                </div>
              </div>

              {/* <!-- Shop Tab Start --> */}
              <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                <div className="ltn__shop-details-tab-menu">
                  <div className="nav">
                    <a
                      className="active show"
                      data-bs-toggle="tab"
                      href="#liton_tab_details_1_1"
                    >
                      Description
                    </a>
                    <a
                      data-bs-toggle="tab"
                      href="#liton_tab_details_1_2"
                      className=""
                    >
                      Reviews
                    </a>
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
              <SideBarProduct
                leatestProducts={leatestProducts}
              ></SideBarProduct>
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
