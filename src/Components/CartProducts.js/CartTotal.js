import { NavLink } from 'react-router-dom';

const CartTotal = () => {
    return (
        <div>
            <div className="shoping-cart-total mt-50">
                <h4>Cart Totals</h4>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$618.00</td>
                        </tr>
                        <tr>
                            <td>Shipping and Handing</td>
                            <td>$15.00</td>
                        </tr>
                        <tr>
                            <td>Vat</td>
                            <td>$00.00</td>
                        </tr>
                        <tr>
                            <td><strong>Order Total</strong></td>
                            <td><strong>$633.00</strong></td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-wrapper text-right">
                    <NavLink to="/checkout" className="theme-btn-1 btn btn-effect-1">Proceed to checkout</NavLink>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;