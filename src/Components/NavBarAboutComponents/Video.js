import React from "react";

const Video = () => {
  return (
    <div>
      <div className="ltn__video-popup-area ltn__video-popup-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-10-- bg-image"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/15.jpg" +
                    ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}>
                <a
                  className="ltn__video-icon-2 ltn__video-icon-2-border border-radius-no"
                  href="https://www.youtube.com/embed/Cr4LFOgRGeo?autoplay=1&showinfo=0"
                  data-rel="lightcase:myCollection">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
