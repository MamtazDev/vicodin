import { NavLink } from "react-router-dom";
import Banner from "../assets/bg/144.jpg"

const BreadCrumb = () => {
    return (
        <div>
              <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " style={{
                backgroundImage: `url(${Banner})`,
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
        </div>
    );
};

export default BreadCrumb;