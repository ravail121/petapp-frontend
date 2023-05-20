import visa from "../assets/images/icon/visa.svg";
import logo from "../assets/images/header2-logo.svg";
import maestro from "../assets/images/icon/maestro.svg";
import app_store from "../assets/images/icon/app-store.svg";
import master_card from "../assets/images/icon/master-card.svg";
import american_ex from "../assets/images/icon/amarican-ex.svg";
import google_play from "../assets/images/icon/google-play.svg";

function Footer() {
  return (
    <footer className="style2">
      <div className="container">
        <div className="row pt-80 pb-80 justify-content-center">
          <div className="col-lg-5 col-md-12">
            <div className="footer-widget">
              <div className="footer-icon">
                <img src={logo} alt="" />
              </div>
              <div className="widget-title">
                <h2>
                  want <span>to Take</span>
                  <br />
                  your pet Food, <span>our Shop</span>?
                </h2>
              </div>
              <div className="footer-btn">
                <a className="primary-btn6" href="shop.html">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget one">
              <div className="widget-title">
                <h3>Useful Links</h3>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="shop.html">New Product</a>
                  </li>
                  <li>
                    <a href="#">Discounts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget one ">
              <div className="widget-title">
                <h3>My Account</h3>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#">My Wish List</a>
                  </li>
                  <li>
                    <a href="#">Order Tracking</a>
                  </li>
                  <li>
                    <a href="#">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="#">My Order History</a>
                  </li>
                  <li>
                    <a href="#">Shoping Info</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-widget one mb-0">
              <div className="widget-title">
                <h3>Install app</h3>
                <p>Form App Store or Google Play</p>
              </div>
              <div className="download-link">
                <ul>
                  <li>
                    <a href="#">
                      <img src={google_play} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={app_store} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <p>Secured Paynebt Gateways</p>
              <div className="payment-mathord">
                <ul>
                  <li>
                    <a href="#">
                      <img src={visa} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={master_card} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={american_ex} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={maestro} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row border-top align-items-center">
          <div className="col-lg-6">
            <div className="copyright-area">
              <p>
                © 2023 online store is Proudly Powered by <a href="#">xyz</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-md-end justify-content-center">
            <div className="social-area">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/">
                    <i className="bx bxl-pinterest-alt"></i>
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
  );
}

export default Footer;
