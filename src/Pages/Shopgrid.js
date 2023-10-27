import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import ShopGridProducts from '../Components/NavBarShopComponents/ShopGridProducts';
import ShopGridNabBar from "../Components/NavBarShopComponents/ShopGridNabBar";
import CallTo from '../Utils/CallTo';

const Shopgrid = () => {

    return (
        <div className="body-wrapper">
            <AboutNaveBarHeader></AboutNaveBarHeader>
            <ShopGridNabBar></ShopGridNabBar>

            {/* <!-- PRODUCT DETAILS AREA START --> */}
            <ShopGridProducts></ShopGridProducts>
            {/* <!-- PRODUCT DETAILS AREA END --> */}

            {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
           <CallTo></CallTo>
            {/* <!-- CALL TO ACTION END --> */}

            <AboutNavBarFooter></AboutNavBarFooter>
        </div>
    );
};

export default Shopgrid;