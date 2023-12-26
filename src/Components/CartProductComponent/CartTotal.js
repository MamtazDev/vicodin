import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

const CartTotal = () => {
  const { cart } = useContext(ProductContext);
  const calculateSubtotal = () => {
    return cart.reduce(
      (total, product) => total + product.productPrice * product.quantity,
      0
    );
  };
  return (
    <div>
      <div className="shoping-cart-total mt-50">
        <h4>Cart Totals</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>Cart Subtotal</td>
              <td>${calculateSubtotal()}</td>
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
              <td>
                <strong>Order Total</strong>
              </td>
              <td>
                <strong>${calculateSubtotal() + 15}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-wrapper text-right">
          <NavLink to="/checkout" className="theme-btn-1 btn btn-effect-1">
            Proceed to checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
