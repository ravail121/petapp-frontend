import banner_bg from "./assets/images/bg/inner-banner-vec.png";
import banner from "./assets/images/bg/inner-banner-img.png";
import { useNavigate } from "react-router-dom";
import Header from "./shared/Header";
import about_img from "./assets/images/bg/story-img1.png";
import star from "./assets/images/icon/trastpilot.svg";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <Header navigate={navigate} />
      <div className="inner-page-banner">
        <div className="breadcrumb-vec-btm">
          <img
            className="img-fluid"
            src="assets/images/bg/inner-banner-btm-vec.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-6 align-items-center">
              <div className="banner-content">
                <h1>About Me</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="" onClick={() => navigate("/home")}>
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Me
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img d-lg-block d-none">
                <div className="banner-img-bg">
                  <img className="img-fluid" src={banner_bg} alt="" />
                </div>
                <img className="img-fluid" src={banner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h1-story-area two mb-120 pt-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="section-title1">
                <span>Our Story</span>
                <h2>come to know what what we achieved.</h2>
              </div>
              <div className="story-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
                <div className="story-title-reviews">
                  <h3>
                    We Think Working Process may <span>increase</span> mindset.
                  </h3>
                  <div className="review">
                    <p>
                      Based on <a href="#">2,000 reviews</a>
                    </p>
                    <img src={star} alt="" />
                  </div>
                </div>
                <p>
                  Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor.
                  Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor,
                  hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor
                  hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor
                  hodor...
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div className="story-img">
                <img className="img-fluid" src={about_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
