import banner_bg from "./assets/images/bg/inner-banner-vec.png";
import { useNavigate } from "react-router-dom";
import Header from "./shared/Header";

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
                <img className="img-fluid" src={'https://demo.egenslab.com/html/scooby/preview/assets/images/bg/inner-banner-img.png'} alt="" />
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
                { }
              </div>
              <div className="story-content">
                <p>
                  Welcome to Ruby Pets! We are devoted to pets and their owners. Our goal is to provide the finest products and services for your beloved companions. With a focus on responsible pet ownership and animal welfare, we offer premium pet products, expert advice, and a caring community. Join us in creating a world where every pet is cherished and lives a happy, healthy life. Thank you for choosing Ruby Pets for all your pet needs!
                </p>
                {
                }
                {
                }
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div className="story-img">
                <img className="img-fluid" src={'https://demo.egenslab.com/html/scooby/preview/assets/images/bg/story-img1.png'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
