import LandingNav from "../components/LandingNav";
import main from "../assets/img/hero.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <LandingNav />
      <div className="landing-container">
        <div className="row">
          <div className="col">
            <img src={main} />
          </div>
          <div className="d-flex align-items-center col">
            <div>
              <div className="row">
                <h1>Delight your customers with effortless customer service</h1>
              </div>
              <div className="row">
                <h5>
                  Engage in more meaningful conversations every day, across
                  every channel, with every customer.
                </h5>
              </div>
              <div className="d-flex justify-content-center row">
                <Link to="/register">
                  <button type="button" className="btn get-started-btn">
                    GET STARTED
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
