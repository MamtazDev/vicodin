import { NavLink } from 'react-router-dom';
import { serviceDatas } from '../../Utils/serviceData';

const CoreServices = () => {

    return (
        <div>
            <div className="ltn__service-area section-bg-1 pt-115 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
                                <h1 className="section-title">Our Core Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row  justify-content-center">
                        {serviceDatas.map((data, index) =>
                            <div key={index} className="col-lg-4 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                    <div className="ltn__feature-icon">
                                        <img src={data.imageUrl} alt="#" />
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><NavLink to={`/service-details/${data.slug}`}>{data?.title}</NavLink></h3>
                                        <p>
                                            {data.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreServices;