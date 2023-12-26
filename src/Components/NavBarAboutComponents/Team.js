import { NavLink } from "react-router-dom";

const Team = () => {
  const ourExpeExpertDoctors = [
    {
      name: "Rosalina D. William",
      title: "Scientist",
      faceBook: "https://www.facebook.com/",
      twiter: "https://twitter.com/i/flow/login",
      linkedIn: "https://www.linkedin.com/",
      imageUrl:
        "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/team/4.jpg",
    },

    {
      name: "Kelian Anderson",
      title: "Dentist",
      faceBook: "https://www.facebook.com/",
      twiter: "https://twitter.com/i/flow/login",
      linkedIn: "https://www.linkedin.com/",
      imageUrl:
        "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/team/2.jpg",
    },

    {
      name: "Miranda H. Halim",
      title: "Caardiologist",
      faceBook: "https://www.facebook.com/",
      twiter: "https://twitter.com/i/flow/login",
      linkedIn: "https://www.linkedin.com/",
      imageUrl:
        "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/team/5.jpg",
    },
  ];
  return (
    <div>
      <div className="ltn__team-area pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h1 className="section-title">Our Expert Doctor</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {ourExpeExpertDoctors.map((ourExpeExpertDoctor, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3---">
                  <div className="team-img">
                    <img src={ourExpeExpertDoctor.imageUrl} alt="Image" />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">{ourExpeExpertDoctor.name}</a>
                    </h4>
                    <h6 className="ltn__secondary-color">
                      {ourExpeExpertDoctor.title}
                    </h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <NavLink to={ourExpeExpertDoctor.faceBook}>
                            <i className="fab fa-facebook-f"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={ourExpeExpertDoctor.twiter}>
                            <i className="fab fa-twitter"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={ourExpeExpertDoctor.linkedIn}>
                            <i className="fab fa-linkedin"></i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
