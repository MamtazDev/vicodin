import { NavLink } from "react-router-dom";
import sidebarImg from "../assets/banner/sidebar.png";

const SideBarProduct = ({ leatestProducts }) => {
  return (
    <div>
      <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
        <div className="widget ltn__top-rated-product-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Top Rated Product
          </h4>
          <ul>
            {leatestProducts.slice(0, 3).map((leatestProductSingle) => (
              <li>
                <div className="top-rated-product-item clearfix">
                  <div className="top-rated-product-img">
                    <NavLink
                      to={`/ProductDetails/${leatestProductSingle?.productID}`}
                    >
                      {/* <img src={leatestProductSingle.imageUrl} alt="#" /> */}
                      <img
                        height={100}
                        width={100}
                        src={`http://localhost:3000/${leatestProductSingle?.imageUrl}`}
                        alt="#"
                      />
                    </NavLink>
                  </div>
                  <div className="top-rated-product-info">
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
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h6>
                      <a
                        href={`/ProductDetails/${leatestProductSingle?.productID}`}
                      >
                        {leatestProductSingle.productName}
                      </a>
                    </h6>
                    <div className="product-price">
                      <span>{leatestProductSingle.productPrice}</span>
                      <del>{leatestProductSingle.productPreviousPrice}</del>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <!-- Banner Widget --> */}
        <div className="widget ltn__banner-widget">
          <NavLink to="/shopgrid">
            <img src={sidebarImg} alt="Banner Image" />
          </NavLink>
        </div>
      </aside>
    </div>
  );
};

export default SideBarProduct;
