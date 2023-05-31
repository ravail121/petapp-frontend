import Header from "./shared/Header";
import { useEffect, useState } from 'react'
import ProductsRow from "./ProductsRow";
import DiscountHeader from "./shared/DiscountHeader";
import product_item1 from "./assets/images/icon/dog.svg";
import product_item2 from "./assets/images/icon/cat.svg";
import product_item3 from "./assets/images/icon/fish.svg";
import { url } from "./environment";
import { useDispatch } from 'react-redux';
import { UPDATE_CART_COUNT } from './Redux/Actions/action';

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
  const [products, setProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    GetAllProducts();
    checkDefaultCounter()
  }, []);


  const GetAllProducts = (e, pageNumber) => {
    setIsLoading(true);
    fetch(`${url}/user/products/list/${pageNumber ? pageNumber : 1}/6`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("All Products ----->>>", response);
        if (response.message === "Products has been fetched Succesfully") {
          setProducts(response?.data?.products);
          // setAllpages(response?.data?.totalCount);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const checkDefaultCounter = () => {
    var totalQuantity = 0;

    let Data = JSON.parse(localStorage.getItem("myArray"))
    for (var i = 0; i < Data?.length; i++) {

      totalQuantity += Data[i].quantity;

      console.log(totalQuantity)
    }
    localStorage.setItem("myArray", JSON.stringify(Data));
    dispatch({ type: UPDATE_CART_COUNT, payload: totalQuantity });
  }

  return (
    <>
      <DiscountHeader minimum_limit={80} />
      <Header navigate={navigate} />

      <div className="hero3 mb-90">
        {/* <div className="d-flex justify-content-center background-text">
          <h2 className="marquee_text">
            <span>Get exciting Discount</span> Up To 50%
          </h2>
        </div> */}
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
                      "assets/images/home.png"
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


      <div class="home3-collection-area mb-120">
        <div class="container">
          <div class="row mb-60">
            <div class="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div class="section-title3">
                <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Find Pet Collections</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
              </div>
              <div class="h3-view-btn d-md-flex d-none">
                <a href="shop.html">View All Product<img src="assets/images/icon/haf-button-2.svg" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="row g-4 justify-content-center">
            {IsLoading ? (
              <div
                className="row text-align-center"
                style={{ display: "block", textAlign: "center" }}
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : products?.length > 0 ? (
              products &&
              products?.map((item) => {
                return (
                  <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                      <div class="offer-card">
                        {/* <span>Offer</span> */}
                      </div>
                      <div class="collection-img">
                        <img class="img-gluid" width={200}
                          height={150} src={item?.imageName} alt="" />
                        <div class="view-dt-btn">
                          <div class="plus-icon">
                            <i class="bi bi-plus"></i>
                          </div>
                          <a onClick={() =>
                            navigate(
                              `/productsDetails/${encodeURIComponent(
                                JSON.stringify(item)
                              )}`
                            )
                          }>View Details</a>
                        </div>
                        <ul class="cart-icon-list">
                          <li><a href="#"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                          {/* <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li> */}
                        </ul>
                      </div>
                      <div class="collection-content text-center">
                        <h4><a onClick={() =>
                          navigate(
                            `/productsDetails/${encodeURIComponent(
                              JSON.stringify(item)
                            )}`
                          )
                        }>{item.name}</a></h4>
                        <div class="price">
                          <h6>${item.dropshipPrice}</h6>
                          {/* <del>$30.00</del> */}
                        </div>
                        {/* <div class="review">
                    <ul>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                      <li><i class="bi bi-star-fill"></i></li>
                    </ul>
                    <span>(50)</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>No Products found</h2>
            )}
          </div>
          <div class="row d-md-none d-block pt-30">
            <div class="col-lg-12 d-flex justify-content-center">
              <div class="h3-view-btn">
                <a href="shop.html">View All Product<img src="assets/images/icon/haf-button-2.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home3-newsletter-area mb-120">
        <div class="newsletter-img">
          <img class="img-fluid" src="assets/images/bg/h3-newsletter-img.png" alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="newsletter-wrap">
                <div class="section-title3 mb-40">
                  <span>Get In Touch</span>
                  <h2>Let’s Connect Our Newsletter</h2>
                </div>
                <form>
                  <div class="form-inner">
                    <input type="text" placeholder="Type Your Email" />
                    <button type="submit">Connect</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      { }
    </>
  );
}

export default Home;
