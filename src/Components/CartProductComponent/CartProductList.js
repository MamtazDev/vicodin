import { NavLink } from "react-router-dom";
import Product1 from "../../assets/product/1.png";
import Product2 from "../../assets/product/2.png";
import Product3 from "../../assets/product/3.png";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartProductList = () => {
  const { cart, setCart } = useContext(ProductContext);
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.productID !== productId);
    setCart(updatedCart);
    toast.error("Product removed from cart!");
  };
  return (
    <div>
      <div className="shoping-cart-table table-responsive">
        <table className="table">
          <tbody>
            {cart.map((data, index) => (
              <tr key={index}>
                <td
                  onClick={() => removeFromCart(data?.productID)}
                  className="cart-product-remove"
                >
                  x
                </td>
                <td className="cart-product-image">
                  <NavLink to="">
                    <img
                      height={100}
                      width={100}
                      src={`http://localhost:3000/${data?.imageUrl}`}
                      alt="#"
                    />
                  </NavLink>
                </td>
                <td className="cart-product-info">
                  <h4>
                    <NavLink to="">{data?.productName}</NavLink>
                  </h4>
                </td>
                <td className="cart-product-price">${data?.productPrice}</td>
                <td className="cart-product-quantity">
                  <div className="cart-plus-minus">
                    <input
                      type="text"
                      value={data?.quantity}
                      name="qtybutton"
                      className="cart-plus-minus-box"
                    />
                  </div>
                </td>
                <td className="cart-product-subtotal">
                  ${data?.productPrice * data?.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartProductList;
