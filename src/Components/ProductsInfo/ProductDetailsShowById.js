import React, { useEffect, useState } from 'react';
import AboutNavBarFooter from '../../SharedPages/AboutNavBarFooter';
import AboutNaveBarHeader from '../../SharedPages/AboutNaveBarHeader';
import { NavLink, useParams } from "react-router-dom";
import Slider from "react-slick";

const ProductDetailsShowById = () => {

    const {id} = useParams()

    const [leatestProducts, setLeatestProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);
    console.log(singleProduct)
       
        useEffect(() =>{
            fetch("/ProductData.json")
            .then((res) => res.json())
            .then(data => setLeatestProducts(data))
        },[])

        useEffect(() =>{
            
            leatestProducts?.map(leatestProduct => (
                 leatestProduct?.productID == id ? setSingleProduct(leatestProduct) : <></>
                
            ))
        })

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
              }
            },
            {
              breakpoint: 600,
              settings: {
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 3,
                 slidesToScroll: 3,
              }
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
              }
            }
          ]
      };
    return (
        <>
       <AboutNaveBarHeader></AboutNaveBarHeader>
        {/*  <!-- BREADCRUMB AREA START --> */}
    <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "  style={{  
  backgroundImage: "url(" + "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/14.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner">
                        <h1 className="page-title">Account</h1>
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
    <div className="ltn__shop-details-area pb-85">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 ">
                    <div className="ltn__shop-details-inner mb-60">
                        <div className="row">
                            <div className="col-md-6 image-box "  onmousemove="zoom(event)" >
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
                                            <img src={singleProduct.imageUrl} alt="Image"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>


                            
                            <div className="col-md-6">
                                <div className="modal-product-info shop-details-info pl-0">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                            <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                        </ul>
                                    </div>
                                    <h3>{singleProduct.productName}</h3>
                                    <div className="product-price">
                                        <span>{singleProduct.productPrice}</span>
                                        <del>{singleProduct.productPreviousPrice}</del>
                                    </div>
                                    <div className="modal-product-meta ltn__product-details-menu-1">
                                        <ul>
                                            <li>
                                                <strong>Categories:</strong> 
                                                <span>
                                                    <a href="#">face-mask</a>
                                                    <a href="#">ppe-kit</a>
                                                    <a href="#">safety-suits</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ltn__product-details-menu-2">
                                        <ul>
                                            <li>
                                                <div className="cart-plus-minus">
                                                    <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"/>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span>ADD TO CART</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ltn__product-details-menu-3">
                                        <ul>
                                            <li>
                                                <a href="#" className="" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                    <i className="far fa-heart"></i>
                                                    <span>Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="" title="Compare" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                    <i className="fas fa-exchange-alt"></i>
                                                    <span>Compare</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr/>
                                    <div className="ltn__social-media">
                                        <ul>
                                            <li>Share:</li>
                                            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                            
                                        </ul>
                                    </div>
                                    <hr/>
                                    <div className="ltn__safe-checkout">
                                        <h5>Guaranteed Safe Checkout</h5>
                                        <img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/icons/payment-2.png" alt="Payment Image"/>
                                    </div>
                                </div>
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
                            <div className="tab-pane fade active show" id="liton_tab_details_1_1">
                                <div className="ltn__shop-details-tab-content-inner">
                                    <h4 className="title-2">Lorem ipsum dolor sit amet elit.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="liton_tab_details_1_2">
                                <div className="ltn__shop-details-tab-content-inner">
                                    <h4 className="title-2">Customer Reviews</h4>
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                            <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                        </ul>
                                    </div>
                                    <hr/>
                                    {/* <!-- comment-area --> */}
                                    <div className="ltn__comment-area mb-30">
                                        <div className="ltn__comment-inner">
                                            <ul>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/1.png" alt="Image"/>
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span className="ltn__comment-reply-btn">September 3, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/3.png" alt="Image"/>
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span className="ltn__comment-reply-btn">September 2, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product/4.png" alt="Image"/>
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span className="ltn__comment-reply-btn">September 2, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- comment-reply --> */}
                                    <div className="ltn__comment-reply-area ltn__form-box mb-30">
                                        <form action="#">
                                            <h4 className="title-2">Add a Review</h4>
                                            <div className="mb-30">
                                                <div className="add-a-review">
                                                    <h6>Your Ratings:</h6>
                                                    <div className="product-ratting">
                                                        <ul>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-item input-item-textarea ltn__custom-icon">
                                                <textarea placeholder="Type your comments...."></textarea>
                                            </div>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" placeholder="Type your name...."/>
                                            </div>
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" placeholder="Type your email...."/>
                                            </div>
                                            <div className="input-item input-item-website ltn__custom-icon">
                                                <input type="text" name="website" placeholder="Type your website...."/>
                                            </div>
                                            <label className="mb-0"><input type="checkbox" name="agree"/> Save my name, email, and website in this browser for the next time I comment.</label>
                                            <div className="btn-wrapper">
                                                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Shop Tab End --> */}
                </div>
                <div className="col-lg-4">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                        {/* <!-- Top Rated Product Widget --> */}
                        <div className="widget ltn__top-rated-product-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Top Rated Product</h4>
                            <ul>
                                
                                {leatestProducts.slice(0, 3).map( leatestProductSingle =>(<li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <NavLink to={`/ProductDetails/${leatestProductSingle?.productID}`}><img src={leatestProductSingle.imageUrl} alt="#"/></NavLink>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <h6><a href={`/ProductDetails/${leatestProductSingle?.productID}`}>{leatestProductSingle.productName}</a></h6>
                                            <div className="product-price">
                                                <span>{leatestProductSingle.productPrice}</span>
                                                <del>{leatestProductSingle.productPreviousPrice}</del>
                                            </div>
                                        </div>
                                    </div>
                                </li> )

                                )}


                                
                                
                            </ul>
                        </div>
                        {/* <!-- Banner Widget --> */}
                        <div className="widget ltn__banner-widget">
                        <NavLink to="/shopgrid"><img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/2.jpg" alt="Banner Image"/></NavLink>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- SHOP DETAILS AREA END --> */}


    {/* <!-- PRODUCT SLIDER AREA START --> */}


    <div className="ltn__product-slider-area ltn__product-gutter pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2">
                        <h4 className="title-2">Related Products<span>.</span></h4>
                    </div>
                </div>
            </div>
            <div className="row ltn__related-product-slider-one-active slick-arrow-1">
                {/* <!-- ltn__product-item --> */}

                <Slider {...settings}>
            
                {/* <!-- ltn__product-item --> */}
               {leatestProducts.map( leatestProductSingle =>(<div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <NavLink to={`/ProductDetails/${leatestProductSingle?.productID}`}><img src={leatestProductSingle.imageUrl} alt="#"/></NavLink>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
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
                            <h2 className="product-title"><NavLink to={`/ProductDetails/${leatestProductSingle?.productID}`}>{leatestProductSingle.productName}</NavLink></h2>
                            <div className="product-price">
                                <span>{leatestProductSingle.productPrice}</span>
                                <del>{leatestProductSingle.productPreviousPrice}</del>
                            </div>
                        </div>
                    </div>
                </div>
)) 
               }
               
                {/* <!--  --> */}
                </Slider>
            </div>
        </div>
    </div>
    {/* <!-- PRODUCT SLIDER AREA END --> */}

    {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
    <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" data-bs-bg="img/1.jpg--">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                        <div className="coll-to-info text-color-white">
                            <h1>Buy medical disposable face mask <br/> to protect your loved ones</h1>
                        </div>
                        <div className="btn-wrapper">
                            <a className="btn btn-effect-3 btn-white" href="shop.html">Explore Products <i className="icon-next"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    {/* <!-- CALL TO ACTION END --> */}


       <AboutNavBarFooter></AboutNavBarFooter>

      
        </>
    );
};

export default ProductDetailsShowById;