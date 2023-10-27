import Banner from "../../assets/bg/144.jpg"

const ShopGridNabBar = () => {
    return (
        <div>


            <div className="ltn__utilize-overlay"></div>

            {/* <!-- BREADCRUMB AREA START --> */}
            <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " style={{
                backgroundImage: `url(${Banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner">
                                <h1 className="page-title">Shop Grid</h1>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><a href="index.html"><span className="ltn__secondary-color"><i className="fas fa-home"></i></span> Home</a></li>
                                        <li>Shop Grid</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- BREADCRUMB AREA END --> */}

            {/* <AboutNavBarFooter></AboutNavBarFooter> */}
        </div>
    );
};

export default ShopGridNabBar;