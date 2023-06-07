import { Link } from "react-router-dom";
import product_discription2 from "./assets/images/bg/h3-category-2.png";
import { useEffect, useState } from "react";
import 'swiper/css/navigation';
import { encode } from "base-64";
import { useDispatch } from "react-redux";
import React, { useRef } from "react";
import { Pagination, Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { UPDATE_SEARCH_CATEGORIES, UPDATE_SEARCH_PRODUCT, UPDATE_PRODUCT_REFRESH } from './Redux/Actions/action'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/swiper.min.css';
// import 'swiper/css';

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

function ProductsRow(props) {
  const products = props.products;
  const [startIndex, setStartIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(6);
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCategories();
  }, [page]);
  let swiperRef = useRef(null);


  const handlePrevSlide = () => {
    console.log(swiperRef)

    if (swiperRef && swiperRef.swiper) {
      swiperRef.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef && swiperRef.swiper) {
      swiperRef.swiper.slideNext();
    }
  };
  const fetchCategories = () => {
    setLoading(true);
    let url = `http://apis.rubypets.co.uk/user/categories/list`;
    console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Categories has been fetched Succesfully") {
          setCategories(data?.data?.categories);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const catValue = (id) => {
    console.log(id)
    dispatch({
      type: UPDATE_SEARCH_CATEGORIES, payload: id
    })
    dispatch({
      type: UPDATE_SEARCH_PRODUCT, payload: ''
    })

  }

  const listProducts = categories?.map((product) => (
    <div className="category-card col-lg-2 col-md-4 col-sm-6 mb-5">
      <Link to={`/products`} onClick={() => catValue(product.id)} className="category-card-inner">
        <div className="category-card-front">
          <div className="category-icon">
            {/* <img width={126} height={126} alt="" /> */}
          </div>
          <div className="content">
            <h4>{product.name}</h4>
          </div>
        </div>
        <div className="category-card-back">
          <img width={126} height={126} src={product.imageName} alt="" />
        </div>
      </Link>
    </div>
  ));
  const swiperParams = {
    spaceBetween: 30,
  };
  return (
    <>
      <div className="row mb-60">
        <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div class="section-title3">
            <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Browse By Categories</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
          </div>

        </div>
      </div>
      {categories?.length <= 6 &&
        <Swiper
          slidesPerView={6}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          speed={2000}
          // navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination, Autoplay]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {loading ? (
            <div
              className="row text-align-center"
              style={{ display: "block", textAlign: "center" }}
            >
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : categories?.length > 0 ? (
            categories && categories?.map((product) => (
              <SwiperSlide style={{ background: 'none' }}>

                <div className="category-card">
                  <Link to={`/products`} onClick={() => catValue(product.id)} className="category-card-inner">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="category-card-front">
                      <div style={{ width: '70px', height: '70px' }} className="category-icon">
                        <img width={70} height={70} src={"http://apis.rubypets.co.uk/assets/images/categories/" + product.frontImageName} alt="" />
                      </div>
                      <div className="content">
                        <h4>{product.name}</h4>
                      </div>
                    </div>
                    <div className="category-card-back">
                      <img style={{ width: '120px', height: '126px' }} width={40} height={40} src={product.imageName} alt="" />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))
          ) : (<div className="row" style={{ display: "block", textAlign: "center" }}>
            <h2>No Categories found</h2>
          </div>)}
        </Swiper>
      }
      {categories?.length < 6 &&
        <Slider className="places-carousel " dots={true} draggable={true} speed={2000} infinite={true} slidesToScroll={1} arrows={true} slidesToShow={6} responsive={responsive}>
          {loading ? (
            <div
              className="row text-align-center"
              style={{ display: "block", textAlign: "center" }}
            >
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : categories?.length > 0 ? (categories?.length > 6 &&
            categories && categories?.map((product) => (


              <div className="category-card">
                <Link to={`/products`} onClick={() => catValue(product.id)} className="category-card-inner">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="category-card-front">
                    <div style={{ width: '70px', height: '70px' }} className="category-icon">
                      <img width={70} height={70} src={"http://apis.rubypets.co.uk/assets/images/categories/" + product.frontImageName} alt="" />
                    </div>
                    <div className="content">
                      <h4>{product.name}</h4>
                    </div>
                  </div>
                  <div className="category-card-back">
                    <img style={{ width: '120px', height: '126px' }} width={40} height={40} src={product.imageName} alt="" />
                  </div>
                </Link>
              </div>

            ))
          ) : (<div className="row" style={{ display: "block", textAlign: "center" }}>
            <h2>No Categories found</h2>
          </div>)}
        </Slider>
      }

      {/* {loading ? (
        <div
          className="row text-align-center"
          style={{ display: "block", textAlign: "center" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : categories?.length > 0 ? (
        // categories
        <div className="maincategory">{listProducts}</div>
      ) : (
        <div className="row" style={{ display: "block", textAlign: "center" }}>
          <h2>No Categories found</h2>
        </div>
      )} */}
    </>
  );
}

export default ProductsRow;
