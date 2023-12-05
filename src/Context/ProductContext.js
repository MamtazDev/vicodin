import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const productValue = { products, setProducts };
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
