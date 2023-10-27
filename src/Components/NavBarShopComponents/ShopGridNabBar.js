import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AboutNavBarFooter from '../../SharedPages/AboutNavBarFooter';
import AboutNaveBarHeader from '../../SharedPages/AboutNaveBarHeader';

const ShopGridNabBar = () => {
    const [products, setProducts] = useState([]);

   
    useEffect(() =>{
        fetch("ProductData.json")
        .then((res) => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="body-wrapper">
           <AboutNaveBarHeader></AboutNaveBarHeader>

           <div className="ltn__utilize-overlay"></div>

 {/* <!-- BREADCRUMB AREA START --> */} 
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
                    <h1 className="page-title">Shop Grid</h1>
                    <div className="ltn__breadcrumb-list">
                        <ul>
                            <li><a href="index.html"><span className="ltn__secondary-color"><i className="fas fa-home"></i></span> Home</a></li>
                            <li>Shop Grid</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- BREADCRUMB AREA END --> */} 

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
    products.map(product =>( <div className="col-xl-3 col-lg-4 col-sm-6 col-6">
    <div className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <NavLink  to={`/ProductDetails/${product?.productID}`}><img src={product.imageUrl} alt="#"/></NavLink >
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
            <h2 className="product-title"><NavLink to={`/ProductDetails/${product?.productID}`}>{product.productName}</NavLink></h2>
            <div className="product-price">
                <span>${product.productPrice}</span>
                <del>${product.productPreviousPrice}</del>
            </div>
        </div>
    </div>
</div>))
}
                               
                        
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="liton_product_list">
                        <div className="ltn__product-tab-content-inner ltn__product-list-view">
                            <div className="row">
                                {/* <!-- ltn__product-item --> */}
                                <div className="col-lg-12">
                                    <div className="ltn__product-item ltn__product-item-3">
                                        <div className="product-img">
                                            <a href="product-details.html"><img src="img/product/1.png" alt="#"/></a>
                                            <div className="product-badge">
                                                <ul>
                                                    <li className="sale-badge">New</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-title"><a href="product-details.html">Thermometer Gun</a></h2>
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
                                                <span>$165.00</span>
                                                <del>$1720.00</del>
                                            </div>
                                            <div className="product-brief">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                {/* <!-- ltn__product-item --> */}
                                <div className="col-lg-12">
                                    <div className="ltn__product-item ltn__product-item-3">
                                        <div className="product-img">
                                            <a href="product-details.html"><img src="img/product/2.png" alt="#"/></a>
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-title"><a href="product-details.html">Cosmetic Containers</a></h2>
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
                                                <span>$165.00</span>
                                                <del>$1720.00</del>
                                            </div>
                                            <div className="product-brief">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                {/* <!-- ltn__product-item --> */}
                                <div className="col-lg-12">
                                    <div className="ltn__product-item ltn__product-item-3">
                                        <div className="product-img">
                                            <a href="product-details.html"><img src="img/product/3.png" alt="#"/></a>
                                            <div className="product-badge">
                                                <ul>
                                                    <li className="sale-badge">New</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-title"><a href="product-details.html">Thermometer Gun</a></h2>
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
                                                <span>$165.00</span>
                                                <del>$1720.00</del>
                                            </div>
                                            <div className="product-brief">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                {/* <!-- ltn__product-item --> */}
                                <div className="col-lg-12">
                                    <div className="ltn__product-item ltn__product-item-3">
                                        <div className="product-img">
                                            <a href="product-details.html"><img src="img/product/4.png" alt="#"/></a>
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-title"><a href="product-details.html">Digital Stethoscope</a></h2>
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
                                                <span>$165.00</span>
                                                <del>$1720.00</del>
                                            </div>
                                            <div className="product-brief">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                {/* <!-- ltn__product-item --> */}
                                <div className="col-lg-12">
                                    <div className="ltn__product-item ltn__product-item-3">
                                        <div className="product-img">
                                            <a href="product-details.html"><img src="img/product/5.png" alt="#"/></a>
                                            <div className="product-badge">
                                                <ul>
                                                    <li className="sale-badge">Hot</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-title"><a href="product-details.html">Thermometer Gun</a></h2>
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
                                                <span>$165.00</span>
                                                <del>$1720.00</del>
                                            </div>
                                            <div className="product-brief">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                {/* <!-- ltn__product-item --> */}
                                <div className="col-lg-12">
                                    <div className="ltn__product-item ltn__product-item-3">
                                        <div className="product-img">
                                            <a href="product-details.html"><img src="img/product/6.png" alt="#"/></a>
                                            <div className="product-badge">
                                                <ul>
                                                    <li className="sale-badge">New</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-title"><a href="product-details.html">Thermometer Gun</a></h2>
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
                                                <span>$165.00</span>
                                                <del>$1720.00</del>
                                            </div>
                                            <div className="product-brief">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                {/* <!--  --> */}
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
        </div>
    );
};

export default ShopGridNabBar;