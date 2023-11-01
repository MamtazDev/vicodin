import { Link, NavLink, useParams } from 'react-router-dom';
import sideBanner from '../../assets/banner/serviceSide.png';
import { serviceDatas } from '../../Utils/serviceData';

const ServiceSideBar = () => {
    return (
        <div>
            <aside class="sidebar-area ltn__right-sidebar">
                <div class="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                    <ul>
                        { serviceDatas.map((serviceData, index)=>(
                        <li key={index}>
                            <Link to={`/service-details/${serviceData.slug}`}>
                            {serviceData.title} <span><i class="fas fa-arrow-right"></i></span></Link>
                        </li>
                        ))
                        }
                    </ul>
                </div>

                <div class="widget ltn__search-widget ltn__newsletter-widget">
                    <h6 class="ltn__widget-sub-title">// subscribe</h6>
                    <h4 class="ltn__widget-title">Get Newsletter</h4>
                    <form action="#">
                        <input type="text" name="search" placeholder="Search" />
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </form>
                    <div class="ltn__newsletter-bg-icon">
                        <i class="fas fa-envelope-open-text"></i>
                    </div>
                </div>

                <div class="widget ltn__banner-widget">
                    <NavLink to="/shopgrid"><img src={sideBanner} alt="Banner Image" /></NavLink>
                </div>
            </aside>
        </div>
    );
};

export default ServiceSideBar;