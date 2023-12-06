import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Product added to cart!");
  };

  const productValue = {
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    selectedProduct,
    openModal,
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
