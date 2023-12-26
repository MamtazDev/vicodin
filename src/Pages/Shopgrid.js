import AboutNaveBarHeader from "../SharedPages/AboutNaveBarHeader";
import AboutNavBarFooter from "../SharedPages/AboutNavBarFooter";
import ShopGridProducts from "../Components/NavBarShopComponents/ShopGridProducts";
import CallTo from "../Utils/CallTo";
import Banner from "../assets/bg/144.jpg";
import BreadCrumb from "../Utils/BreadCrumb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesProducts from "../Components/NavBarShopComponents/CategoriesProducts ";

const Shopgrid = () => {
  const [categoryName, setCategoryName] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategoryName(data));
  }, []);
  const { id } = useParams();
  return (
    <>
      {id ? (
        <div className="body-wrapper">
          <AboutNaveBarHeader />
          <BreadCrumb title={categoryName.category} bannerImg={Banner} />
          <CategoriesProducts params={id} />
          <CallTo />
          <AboutNavBarFooter />
        </div>
      ) : (
        <div className="body-wrapper">
          <AboutNaveBarHeader />
          <BreadCrumb title={categoryName.category} bannerImg={Banner} />
          <ShopGridProducts />
          <CallTo />
          <AboutNavBarFooter />
        </div>
      )}
    </>
  );
};

export default Shopgrid;
