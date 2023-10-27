import React from 'react';
import "../Style/css/outStyle.css"
import Slider from "react-slick";

const Brand = () => {

  const brands = [{
"imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/brand-logo/1.png"
  },{
    "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/brand-logo/2.png"
      },{
        "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/brand-logo/3.png"
          },{
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/brand-logo/4.png"
              },{
                "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/brand-logo/5.png"
                  },{
                    "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/brand-logo/3.png"
                      },]


    const settings = {  
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 5,
         slidesToScroll: 5,
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 5,
                 slidesToScroll: 5,
              }
            },
            {
              breakpoint: 600,
              settings: {
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 5,
                 slidesToScroll: 5,
              }
            },
            {
              breakpoint: 480,
              settings: {
                //  dots: true,
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 2,
                 slidesToScroll: 2,
              }
            }
          ]
      };
    return (
        <>
        {/* <!-- BRAND LOGO AREA START --> */}

        <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1--- pt-110--- pb-95 plr--9--- d-none--- ">
        <div className="container">
        <div className="row ltn__brand-logo-active">  
        <Slider {...settings}>
          {brands.map(brand =>(<div>
          <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src={brand.imageUrl} alt="Brand Logo"/>
                    </div>
                </div>
          </div>))}                  
        </Slider>
</div>
</div>
</div>

    {/* <!-- BRAND LOGO AREA END --> */}
        </>
    );
};

export default Brand;