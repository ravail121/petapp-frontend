import Header from "./shared/Header";
import ProductsRow from "./ProductsRow";
import DiscountHeader from "./shared/DiscountHeader";

import banner from './assets/images/bg/h3-banner-img.png';

const Products = [{name: 'cat supplies'}, {name: 'Hair color'}, {name: 'Baloons'}, {name: 'Fruits'}]
function Home() {
  return (
    <>
    <DiscountHeader minimum_limit={80} />
    <Header />

    <div class="hero3 mb-90">
      <div class="background-text">
        <h2 class="marquee_text"><span>Get exciting Discount</span> Up To 50%</h2>
      </div>
      <div class="swiper-slide hero-wrapper">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 banner-content">
              <h1>Best Store For Your Shooping.</h1>
              <div class="btn-group">
                <a class="primary-btn5 btn-md" href="shop.html">Shop Now</a>
              </div>
            </div>
            <div class="col-lg-6 d-flex justify-content-end">
              <div class="hero-img">
                <img class="img-fluid banner-imgas" src={banner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home3-categoty-area pt-120 mb-120">
      <div class="container">
        
        <div className="d-flex justify-content-center">
          <ProductsRow products={Products} index={1} />
        </div>
      </div>
    </div>

    {/* <div class="home3-collection-area mb-120">
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
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                        <div class="offer-card">
                            <span>Offer</span>
                        </div>
                        <div class="collection-img">
                            <img class="img-gluid" src="assets/images/bg/category/h3-collection-01.png" alt="" />
                            <div class="view-dt-btn">
                                <div class="plus-icon">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div class="collection-content text-center">
                            <h4><a href="shop-details.html">Whiskas Cat Food Core Tuna</a></h4>
                            <div class="price">
                                <h6>$25.00</h6>
                                <del>$30.00</del>
                            </div>
                            <div class="review">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                        <div class="collection-img">
                            <img class="img-gluid" src="assets/images/bg/category/h3-collection-02.png" alt="" />
                            <div class="view-dt-btn">
                                <div class="plus-icon">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div class="collection-content text-center">
                            <h4><a href="shop-details.html">Friskies Kitten Discoveries.</a></h4>
                            <div class="price">
                                <h6>$39.00</h6>
                                <del>$39.00</del>
                            </div>
                            <div class="review">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                        <div class="offer-card sale">
                            <span>Hot Sale</span>
                        </div>
                        <div class="collection-img">
                            <img class="img-gluid" src="assets/images/bg/category/h3-collection-03.png" alt="" />
                            <div class="view-dt-btn">
                                <div class="plus-icon">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div class="collection-content text-center">
                            <h4><a href="shop-details.html">Joules Cat Cotton House.</a></h4>
                            <div class="price">
                                <h6>$150.00</h6>
                                <del>$200.00</del>
                            </div>
                            <div class="review">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                        <div class="collection-img">
                            <img class="img-gluid" src="assets/images/bg/category/h3-collection-04.png" alt="" />
                            <div class="view-dt-btn">
                                <div class="plus-icon">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div class="collection-content text-center">
                            <h4><a href="shop-details.html">Natural Dog Fresh Food.</a></h4>
                            <div class="price">
                                <h6>$18.00</h6>
                                <del>$30.00</del>
                            </div>
                            <div class="review">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                        <div class="offer-card">
                            <span>Offer</span>
                        </div>
                        <div class="collection-img">
                            <img class="img-gluid" src="assets/images/bg/category/h3-collection-05.png" alt="" />
                            <div class="view-dt-btn">
                                <div class="plus-icon">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div class="collection-content text-center">
                            <h4><a href="shop-details.html">Ferplast Cat Journey Bag.</a></h4>
                            <div class="price">
                                <h6>$250.00</h6>
                                <del>$300.00</del>
                            </div>
                            <div class="review">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                        <div class="collection-img">
                            <img class="img-gluid" src="assets/images/bg/category/h3-collection-06.png" alt="" />
                            <div class="view-dt-btn">
                                <div class="plus-icon">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div class="collection-content text-center">
                            <h4><a href="shop-details.html">Jungle Excellence Of Nature</a></h4>
                            <div class="price">
                                <h6>$50.00</h6>
                                <del>$80.00</del>
                            </div>
                            <div class="review">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                        <div class="offer-card sold-out">
                            <span>Sold Out</span>
                        </div>
                        <div class="collection-img">
                            <img class="img-gluid" src="assets/images/bg/category/h3-collection-07.png" alt="" />
                            <div class="view-dt-btn">
                                <div class="plus-icon">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div class="collection-content text-center">
                            <h4><a href="shop-details.html">Rooibos Pet Food Supple</a></h4>
                            <div class="price">
                                <h6>$75.00</h6>
                                <del>$80.00</del>
                            </div>
                            <div class="review">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="collection-card">
                        <div class="collection-img">
                            <img class="img-gluid" src="assets/images/bg/category/h3-collection-08.png" alt="" />
                            <div class="view-dt-btn">
                                <div class="plus-icon">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                                <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div class="collection-content text-center">
                            <h4><a href="shop-details.html">Pedigree Natuar Dog Food</a></h4>
                            <div class="price">
                                <h6>$69.00</h6>
                                <del>$89.00</del>
                            </div>
                            <div class="review">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                </ul>
                                <span>(50)</span>
                            </div>
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
    </div>
    
    <div class="h3-offer-area mb-120">
        <div class="container-fluid p-0 overflow-hidden">
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="offer-left">
                        <div class="offer-content">
                            <span>50% Off</span>
                            <h2>Ingredients for dogs with packages.</h2>
                            <a class="primary-btn6" href="shop.html">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="offer-right">
                        <div class="slider-btn-wrap">
                            <div class="slider-btn prev-btn-15 mb-40">
                                <i class="bi bi-arrow-up"></i>
                            </div>
                            <div class="slider-btn next-btn-15">
                                <i class="bi bi-arrow-down"></i>
                            </div>
                        </div>
                        <div class="countdown-timer">
                            <ul data-countdown="2023-03-23">
                                <li data-days="00">00</li>
                                <li data-hours="00">00</li>
                                <li data-minutes="00">00</li>
                                <li data-seconds="00">00</li>
                            </ul>
                        </div>
                        <div class="row position-relative">
                            <div class="swiper h3-offer-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="offer-right-card">
                                            <div class="offer-img">
                                                <div class="offer-batch">
                                                    <img class="img-fluid" src="assets/images/bg/h3-offer-card.png" alt="" />
                                                </div>
                                                <img class="img-fluid" src="assets/images/bg/h3-offer-right.png" alt="" />
                                            </div>
                                            <div class="offer-content">
                                                <span>Limited Offer</span>
                                                <h2>Whiskas Dog Food Roaster Chicken</h2>
                                                <div class="price">
                                                    <h6>$25.00</h6>
                                                    <del>$30.00</del>
                                                </div>
                                                <a class="primary-btn6" href="shop.html">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="offer-right-card">
                                            <div class="offer-img">
                                                <div class="offer-batch">
                                                    <img class="img-fluid" src="assets/images/bg/h3-offer-card.png" alt="" />
                                                </div>
                                                <img class="img-fluid" src="assets/images/bg/h3-offer-right2.png" alt="" />
                                            </div>
                                            <div class="offer-content">
                                                <span>Limited Offer</span>
                                                <h2>Jungle Excellence Of Nature</h2>
                                                <div class="price">
                                                    <h6>$25.00</h6>
                                                    <del>$30.00</del>
                                                </div>
                                                <a class="primary-btn6" href="shop.html">Shop Now</a>
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
    
    <div class="essential-items-area mb-120">
        <div class="container">
            <div class="row mb-60">
                <div class="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="section-title3">
                        <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Essential Items</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
                    </div>
                    <div class="slider-btn-wrap">
                        <div class="slider-btn prev-btn-12">
                            <i class="bi bi-arrow-left"></i>
                        </div>
                        <div class="slider-btn next-btn-12">
                            <i class="bi bi-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="swiper essential-items-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="collection-card">
                                    <div class="offer-card">
                                        <span>Offer</span>
                                    </div>
                                    <div class="collection-img">
                                        <img class="img-gluid" src="assets/images/bg/category/h3-collection-01.png" alt="" />
                                        <div class="view-dt-btn">
                                            <div class="plus-icon">
                                                <i class="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul class="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div class="collection-content">
                                        <h4><a href="shop-details.html">Whiskas Cat Food Core Tuna</a></h4>
                                        <div class="price">
                                            <h6>$25.00</h6>
                                            <del>$30.00</del>
                                        </div>
                                        <div class="review">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span>(50)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="collection-card">
                                    <div class="collection-img">
                                        <img class="img-gluid" src="assets/images/bg/category/h3-collection-02.png" alt="" />
                                        <div class="view-dt-btn">
                                            <div class="plus-icon">
                                                <i class="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul class="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div class="collection-content">
                                        <h4><a href="shop-details.html">Friskies Kitten Discoveries.</a></h4>
                                        <div class="price">
                                            <h6>$39.00</h6>
                                            <del>$39.00</del>
                                        </div>
                                        <div class="review">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span>(50)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="collection-card">
                                    <div class="offer-card sale">
                                        <span>Hot Sale</span>
                                    </div>
                                    <div class="collection-img">
                                        <img class="img-gluid" src="assets/images/bg/category/h3-collection-03.png" alt="" />
                                        <div class="view-dt-btn">
                                            <div class="plus-icon">
                                                <i class="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul class="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div class="collection-content">
                                        <h4><a href="shop-details.html">Joules Cat Cotton House.</a></h4>
                                        <div class="price">
                                            <h6>$150.00</h6>
                                            <del>$200.00</del>
                                        </div>
                                        <div class="review">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span>(50)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="collection-card">
                                    <div class="collection-img">
                                        <img class="img-gluid" src="assets/images/bg/category/h3-collection-04.png" alt="" />
                                        <div class="view-dt-btn">
                                            <div class="plus-icon">
                                                <i class="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul class="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div class="collection-content">
                                        <h4><a href="shop-details.html">Natural Dog Fresh Food.</a></h4>
                                        <div class="price">
                                            <h6>$18.00</h6>
                                            <del>$30.00</del>
                                        </div>
                                        <div class="review">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span>(50)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="collection-card">
                                    <div class="offer-card sold-out">
                                        <span>Sold Out</span>
                                    </div>
                                    <div class="collection-img">
                                        <img class="img-gluid" src="assets/images/bg/category/h3-collection-07.png" alt="" />
                                        <div class="view-dt-btn">
                                            <div class="plus-icon">
                                                <i class="bi bi-plus"></i>
                                            </div>
                                            <a href="shop-details.html">View Details</a>
                                        </div>
                                        <ul class="cart-icon-list">
                                            <li><a href="cart.html"><img src="assets/images/icon/Icon-cart3.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon/Icon-favorites3.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div class="collection-content">
                                        <h4><a href="shop-details.html">Rooibos Pet Food Supple</a></h4>
                                        <div class="price">
                                            <h6>$75.00</h6>
                                            <del>$80.00</del>
                                        </div>
                                        <div class="review">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
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
    
    <div class="offer-banner-area mb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-6 col-sm-8">
                    <div class="offer-banner-card">
                        <div class="offer-img d-lg-none d-flex justify-content-center">
                            <img src="assets/images/bg/offer-img-31.png" alt="" />
                        </div>
                        <div class="offer-content">
                            <h4><a href="#">All Natural Cat Food Package </a></h4>
                            <div class="price">
                                <h6>$25.00</h6>
                                <del>$30.00</del>
                            </div>
                        </div>
                        <div class="offer-img d-lg-block d-none">
                            <img src="assets/images/bg/offer-img-31.png" alt="" />
                        </div>
                        <div class="offer-right">
                            <div class="offer-tag  d-lg-none d-flex justify-content-center">
                                <h3>50%<span>Off</span></h3>
                            </div>
                            <a class="primary-btn6" href="shop.html">Shop Now</a>
                            <div class="offer-tag d-lg-flex d-none">
                                <h3>50%<br /><span>Off</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="home3-testimonial-area mb-120">
        <div class="container">
            <div class="row mb-60">
                <div class="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="section-title3">
                        <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Customers Think About Us</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
                    </div>
                    <div class="slider-btn-wrap">
                        <div class="slider-btn prev-btn-12">
                            <i class="bi bi-arrow-left"></i>
                        </div>
                        <div class="slider-btn next-btn-12">
                            <i class="bi bi-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xxl-11">
                    <div class="swiper h3-testimonil-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="testimonial-wrapper">
                                    <div class="review">
                                        <ul>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>Pellentesque maximus augue orci, quis congue puru
                                        Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.</p>
                                    <div class="author-area">
                                        <div class="author-img">
                                            <img src="assets/images/bg/h3-autho-1.png" alt="" />
                                        </div>
                                        <div class="author-name-deg">
                                            <h3>Sebastian Ethan</h3>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testimonial-wrapper">
                                    <div class="review">
                                        <ul>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>Pellentesque maximus augue orci, quis congue puru
                                        Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.</p>
                                    <div class="author-area">
                                        <div class="author-img">
                                            <img src="assets/images/bg/h3-autho-2.png" alt="" />
                                        </div>
                                        <div class="author-name-deg">
                                            <h3>Lokand Donark</h3>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testimonial-wrapper">
                                    <div class="review">
                                        <ul>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>Pellentesque maximus augue orci, quis congue puru
                                        Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.</p>
                                    <div class="author-area">
                                        <div class="author-img">
                                            <img src="assets/images/bg/h3-autho-3.png" alt="" />
                                        </div>
                                        <div class="author-name-deg">
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