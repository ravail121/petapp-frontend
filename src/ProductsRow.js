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
import { url } from "./environment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/swiper.min.css';

const responsive = [
  {
    breakpoint: 3000,
    settings: {
      slidesToShow: 6,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 2800,
    settings: {
      slidesToShow: 6,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 2600,
    settings: {
      slidesToShow: 5,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 2400,
    settings: {
      slidesToShow: 5,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 2200,
    settings: {
      slidesToShow: 5,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 2000,
    settings: {
      slidesToShow: 5,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 1800,
    settings: {
      slidesToShow: 5,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 1600,
    settings: {
      slidesToShow: 5,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 5,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,

      dots: true,

      autoplaySpeed: 1000,
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      speed: 2000,
      slidesToScroll: 1,
      infinite: true,

      autoplay: true,
      dots: true,
      autoplaySpeed: 1000,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,

      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2,
      infinite: true,
      speed: 2000,
      dots: true,
      autoplay: true,

    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      autoplay: true,
      infinite: true,
      speed: 2000,
      slidesToScroll: 1
    }
  }
]

function ProductsRow(props) {
  const products = props.products;
  const [startIndex, setStartIndex] = useState(0);
  const [SliderVisible, setSliderVisible] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(6);
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCategories();


    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(6);
        setSliderVisible(false)

      } else if (window.innerWidth >= 992) {
        setSlidesPerView(6);
        setSliderVisible(false)

      } else if (window.innerWidth >= 768) {
        setSliderVisible(false)

        setSlidesPerView(3);
      } else {
        setSliderVisible(true)
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [page]);
  let swiperRef = useRef(null);


  const handlePrevSlide = () => {


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
    let urlnew = `${url}/user/categories/list`;
    fetch(urlnew, {
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

      });
  };

  const catValue = (id) => {

    dispatch({
      type: UPDATE_SEARCH_CATEGORIES, payload: id
    })
    dispatch({
      type: UPDATE_SEARCH_PRODUCT, payload: ''
    })

  }



  return (
    <>
      <div className="row mb-60">
        <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div class="section-title3">
            <h2><img src="assets/images/icon/h3-sec-tt-vect-left.svg" alt="" /><span>Browse By Categories</span><img src="assets/images/icon/h3-sec-tt-vect-right.svg" alt="" /></h2>
          </div>

        </div>
      </div>
      {loading && (
        <div
          className="row text-align-center"
          style={{ display: "block", textAlign: "center" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!SliderVisible && categories?.length < 5 &&

        <Swiper
          slidesPerView={slidesPerView}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          speed={2000}
          modules={[Pagination, Autoplay]}

        >
          {categories?.length > 0 ? (


            categories && categories?.map((product) => (
              <SwiperSlide style={{ background: 'none' }}>

                <div className="category-card col-lg-2 col-md-4 col-sm-12">
                  <Link to={`/products`} onClick={() => catValue(product.id)} className="category-card-inner">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="category-card-front">
                      <div style={{ width: '70px', height: '70px' }} className="category-icon">
                        <img width={70} height={70} src={product.frontImageName} alt="" />
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
            {!loading && <h2>No Categories found</h2>}

          </div>)}
        </Swiper>
      }
      {(SliderVisible === true && (categories?.length >= 5)) &&

        <Slider className="places-carousel" dots={true} speed={2000} slidesToScroll={1} slidesToShow={5} responsive={responsive}>
          {categories?.length > 0 ? (
            categories?.length >= 5 &&

            categories && categories?.slice(0, categories?.length).map((product) => (
              <div className="" style={{ textAlign: 'center' }}>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                  <div className="category-card">
                    <Link to={`/products`} onClick={() => catValue(product.id)} className="category-card-inner">
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="category-card-front">
                        <div style={{ width: '70px', height: '70px' }} className="category-icon">
                          <img width={70} height={70} src={product.frontImageName} alt="" />
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
                </div>

              </div>
            ))
          ) : (<div className="row" style={{ display: "block", textAlign: "center" }}>
            {!loading && <h2>No Categories found</h2>}

          </div>)}
        </Slider>
      }

      {(SliderVisible === false && (categories?.length >= 5)) &&

        <Slider className="places-carousel" dots={true} speed={2000} slidesToScroll={1} slidesToShow={5} autoplaySpeed={2000} responsive={responsive}>
          {categories?.length > 0 ? (
            categories?.length >= 5 &&

            categories && categories?.slice(0, categories?.length).map((product) => (
              <div className="" style={{ textAlign: 'center' }}>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                  <div className="category-card">
                    <Link to={`/products`} onClick={() => catValue(product.id)} className="category-card-inner">
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="category-card-front">
                        <div style={{ width: '70px', height: '70px' }} className="category-icon">
                          <img width={70} height={70} src={product.frontImageName} alt="" />
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
                </div>

              </div>
            ))
          ) : (<div className="row" style={{ display: "block", textAlign: "center" }}>
            {!loading && <h2>No Categories found</h2>}
          </div>)}
        </Slider>
      }

      {
      }
    </>
  );
}

export default ProductsRow;
