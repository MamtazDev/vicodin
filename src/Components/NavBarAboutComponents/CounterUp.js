import icon1 from "../../assets/icons/icon-img/icon1.png";
import icon2 from "../../assets/icons/icon-img/icon2.png";
import icon3 from "../../assets/icons/icon-img/icon3.png";
import icon4 from "../../assets/icons/icon-img/icon4.png";

const CounterUp = () => {
  return (
    <div>
      <div
        className="ltn__counterup-area section-bg-1 bg-image bg-overlay-theme-black-80--- pt-115 pb-70"
        data-bs-bg="img/bg/30.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-center">
                <div className="counter-icon">
                  <img src={icon1} alt="#" />
                </div>
                <h1>
                  <span className="counter">733</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Active Clients</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-center">
                <div className="counter-icon">
                  <img src={icon2} alt="#" />
                </div>
                <h1>
                  <span className="counter">33</span>
                  <span className="counterUp-letter">K</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Cup Of Coffee</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-center">
                <div className="counter-icon">
                  <img src={icon3} alt="#" />
                </div>
                <h1>
                  <span className="counter">100</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Get Rewards</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-center">
                <div className="counter-icon">
                  <img src={icon4} alt="#" />
                </div>
                <h1>
                  <span className="counter">21</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Country Cover</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
