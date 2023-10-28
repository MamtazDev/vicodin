import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const LeatestBlogs = () => {
    const [leatestBloges, setleatestBloge] = useState([]);
    useEffect(() =>{
        fetch("leatestBloge.json")
        .then((res) => res.json())
        .then(data => setleatestBloge(data))
    },[])

    const settings = {  
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 3,
         slidesToScroll: 3,
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 3,
                 slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 3,
                 slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 1,
                 slidesToScroll: 1,
              }
            }
          ]
      };
    return (
        <>

        {/* <!-- BLOG AREA START (blog-3) --> */}
<div className="ltn__blog-area pt-115 pb-45 ">
        <div className="container">
        <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color d-none">News & Blogs</h6>
                        <h1 className="section-title">Leatest Blogs</h1>
                    </div>
                </div>
            </div>

            <div className="row  ltn__blog-slider-one-active slick-arrow-12 ltn__blog-item-3-normal">

            <Slider {...settings}>
          {leatestBloges.map(leatestBloge =>(<div>
          <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-3">
                        <div className="ltn__blog-img">
                            {/* <a href="blog-details.html"><img src={leatestBloge.imageUrl} alt="#"/></a> */}
                            <img src={leatestBloge.imageUrl} alt="#"/>
                        </div>
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: {leatestBloge.role}</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="fas fa-tags"></i>{leatestBloge.title}</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">{leatestBloge.description}</a></h3>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>{leatestBloge.date}</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    {/* <a href="blog-details.html">Read more</a> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>))
          }
                
        </Slider>

            </div>

        </div>

</div>

{/* <!-- BLOG AREA END --> */}
        </>
    );
};

export default LeatestBlogs;