import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

const ProductView = () => {
  const { selectedProduct } = useContext(ProductContext);
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  ">
          <div className="modal-content p-3 rounded-4">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img height={300} src={selectedProduct?.imageUrl} alt="" />
              <h2 className="product-title">
                <NavLink to={`/ProductDetails/${selectedProduct?.productID}`}>
                  {selectedProduct?.productName}
                </NavLink>
              </h2>
              <div className="product-price">
                <span>${selectedProduct?.productPrice}</span>
                <del>${selectedProduct?.productPreviousPrice}</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
