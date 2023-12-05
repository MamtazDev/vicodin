import { Link, NavLink } from 'react-router-dom';
import sideBanner from '../../assets/banner/serviceSide.png';
import { serviceDatas } from '../../Utils/serviceData';

const ServiceSideBar = () => {
    return (
        <div>
            <aside className="sidebar-area ltn__right-sidebar">
                <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                    <ul>
                        {serviceDatas.map((serviceData, index) => (
                            <li key={index}>
                                <Link to={`/service-details/${serviceData.slug}`}>
                                    {serviceData.title} 
                                    <span><i className="fas fa-arrow-right"></i></span>
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>

                <div className="widget ltn__search-widget ltn__newsletter-widget">
                    <h6 className="ltn__widget-sub-title">// subscribe</h6>
                    <h4 className="ltn__widget-title">Get Newsletter</h4>
                    <form action="#">
                        <input type="text" name="search" placeholder="Search" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    <div className="ltn__newsletter-bg-icon">
                        <i className="fas fa-envelope-open-text"></i>
                    </div>
                </div>

                <div className="widget ltn__banner-widget">
                    <NavLink to="/shopgrid"><img src={sideBanner} alt="Banner Image" /></NavLink>
                </div>
            </aside>
        </div>
    );
};

export default ServiceSideBar;