import { NavLink } from 'react-router-dom';
import img21 from '../../assets/icons/icon-img/21.png';
import { serviceDatas } from '../../Utils/serviceData';



const CoreServices = () => {
    console.log(serviceDatas, "hello")
    return (
        <div>
            <div class="ltn__service-area section-bg-1 pt-115 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-area ltn__section-title-2--- text-center">
                                <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
                                <h1 class="section-title">Our Core Services</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row  justify-content-center">
                        {serviceDatas.map(( data,index) => 
                            <div key={index} class="col-lg-4 col-sm-6 col-12">
                                <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                    <div class="ltn__feature-icon">
                                        <img src={data.imageUrl} alt="#" />
                                    </div>
                                    <div class="ltn__feature-info">
                                        <h3><NavLink to="/service-details">{data?.title}</NavLink></h3>
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