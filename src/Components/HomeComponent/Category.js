import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
const Category = () => {
    const [categorys, setCategory] = useState([]);
    useEffect(() => {
    //    API FOR CATEGORIES
    }, [])
    const settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    arrows: false,
                    speed: 600,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    infinite: true,
                    arrows: false,
                    speed: 600,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            {/* <!-- CATEGORY AREA START --> */}
            <div className="ltn__category-area section-bg-12-- pt-50 pb-90 ">
                <div className="container ">
                    <div className="row ltn__category-slider-active-six slick-arrow-1 border-bottom ">

                        <Slider {...settings}>

                            {categorys.map(category => (<div className="col-12">
                                <div>
                                    <div className="ltn__category-item ltn__category-item-6 text-center">
                                        <div className="ltn__category-item-img">
                                            <NavLink to="/shopgrid">
                                                <i className={category.imageUrl}></i>
                                            </NavLink>
                                        </div>
                                        <div className="ltn__category-item-name">
                                            <h6> <NavLink to="/shopgrid">{category.categoryName}</NavLink></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;