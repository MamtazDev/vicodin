import { NavLink, useLocation } from "react-router-dom";

const BreadCrumb = ({ bannerImg, title }) => {
  const location = useLocation();
  const pathnameWithoutSlash = location.pathname.slice(10);
  return (
    <div>
      <div
        className="ltn__breadcrumb-area text-left  bg-image breadeCrumbImg"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title">{title}</h1>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <NavLink to="/">
                        <span className="ltn__secondary-color">
                          <i className="fas fa-home"></i>
                        </span>{" "}
                        Home{" "}
                      </NavLink>
                    </li>
                    <li>{pathnameWithoutSlash}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
