import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (product) => {
    const isExist = cart.find((item) => item.productID === product.productID);
    if (isExist) {
      const newCart = cart.map((item) => {
        if (item.productID === product.productID) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success("Product added to cart!");
  };
  const addToWishList = (product) => {
    const isExist = wishList.find(
      (item) => item.productID === product.productID
    );
    if (isExist) {
      const updatedWishList = wishList.filter(
        (item) => item.productID !== product.productID
      );
      setWishList(updatedWishList);
    } else {
      setWishList([...wishList, product]);
    }

    toast.success("Product added to wish List!");
  };

  const productValue = {
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    selectedProduct,
    openModal,
    addToWishList,
    wishList,
    setWishList
  };
  useEffect(() => {
    fetch("ProductData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <ProductContext.Provider value={productValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

// folder structure

// => src => assets

// => src => pages => folder home => home.js
// => src => component => home => header, slider, all component related to home / styles
// => src => utils => only raw JS ,
// => src => shared  => common components
//  src => styles
