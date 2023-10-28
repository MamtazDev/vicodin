import { NavLink } from 'react-router-dom';
import Product1 from '../../assets/product/1.png';
import Product2 from '../../assets/product/2.png';
import Product3 from '../../assets/product/3.png';

const CartProductList = () => {
    return (
        <div>
            <div className="shoping-cart-table table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="cart-product-remove">x</td>
                            <td className="cart-product-image">
                                <NavLink to="">
                                    <img src={Product1} alt="#" />
                                </NavLink>
                            </td>
                            <td className="cart-product-info">
                                <h4><NavLink to="">Digital Stethoscope</NavLink></h4>
                            </td>
                            <td className="cart-product-price">$149.00</td>
                            <td className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
                                </div>
                            </td>
                            <td className="cart-product-subtotal">$298.00</td>
                        </tr>
                        <tr>
                            <td className="cart-product-remove">x</td>
                            <td className="cart-product-image">
                                <NavLink to="">
                                    <img src={Product2} alt="#" />
                                </NavLink>
                            </td>
                            <td className="cart-product-info">
                                <h4><a href="product-details.html">Cosmetic Containers</a></h4>
                            </td>
                            <td className="cart-product-price">$85.00</td>
                            <td className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
                                </div>
                            </td>
                            <td className="cart-product-subtotal">$170.00</td>
                        </tr>
                        <tr>
                            <td className="cart-product-remove">x</td>
                            <td className="cart-product-image">
                                <NavLink href="product-details.html">
                                    <img src={Product3} alt="#" />
                                </NavLink>
                            </td>
                            <td className="cart-product-info">
                                <h4><a href="product-details.html">Antiseptic Spray</a></h4>
                            </td>
                            <td className="cart-product-price">$75.00</td>
                            <td className="cart-product-quantity">
                                <div className="cart-plus-minus">
                                    <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
                                </div>
                            </td>
                            <td className="cart-product-subtotal">$150.00</td>
                        </tr>
                        <tr className="cart-coupon-row">
                            <td colspan="6">
                                <div className="cart-coupon">
                                    <input type="text" name="cart-coupon" placeholder="Coupon code" />
                                    <button type="submit" className="btn theme-btn-2 btn-effect-2">Apply Coupon</button>
                                </div>
                            </td>
                            <td>
                                <button type="submit" className="btn theme-btn-2 btn-effect-2-- disabled">Update Cart</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartProductList;