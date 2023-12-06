import Slider from 'react-slick';

const ClientFeedBack = () => {
    const clientsFeedbacks = [
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/1.jpg"
        },
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/2.jpg"
        },
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/5.jpg"
        },
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/6.jpg"
        },
        {
            "name": "Rosalina D. William",
            "title": "Founder",
            "info": "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "imageUrl": "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/testimonial/7.jpg"
        }

    ]

    const settings = {
        infinite: true,
        arrows: true,
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
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
        <div>
            <div>
                <div className="ltn__testimonial-area section-bg-1 pt-290 pb-70">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area ltn__section-title-2 text-center">
                                    <h1 className="section-title">Clients Feedbacks<span>.</span></h1>
                                </div>
                            </div>
                        </div>

                        <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
                            <Slider {...settings}>
                                {
                                    clientsFeedbacks.map((clientsFeedback, index) => (<div key={index}>
                                        <div className="col-lg-12">
                                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                                <div className="ltn__testimoni-img">
                                                    <img src={clientsFeedback.imageUrl} alt="#" />
                                                </div>
                                                <div className="ltn__testimoni-info">
                                                    <p>{clientsFeedback.info}</p>
                                                    <h4>{clientsFeedback.name}</h4>
                                                    <h6>{clientsFeedback.title}</h6>
                                                </div>
                                                <div className="ltn__testimoni-bg-icon">
                                                    <i className="far fa-comments"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>))
                                }

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedBack;