
import { useNavigate } from "react-router-dom";


import logo from "../assets/images/Logo1.png";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <footer className="style2">
        <div className="container">
          <div className="row pt-80 pb-80 justify-content-center">
            <div className="col-lg-5 col-md-12">
              <div className="footer-widget">
                <div className="footer-icon">
                  <img src={logo} alt="" width={150} />
                </div>
                <div className="widget-title">
                  <h2>
                    Luxury living  <br /> <span> for your pet</span>
                   
                    {/* your pet Food, <span>our Shop</span>? */}
                  </h2>
                </div>
                <div className="footer-btn">
                  <a className="primary-btn6" style={{ color: 'white' }} onClick={() => navigate('/products')}>
                    Shop Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">

            </div>

            <div className="col-lg-2 col-sm-6">

            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <div className="menu-container">
                  <ul>
                    <li>
                      <a onClick={() => navigate('/about')} >About Us</a>
                    </li>
                    <li>
                      <a onClick={() => navigate('/products')}>Product</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row border-top align-items-center">

            <div className="col-lg-12 d-flex justify-content-md-end justify-content-center">
              <div className="social-area">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
