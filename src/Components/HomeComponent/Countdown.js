import React from 'react';
// import imga from "../Style/img/banner/144.jpg"
const Countdown = () => {
    return (
       <>
       {/* <!-- COUNTDOWN AREA START --> */}
    <div className="ltn__call-to-action-area section-bg-1 bg-image pt-120 pb-120"  style={{  
  backgroundImage: "url(" + "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/25.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
        <div className="container"  >
            <div className="row">
                <div className="col-lg-7">
                    <div className="call-to-action-inner text-color-white--- text-center---">
                        <div className="section-title-area ltn__section-title-2--- text-center---">
                            <h6 className="ltn__secondary-color">Todays Hot Offer</h6>
                            <h1 className="section-title">Free Covid-19 Vaccine<br/>Campaign Ticket</h1>
                            <p>Cur tantas regiones barbarorum obiit, tot maria transmist <br/>
                                summo bono fruitur id est voluptate barbarorum </p>
                        </div>
                        <div className="ltn__countdown ltn__countdown-3 bg-white--" data-countdown="2021/12/28"></div>
                        <div className="btn-wrapper animated">
                            <a href="contact.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Book Now</a>
                            <a href="shop.html" className="ltn__secondary-color text-decoration-underline">Deal of The Day</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                   {/* <img src="img/banner/15.png" alt="#"/>  */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- COUNTDOWN AREA END --> */}
       </>
    );
};

export default Countdown;