import React, { useEffect } from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../environment";
import { useParams } from "react-router-dom";
import { message } from 'antd';

import mxsvg from '../assets/images/icon/amex.svg'
const ProductDetails = () => {
  const [, setIsLoading] = React.useState(false);
  const [ProductDetail, setProductDetail] = React.useState();
  const [messageApi, contextHolder] = message.useMessage();
  const { id } = useParams();
  const [count, setCount] = React.useState(1);
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Add to cart Successfully Added',
    });
  };
  const navigate = useNavigate()
  const decodedObj = JSON.parse(decodeURIComponent(id));
  // console.log(decodedObj);
  // setProductDetail(decodedObj);
  useEffect(() => {
    GetAllProducts();
    setProductDetail(decodedObj);
    // addToCart();
  }, []);

  const GetAllProducts = (e, pageNumber) => {
    setIsLoading(true);
    fetch(`${url}/user/products/get/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("Product detail ----->>>", response);
        if (response.message === "Product has been fetched Succesfully") {
          setProductDetail(response?.data?.product);
          // setAllpages(response?.data?.totalCount);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const addToCart = () => {
    const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
    //  decodedObj const  = { id: 123 }; // Example decoded object
    const hasDuplicate = storedArray.find((obj) => obj.id === decodedObj.id);
    console.log(hasDuplicate)
    if (!hasDuplicate) {
      decodedObj["quantity"] = count;
      storedArray.push(decodedObj);
      localStorage.setItem("myArray", JSON.stringify(storedArray));
      success()
      navigate("/cart")

    } else {
      console.log('else')
      // storedArray["quantity"] = count;
      hasDuplicate["quantity"] = count + hasDuplicate["quantity"];
      localStorage.setItem("myArray", JSON.stringify(storedArray));
      success()
      navigate(`/cart`)
    }
  };

  return (
    <>
      {" "}
      {contextHolder}
      <DiscountHeader minimum_limit={80} />
      <Header />

      <div class="inner-page-banner" style={{ padding: '120px 0px' }}>
        <div class="breadcrumb-vec-btm">
          <img class="img-fluid" src="../assets/images/bg/inner-banner-btm-vec.png" alt="" />
        </div>
        <div class="container">
          <div class="row justify-content-center align-items-center text-center">
            <div class="col-lg-6 align-items-center">
              <div class="banner-content">
                <h1>Shop Details</h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Shop Details</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-img d-lg-block d-none">
                <div class="banner-img-bg">
                  <img class="img-fluid" src="https://demo.egenslab.com/html/scooby/preview/assets/images/bg/inner-banner-img.png" alt="" />
                </div>
                <img class="img-fluid" src="assets/images/bg/inner-banner-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-details-page pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-120">
            <div className="col-lg-7">
              <div className="tab-content tab-content1" id="v-pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="v-pills-img1"
                  role="tabpanel"
                  aria-labelledby="v-pills-img1-tab"
                >
                  <img
                    width={400}
                    height={200}
                    className="img-fluid"
                    src={ProductDetail?.imageName}
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img2"
                  role="tabpanel"
                  aria-labelledby="v-pills-img2-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/shop-big-02.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img3"
                  role="tabpanel"
                  aria-labelledby="v-pills-img3-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/shop-big-03.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img4"
                  role="tabpanel"
                  aria-labelledby="v-pills-img4-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/shop-big-04.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img5"
                  role="tabpanel"
                  aria-labelledby="v-pills-img5-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/shop-big-05.png"
                    alt=""
                  />
                </div>
              </div>

              <div
                className="nav nav1 nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {/* <button
                  className="nav-link active"
                  id="v-pills-img1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img1"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img1"
                  aria-selected="true"
                >
                  <img src="assets/images/bg/shop-sm-01.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img2"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img2"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/shop-sm-02.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img3"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img3"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/shop-sm-03.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img4"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img4"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/shop-sm-04.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img5-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img5"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img5"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/shop-sm-05.png" alt="" />
                </button> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="shop-details-content">
                <h3>{ProductDetail?.name}</h3>
                <ul className="shopuct-review2 d-flex flex-row align-items-center mb-25">
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    {/* <a href="#" className="review-no">
                      (1 customer review)
                    </a> */}
                  </li>
                </ul>
                <div className="model-number">
                  <span>SKU:9852410</span>
                </div>
                <div className="price-tag">
                  <h4>
                    ${ProductDetail?.dropshipPrice}{" "}
                    <del>${ProductDetail?.rrp}</del>
                  </h4>
                </div>

                <p>{ProductDetail?.fullDescription}</p>
                <div className="shop-quantity d-flex align-items-center justify-content-start mb-20">
                  <div className="quantity d-flex align-items-center">
                    <div className="quantity-nav nice-number d-flex align-items-center">
                      <button
                        disabled={count === 1}
                        onClick={() => setCount(count - 1)}
                      >
                        <span className="mb-2">-</span>
                      </button>{" "}
                      <input
                        style={{ width: "24px" }}
                        type="number"
                        value={count}
                        min="1"
                      />
                      <button
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <span className="mb-2">+</span>
                      </button>
                    </div>
                  </div>
                  <Link onClick={addToCart} to="/cart" className="primary-btn3">
                    Add to cart
                  </Link>
                </div>
                <div className="buy-now-btn">
                  <Link to='/checkOut'>Buy Now</Link>
                </div>

                <div className="pyment-method">
                  <h6 onClick={success}>Guaranted Safe Checkout</h6>
                  <ul>
                    <li>
                      <img src="../assets/images/icon/visa2.svg" alt="" />
                    </li>
                    <li>
                      <img src={mxsvg} alt="" />
                    </li>
                    <li>
                      <img src="../assets/images/icon/discover.svg" alt="" />
                    </li>
                    <li>
                      <img src="../assets/images/icon/mastercard.svg" alt="" />
                    </li>
                    <li>
                      <img src="../assets/images/icon/stripe.svg" alt="" />
                    </li>
                    <li>
                      <img src="../assets/images/icon/paypal.svg" alt="" />
                    </li>
                    <li>
                      <img src="../assets/images/icon/pay.svg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-120">
            <div className="col-lg-12">
              <div
                className="nav nav2 nav  nav-pills"
                id="v-pills-tab2"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="false"
                >
                  Description
                </button>
              </div>

              <div
                className="tab-content tab-content2"
                id="v-pills-tabContent2"
              >
                <div
                  className="tab-pane fade active show"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="description">
                    <p className="para-2 mb-3">
                      {ProductDetail?.fullDescription}
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="addithonal-information">
                    <table className="table total-table2">
                      <tbody>
                        <tr>
                          <td>Protein</td>
                          <td>
                            25%, to build and repair tissues, produce enzymes,
                            and maintain healthy organs.
                          </td>
                        </tr>
                        <tr>
                          <td>Fats</td>
                          <td>
                            0.5%, They also help keep the skin and coat healthy.
                          </td>
                        </tr>
                        <tr>
                          <td>Carbohydrates</td>
                          <td>
                            10%, provide energy and help pets maintain healthy
                            weight and keep good the digestive system.
                          </td>
                        </tr>
                        <tr>
                          <td>Minerals</td>
                          <td>
                            20%,Help building strong bones, maintaining healthy
                            muscles, and regulating the body's fluid balance.
                          </td>
                        </tr>
                        <tr>
                          <td>Vitamins</td>
                          <td>
                            15.5%, Essential for a variety of functions in the
                            body, including the immune system, metabolism, and
                            growth.
                          </td>
                        </tr>
                        <tr>
                          <td>Animale</td>
                          <td> For Dog, Cat.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-common"
                  role="tabpanel"
                  aria-labelledby="v-pills-common-tab"
                >
                  <div className="reviews-area">
                    <div className="row g-lg-4 gy-5">
                      <div className="col-lg-8">
                        <div className="number-of-review">
                          <h3>Review (02) :</h3>
                        </div>
                        <div className="review-list-area">
                          <ul className="review-list">
                            <li>
                              <div className="single-review d-flex justify-content-between flex-md-nowrap flex-wrap">
                                <div className="review-image">
                                  <img
                                    src="assets/images/bg/review-img-1.png"
                                    alt="image"
                                  />
                                </div>
                                <div className="review-content">
                                  <div className="c-header d-flex align-items-center">
                                    <div className="review-meta">
                                      <h5 className="mb-0">
                                        <a href="#">Rocky Mike ,</a>
                                      </h5>
                                      <div className="c-date">06 july,2022</div>
                                    </div>
                                    <div className="replay-btn">
                                      <a href="#">
                                        <i className="bi bi-reply"></i>Reply
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-review">
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                  </ul>
                                  <div className="c-body">
                                    <p>
                                      I must explain to you how all this
                                      mistaken idea of denouncing pleasure and
                                      praising pain was born and I will give you
                                      a complete account.{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-review d-flex justify-content-between flex-md-nowrap flex-wrap">
                                <div className="review-image">
                                  <img
                                    src="assets/images/bg/review-img-3.png"
                                    alt="image"
                                  />
                                </div>
                                <div className="review-content">
                                  <div className="c-header d-flex align-items-center">
                                    <div className="review-meta">
                                      <h5 className="mb-0">
                                        <a href="#">Rony Jhon ,</a>
                                      </h5>
                                      <div className="c-date">07 july,2022</div>
                                    </div>
                                    <div className="replay-btn">
                                      <a href="#">
                                        <i className="bi bi-reply"></i>Reply
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-review">
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill"></i>
                                    </li>
                                  </ul>
                                  <div className="c-body">
                                    <p>
                                      I must explain to you how all this
                                      mistaken idea of denouncing pleasure and
                                      praising pain was born and I will give you
                                      a complete account.{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <div className="col-lg-4">
                                    <div className="review-form">
                                        <div className="number-of-review">
                                            <h3>Leave A Reply</h3>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-inner mb-20">
                                                        <input type="text" placeholder="Name*" required="">
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-inner mb-20">
                                                        <input type="email" placeholder="Email*" required="">
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-inner mb-10">
                                                        <textarea placeholder="Message..."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-inner2 mb-30">
                                                        <div className="review-rate-area">
                                                            <p>Your Rating</p>
                                                            <div className="rate">
                                                                <input type="radio" id="star5" name="rate" value="5">
                                                                <label for="star5" title="text">5 stars</label>
                                                                <input type="radio" id="star4" name="rate" value="4">
                                                                <label for="star4" title="text">4 stars</label>
                                                                <input type="radio" id="star3" name="rate" value="3">
                                                                <label for="star3" title="text">3 stars</label>
                                                                <input type="radio" id="star2" name="rate" value="2">
                                                                <label for="star2" title="text">2 stars</label>
                                                                <input type="radio" id="star1" name="rate" value="1">
                                                                <label for="star1" title="text">1 star</label>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-inner two">
                                                        <button className="primary-btn3 btn-lg" type="submit">Post Comment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
    
                         
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 d-flex flex-wrap align-items-center justify-content-md-between justify-content-start gap-2 mb-60">
                    <div className="inner-section-title">
                      <h2>Other Products</h2>
                    </div>
                    <div className="swiper-btn-wrap d-flex align-items-center">
                      <div className="slider-btn prev-btn-12">
                        <i className="bi bi-arrow-left"></i>
                      </div>
                      <div className="slider-btn next-btn-12">
                        <i className="bi bi-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="swiper essential-items-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="collection-card">
                          <div className="offer-card">
                            <span>Offer</span>
                          </div>
                          <div className="collection-img">
                            <img
                              className="img-gluid"
                              src="assets/images/bg/category/h3-collection-01.png"
                              alt=""
                            />
                            <div className="view-dt-btn">
                              <div className="plus-icon">
                                <i className="bi bi-plus"></i>
                              </div>
                              <a>View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-cart3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-favorites3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="collection-content text-center">
                            <h4>
                              <a href="shop-details.html">
                                Whiskas Cat Food Core Tuna
                              </a>
                            </h4>
                            <div className="price">
                              <h6>$25.00</h6>
                              <del>$30.00</del>
                            </div>
                            <div className="review">
                              <ul>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                              </ul>
                              <span>(50)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="collection-card">
                          <div className="collection-img">
                            <img
                              className="img-gluid"
                              src="assets/images/bg/category/h3-collection-02.png"
                              alt=""
                            />
                            <div className="view-dt-btn">
                              <div className="plus-icon">
                                <i className="bi bi-plus"></i>
                              </div>
                              <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-cart3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-favorites3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="collection-content text-center">
                            <h4>
                              <a href="shop-details.html">
                                Friskies Kitten Discoveries.
                              </a>
                            </h4>
                            <div className="price">
                              <h6>$39.00</h6>
                              <del>$39.00</del>
                            </div>
                            <div className="review">
                              <ul>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                              </ul>
                              <span>(50)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="collection-card">
                          <div className="offer-card sale">
                            <span>Hot Sale</span>
                          </div>
                          <div className="collection-img">
                            <img
                              className="img-gluid"
                              src="assets/images/bg/category/h3-collection-03.png"
                              alt=""
                            />
                            <div className="view-dt-btn">
                              <div className="plus-icon">
                                <i className="bi bi-plus"></i>
                              </div>
                              <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-cart3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-favorites3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="collection-content text-center">
                            <h4>
                              <a href="shop-details.html">
                                Joules Cat Cotton House.
                              </a>
                            </h4>
                            <div className="price">
                              <h6>$150.00</h6>
                              <del>$200.00</del>
                            </div>
                            <div className="review">
                              <ul>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                              </ul>
                              <span>(50)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="collection-card">
                          <div className="collection-img">
                            <img
                              className="img-gluid"
                              src="assets/images/bg/category/h3-collection-04.png"
                              alt=""
                            />
                            <div className="view-dt-btn">
                              <div className="plus-icon">
                                <i className="bi bi-plus"></i>
                              </div>
                              <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-cart3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-favorites3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="collection-content text-center">
                            <h4>
                              <a href="shop-details.html">
                                Natural Dog Fresh Food.
                              </a>
                            </h4>
                            <div className="price">
                              <h6>$18.00</h6>
                              <del>$30.00</del>
                            </div>
                            <div className="review">
                              <ul>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                              </ul>
                              <span>(50)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="collection-card">
                          <div className="offer-card sold-out">
                            <span>Sold Out</span>
                          </div>
                          <div className="collection-img">
                            <img
                              className="img-gluid"
                              src="assets/images/bg/category/h3-collection-07.png"
                              alt=""
                            />
                            <div className="view-dt-btn">
                              <div className="plus-icon">
                                <i className="bi bi-plus"></i>
                              </div>
                              <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-cart3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="assets/images/icon/Icon-favorites3.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="collection-content text-center">
                            <h4>
                              <a href="shop-details.html">
                                Rooibos Pet Food Supple
                              </a>
                            </h4>
                            <div className="price">
                              <h6>$75.00</h6>
                              <del>$80.00</del>
                            </div>
                            <div className="review">
                              <ul>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                              </ul>
                              <span>(50)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
