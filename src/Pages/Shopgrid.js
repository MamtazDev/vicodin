import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import ShopGridProducts from '../Components/NavBarShopComponents/ShopGridProducts';
import CallTo from '../Utils/CallTo';
import Banner from '../assets/bg/144.jpg';
import BreadCrumb from '../Utils/BreadCrumb';

const Shopgrid = () => {

    return (
        <div className="body-wrapper">
            <AboutNaveBarHeader></AboutNaveBarHeader>
            <BreadCrumb title="All Products" bannerImg={Banner}></BreadCrumb>
            <ShopGridProducts></ShopGridProducts>
            <CallTo></CallTo>
            <AboutNavBarFooter></AboutNavBarFooter>
        </div>
    );
};

export default Shopgrid;