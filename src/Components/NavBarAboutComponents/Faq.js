import Img100 from '../../assets/others/100.jpg';
import Img17 from '../../assets/bg/17.jpg';

const Faq = () => {
    return (
        <div>
            <div className="ltn__faq-area pt-115 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2 text-center">
                                <h1 className="section-title white-color---">Some Questions</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ltn__faq-inner ltn__faq-inner-2">
                                <div id="accordion_2">
                                    {/* <!-- card --> */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                                            How to buy a product?
                                        </h6>
                                        <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card --> */}
                                    <div className="card">
                                        <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false">
                                            How can i make refund from your website?
                                        </h6>
                                        <div id="faq-item-2-2" className="collapse show">
                                            <div className="card-body">
                                            <div class="ltn__video-img alignleft">
                                            <img src={Img17} alt="video popup bg image"/>
                                            <a class="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----" href="https://www.youtube.com/embed/Cr4LFOgRGeo?autoplay=1&showinfo=0"  data-rel="lightcase:myCollection">
                                                <i class="fa fa-play"></i>
                                            </a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card --> */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                                            I am a new user. How should I start?
                                        </h6>
                                        <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card --> */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                                            Returns and refunds
                                        </h6>
                                        <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card --> */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                                            Are my details secured?
                                        </h6>
                                        <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <aside className="about-us-img-wrap about-img-right">
                                <img src={Img100} alt="Banner Image" />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;