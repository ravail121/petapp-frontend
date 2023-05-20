import Header from "./shared/Header";
import ProductsRow from "./ProductsRow";
import DiscountHeader from "./shared/DiscountHeader";
import product_item1 from "./assets/images/icon/dog.svg";
import product_item2 from "./assets/images/icon/cat.svg";
import product_item3 from "./assets/images/icon/fish.svg";
import product_item4 from "./assets/images/icon/bird.svg";
import { Link } from "react-router-dom";
import banner from "./assets/images/bg/h3-banner-img.png";
import Footer from "./shared/Footer";
import { useNavigate } from "react-router-dom";

const Products = [
  { name: "cat supplies", img: product_item1 },
  { name: "Hair color", img: product_item3 },
  { name: "Baloons", img: product_item4 },
  { name: "Fruits", img: product_item1 },
  { name: "cat ", img: product_item2 },
  { name: " color", img: product_item3 },
  { name: "Balns", img: product_item4 },
  { name: "Fits", img: product_item2 },
];

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <DiscountHeader minimum_limit={80} />
      <Header navigate={navigate} />

      <div className="hero3 mb-90">
        <div className="d-flex justify-content-center background-text">
          <h2 className="marquee_text">
            <span>Get exciting Discount</span> Up To 50%
          </h2>
        </div>
        <div className="swiper-slide hero-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 banner-content">
                <h1>Best Store For Your Shooping.</h1>
                <div className="btn-group">
                  <Link className="primary-btn5 btn-md" to="/products">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                <div className="hero-img">
                  <img
                    className={"img-fluid banner-imgas"}
                    src={
                      "https://thumbs.dreamstime.com/b/woman-using-digital-tablet-to-shop-online-shoes-61909444.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home3-categoty-area pt-120 mb-120">
        <div className="container">
          <ProductsRow products={Products} />
          <div className="d-flex justify-content-center"></div>
        </div>
      </div>

      {}
    </>
  );
}

export default Home;
