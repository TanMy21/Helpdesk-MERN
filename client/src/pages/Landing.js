import LandingNav from "../components/LandingNav";
import main from "../assets/img/hero.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <div className="landing-nav-container">
          <LandingNav />
        </div>
        <div className="landing-main-container">
          <div className="banner-img">
            <img src={main} />
          </div>
          <div className="banner-content">
            <div id="banner-content">
              <h1>Delight your customers with effortless customer service</h1>
              <h5>
                Engage in more meaningful conversations every day, across every
                channel, with every customer.
              </h5>
              <Link to="/register">
                <button type="button" className="btn get-started-btn">
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
