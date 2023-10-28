import { NavLink } from 'react-router-dom';
import AboutNavBarFooter from '../SharedPages/AboutNavBarFooter';
import AboutNaveBarHeader from '../SharedPages/AboutNaveBarHeader';
import BreadCrumb from '../Utils/BreadCrumb';
import CallTo from '../Utils/CallTo';
import Banner from '../assets/bg/144.jpg';
import CartProductList from '../Components/CartProductComponent/CartProductList';
import CartTotal from '../Components/CartProductComponent/CartTotal';

const Cart = () => {
    return (
        <div>
            <AboutNaveBarHeader></AboutNaveBarHeader>

            <BreadCrumb title="Cart" bannerImg={Banner}></BreadCrumb>

            {/* <!-- SHOPING CART AREA START --> */}
            <div className="liton__shoping-cart-area mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping-cart-inner">

                                <CartProductList></CartProductList>

                                <CartTotal></CartTotal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- SHOPING CART AREA END --> */}

            <CallTo></CallTo>

            <AboutNavBarFooter></AboutNavBarFooter>
        </div>
    );
};

export default Cart;