import Header from "./shared/Header";
import ProductsRow from "./ProductsRow";
import DiscountHeader from "./shared/DiscountHeader";
import product_item1 from './assets/images/icon/dog.svg';
import product_item2 from './assets/images/icon/cat.svg';
import product_item3 from './assets/images/icon/fish.svg';
import product_item4 from './assets/images/icon/bird.svg';

import banner from './assets/images/bg/h3-banner-img.png';
import Footer from "./shared/Footer";
import { useNavigate } from "react-router-dom";

const Products = [{name: 'cat supplies', img: product_item1}, {name: 'Hair color', img: product_item3}, {name: 'Baloons', img: product_item4}, {name: 'Fruits', img: product_item1},
{name: 'cat ', img: product_item2}, {name: ' color', img: product_item3}, {name: 'Balns', img: product_item4}, {name: 'Fits', img: product_item2}]

function Home() {
  const navigate = useNavigate()
  return (
    <>
    <DiscountHeader minimum_limit={80} />
    <Header navigate={navigate}/>

    <div className="hero3 mb-90">
      <div className="d-flex justify-content-center background-text">
        <h2 className="marquee_text"><span>Get exciting Discount</span> Up To 50%</h2>
      </div>
      <div className="swiper-slide hero-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 banner-content">
              <h1>Best Store For Your Shooping.</h1>
              <div className="btn-group">
                <a className="primary-btn5 btn-md" onClick={() => navigate('/shop')}>Shop Now</a>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="hero-img">
                <img className="img-fluid banner-imgas" src={banner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="home3-categoty-area pt-120 mb-120">
      <div className="container">        
          <ProductsRow products={Products} />
        <div className="d-flex justify-content-center">
        </div>
      </div>
    </div>

    {/* <div className="home3-collection-area mb-120">
        <div className="container">
            <div className="row mb-60">
                <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div className="section-title3">
                        <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Find Pet Collections</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
                    </div>
                    <div className="h3-view-btn d-md-flex d-none">
                        <a href="shop.html">View All Product<img src="assets/images/icon/haf-button-2.svg" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="collection-card">
                        <div className="offer-card">
                            <span>Offer</span>
                        </div>
                        <div className="collection-img">
                            <img className="img-gluid" src="assets/images/bg/category/h3-collection-01.png" alt="" />
                            <div className="view-dt-btn">
                                <div className="plus-icon">
                                    <i className="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="collection-content text-center">
                            <h4><a href="shop-details.html">Whiskas Cat Food Core Tuna</a></h4>
                            <div className="price">
                                <h6>$25.00</h6>
                                <del>$30.00</del>
                            </div>
                            <div className="review">
                                <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="collection-card">
                        <div className="collection-img">
                            <img className="img-gluid" src="assets/images/bg/category/h3-collection-02.png" alt="" />
                            <div className="view-dt-btn">
                                <div className="plus-icon">
                                    <i className="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="collection-content text-center">
                            <h4><a href="shop-details.html">Friskies Kitten Discoveries.</a></h4>
                            <div className="price">
                                <h6>$39.00</h6>
                                <del>$39.00</del>
                            </div>
                            <div className="review">
                                <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="collection-card">
                        <div className="offer-card sale">
                            <span>Hot Sale</span>
                        </div>
                        <div className="collection-img">
                            <img className="img-gluid" src="assets/images/bg/category/h3-collection-03.png" alt="" />
                            <div className="view-dt-btn">
                                <div className="plus-icon">
                                    <i className="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="collection-content text-center">
                            <h4><a href="shop-details.html">Joules Cat Cotton House.</a></h4>
                            <div className="price">
                                <h6>$150.00</h6>
                                <del>$200.00</del>
                            </div>
                            <div className="review">
                                <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="collection-card">
                        <div className="collection-img">
                            <img className="img-gluid" src="assets/images/bg/category/h3-collection-04.png" alt="" />
                            <div className="view-dt-btn">
                                <div className="plus-icon">
                                    <i className="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="collection-content text-center">
                            <h4><a href="shop-details.html">Natural Dog Fresh Food.</a></h4>
                            <div className="price">
                                <h6>$18.00</h6>
                                <del>$30.00</del>
                            </div>
                            <div className="review">
                                <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="collection-card">
                        <div className="offer-card">
                            <span>Offer</span>
                        </div>
                        <div className="collection-img">
                            <img className="img-gluid" src="assets/images/bg/category/h3-collection-05.png" alt="" />
                            <div className="view-dt-btn">
                                <div className="plus-icon">
                                    <i className="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="collection-content text-center">
                            <h4><a href="shop-details.html">Ferplast Cat Journey Bag.</a></h4>
                            <div className="price">
                                <h6>$250.00</h6>
                                <del>$300.00</del>
                            </div>
                            <div className="review">
                                <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="collection-card">
                        <div className="collection-img">
                            <img className="img-gluid" src="assets/images/bg/category/h3-collection-06.png" alt="" />
                            <div className="view-dt-btn">
                                <div className="plus-icon">
                                    <i className="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="collection-content text-center">
                            <h4><a href="shop-details.html">Jungle Excellence Of Nature</a></h4>
                            <div className="price">
                                <h6>$50.00</h6>
                                <del>$80.00</del>
                            </div>
                            <div className="review">
                                <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="collection-card">
                        <div className="offer-card sold-out">
                            <span>Sold Out</span>
                        </div>
                        <div className="collection-img">
                            <img className="img-gluid" src="assets/images/bg/category/h3-collection-07.png" alt="" />
                            <div className="view-dt-btn">
                                <div className="plus-icon">
                                    <i className="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="collection-content text-center">
                            <h4><a href="shop-details.html">Rooibos Pet Food Supple</a></h4>
                            <div className="price">
                                <h6>$75.00</h6>
                                <del>$80.00</del>
                            </div>
                            <div className="review">
                                <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="collection-card">
                        <div className="collection-img">
                            <img className="img-gluid" src="assets/images/bg/category/h3-collection-08.png" alt="" />
                            <div className="view-dt-btn">
                                <div className="plus-icon">
                                    <i className="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul className="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="collection-content text-center">
                            <h4><a href="shop-details.html">Pedigree Natuar Dog Food</a></h4>
                            <div className="price">
                                <h6>$69.00</h6>
                                <del>$89.00</del>
                            </div>
                            <div className="review">
                                <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-md-none d-block pt-30">
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className="h3-view-btn">
                        <a href="shop.html">View All Product<img src="assets/images/icon/haf-button-2.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="h3-offer-area mb-120">
        <div className="container-fluid p-0 overflow-hidden">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="offer-left">
                        <div className="offer-content">
                            <span>50% Off</span>
                            <h2>Ingredients for dogs with packages.</h2>
                            <a className="primary-btn6" href="shop.html">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="offer-right">
                        <div className="slider-btn-wrap">
                            <div className="slider-btn prev-btn-15 mb-40">
                                <i className="bi bi-arrow-up"></i>
                            </div>
                            <div className="slider-btn next-btn-15">
                                <i className="bi bi-arrow-down"></i>
                            </div>
                        </div>
                        <div className="countdown-timer">
                            <ul data-countdown="2023-03-23">
                                <li data-days="00">00</li>
                                <li data-hours="00">00</li>
                                <li data-minutes="00">00</li>
                                <li data-seconds="00">00</li>
                            </ul>
                        </div>
                        <div className="row position-relative">
                            <div className="swiper h3-offer-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="offer-right-card">
                                            <div className="offer-img">
                                                <div className="offer-batch">
                                                    <img className="img-fluid" src="assets/images/bg/h3-offer-card.png" alt="" />
                                                </div>
                                                <img className="img-fluid" src="assets/images/bg/h3-offer-right.png" alt="" />
                                            </div>
                                            <div className="offer-content">
                                                <span>Limited Offer</span>
                                                <h2>Whiskas Dog Food Roaster Chicken</h2>
                                                <div className="price">
                                                    <h6>$25.00</h6>
                                                    <del>$30.00</del>
                                                </div>
                                                <a className="primary-btn6" href="shop.html">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="offer-right-card">
                                            <div className="offer-img">
                                                <div className="offer-batch">
                                                    <img className="img-fluid" src="assets/images/bg/h3-offer-card.png" alt="" />
                                                </div>
                                                <img className="img-fluid" src="assets/images/bg/h3-offer-right2.png" alt="" />
                                            </div>
                                            <div className="offer-content">
                                                <span>Limited Offer</span>
                                                <h2>Jungle Excellence Of Nature</h2>
                                                <div className="price">
                                                    <h6>$25.00</h6>
                                                    <del>$30.00</del>
                                                </div>
                                                <a className="primary-btn6" href="shop.html">Shop Now</a>
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
    
    <div className="essential-items-area mb-120">
        <div className="container">
            <div className="row mb-60">
                <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div className="section-title3">
                        <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Essential Items</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
                    </div>
                    <div className="slider-btn-wrap">
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
                <div className="col-lg-12">
                    <div className="swiper essential-items-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="collection-card">
                                    <div className="offer-card">
                                        <span>Offer</span>
                                    </div>
                                    <div className="collection-img">
                                        <img className="img-gluid" src="assets/images/bg/category/h3-collection-01.png" alt="" />
                                        <div className="view-dt-btn">
                                            <div className="plus-icon">
                                                <i className="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul className="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="collection-content">
                                        <h4><a href="shop-details.html">Whiskas Cat Food Core Tuna</a></h4>
                                        <div className="price">
                                            <h6>$25.00</h6>
                                            <del>$30.00</del>
                                        </div>
                                        <div className="review">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span>(50)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="collection-card">
                                    <div className="collection-img">
                                        <img className="img-gluid" src="assets/images/bg/category/h3-collection-02.png" alt="" />
                                        <div className="view-dt-btn">
                                            <div className="plus-icon">
                                                <i className="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul className="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="collection-content">
                                        <h4><a href="shop-details.html">Friskies Kitten Discoveries.</a></h4>
                                        <div className="price">
                                            <h6>$39.00</h6>
                                            <del>$39.00</del>
                                        </div>
                                        <div className="review">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
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
                                        <img className="img-gluid" src="assets/images/bg/category/h3-collection-03.png" alt="" />
                                        <div className="view-dt-btn">
                                            <div className="plus-icon">
                                                <i className="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul className="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="collection-content">
                                        <h4><a href="shop-details.html">Joules Cat Cotton House.</a></h4>
                                        <div className="price">
                                            <h6>$150.00</h6>
                                            <del>$200.00</del>
                                        </div>
                                        <div className="review">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span>(50)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="collection-card">
                                    <div className="collection-img">
                                        <img className="img-gluid" src="assets/images/bg/category/h3-collection-04.png" alt="" />
                                        <div className="view-dt-btn">
                                            <div className="plus-icon">
                                                <i className="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul className="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="collection-content">
                                        <h4><a href="shop-details.html">Natural Dog Fresh Food.</a></h4>
                                        <div className="price">
                                            <h6>$18.00</h6>
                                            <del>$30.00</del>
                                        </div>
                                        <div className="review">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
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
                                        <img className="img-gluid" src="assets/images/bg/category/h3-collection-07.png" alt="" />
                                        <div className="view-dt-btn">
                                            <div className="plus-icon">
                                                <i className="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul className="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="collection-content">
                                        <h4><a href="shop-details.html">Rooibos Pet Food Supple</a></h4>
                                        <div className="price">
                                            <h6>$75.00</h6>
                                            <del>$80.00</del>
                                        </div>
                                        <div className="review">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
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
    
    <div className="offer-banner-area mb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-6 col-sm-8">
                    <div className="offer-banner-card">
                        <div className="offer-img d-lg-none d-flex justify-content-center">
                            <img src="assets/images/bg/offer-img-31.png" alt="" />
                        </div>
                        <div className="offer-content">
                            <h4><a href="#">All Natural Cat Food Package </a></h4>
                            <div className="price">
                                <h6>$25.00</h6>
                                <del>$30.00</del>
                            </div>
                        </div>
                        <div className="offer-img d-lg-block d-none">
                            <img src="assets/images/bg/offer-img-31.png" alt="" />
                        </div>
                        <div className="offer-right">
                            <div className="offer-tag  d-lg-none d-flex justify-content-center">
                                <h3>50%<span>Off</span></h3>
                            </div>
                            <a className="primary-btn6" href="shop.html">Shop Now</a>
                            <div className="offer-tag d-lg-flex d-none">
                                <h3>50%<br /><span>Off</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="home3-testimonial-area mb-120">
        <div className="container">
            <div className="row mb-60">
                <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div className="section-title3">
                        <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Customers Think About Us</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
                    </div>
                    <div className="slider-btn-wrap">
                        <div className="slider-btn prev-btn-12">
                            <i className="bi bi-arrow-left"></i>
                        </div>
                        <div className="slider-btn next-btn-12">
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xxl-11">
                    <div className="swiper h3-testimonil-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-wrapper">
                                    <div className="review">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>Pellentesque maximus augue orci, quis congue puru
                                        Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.</p>
                                    <div className="author-area">
                                        <div className="author-img">
                                            <img src="assets/images/bg/h3-autho-1.png" alt="" />
                                        </div>
                                        <div className="author-name-deg">
                                            <h3>Sebastian Ethan</h3>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-wrapper">
                                    <div className="review">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>Pellentesque maximus augue orci, quis congue puru
                                        Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.</p>
                                    <div className="author-area">
                                        <div className="author-img">
                                            <img src="assets/images/bg/h3-autho-2.png" alt="" />
                                        </div>
                                        <div className="author-name-deg">
                                            <h3>Lokand Donark</h3>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-wrapper">
                                    <div className="review">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>Pellentesque maximus augue orci, quis congue puru
                                        Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.</p>
                                    <div className="author-area">
                                        <div className="author-img">
                                            <img src="assets/images/bg/h3-autho-3.png" alt="" />
                                        </div>
                                        <div className="author-name-deg">
                                            <h3>Angelina Gushe</h3>
                                            <span>Customer</span>
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
    
    <div className="home3-newsletter-area mb-120">
        <div className="newsletter-img">
            <img className="img-fluid" src="assets/images/bg/h3-newsletter-img.png" alt="" />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="newsletter-wrap">
                        <div className="section-title3 mb-40">
                            <span>Get In Touch</span>
                            <h2>Let’s Connect Our Newsletter</h2>
                        </div>
                        <form>
                            <div className="form-inner">
                                <input type="text" placeholder="Type Your Email" />
                                <button type="submit">Connect</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="home3-blog-area mb-120">
        <div class="container">
            <div class="row mb-60">
                <div class="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="section-title3">
                        <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Our Latest Articles</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
                    </div>
                    <div class="h3-view-btn d-md-flex d-none">
                        <a href="blog-grid.html">View All Blog<img src="assets/images/icon/haf-button-2.svg" alt="" /></a>
                    </div>
                </div>
            </div>
            <div class="row g-4 justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="blog-card3">
                        <div class="blog-img">
                            <img class="img-fluid" src="assets/images/blog/blog7.png" alt="" />
                        </div>
                        <div class="bolg-content">
                            <div class="cetagoty">
                                <a href="blog-grid.html">Dog bording</a>
                            </div>
                            <div class="blog-meta">
                                <ul>
                                    <li><a href="blog-grid.html">Angunel John</a></li>
                                    <li><a href="blog-grid.html">August 13, 2022</a></li>
                                </ul>
                            </div>
                            <h4><a href="blog-details.html">lobortis pharetra In necat boi risus osan that one far fox.</a></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="blog-card3">
                        <div class="blog-img">
                            <img class="img-fluid" src="assets/images/blog/blog8.png" alt="" />
                        </div>
                        <div class="bolg-content">
                            <div class="cetagoty">
                                <a href="blog-grid.html">Dog bording</a>
                            </div>
                            <div class="blog-meta">
                                <ul>
                                    <li><a href="blog-grid.html">Angunel John</a></li>
                                    <li><a href="blog-grid.html">August 13, 2022</a></li>
                                </ul>
                            </div>
                            <h4><a href="blog-details.html">Vestibulum eget risus ut est Proina ullamcorper aliquet.</a></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="blog-card3">
                        <div class="blog-img">
                            <img class="img-fluid" src="assets/images/blog/blog9.png" alt="" />
                        </div>
                        <div class="bolg-content">
                            <div class="cetagoty">
                                <a href="blog-grid.html">Dog bording</a>
                            </div>
                            <div class="blog-meta">
                                <ul>
                                    <li><a href="blog-grid.html">Angunel John</a></li>
                                    <li><a href="blog-grid.html">August 13, 2022</a></li>
                                </ul>
                            </div>
                            <h4><a href="blog-details.html">Mauris semper mauris eget aliquet dictum diam mauris.</a></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-md-none d-block pt-30">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="h3-view-btn">
                        <a href="shop.html">View All Product<img src="assets/images/icon/haf-button-2.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
      </div> */}
    </>
  );}

export default Home;