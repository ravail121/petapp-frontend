import Header from "./shared/Header";
import { useEffect, useState } from 'react'
import ProductsRow from "./ProductsRow";
import DiscountHeader from "./shared/DiscountHeader";
import product_item1 from "./assets/images/icon/dog.svg";
import iconCat3 from "./assets/images/icon/Icon-cart3.svg";
import product_item2 from "./assets/images/icon/cat.svg";
import product_item3 from "./assets/images/icon/fish.svg";
import { url } from "./environment";
import { useDispatch } from 'react-redux';
import { message } from 'antd';

import { UPDATE_CART_COUNT, UPDATE_PRODUCT_REFRESH } from './Redux/Actions/action';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product_item4 from "./assets/images/icon/bird.svg";
import { Link } from "react-router-dom";
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


function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [FromEmail, setFromEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [IsLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const [autoplay, setAutoplay] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();


  const handleMouseEnter = () => {
    console.log('mouse Enter')
    setAutoplay(true);
  };

  const handleMouseLeave = () => {
    setAutoplay(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    GetAllProducts();
    checkDefaultCounter()
  }, []);


  const GetAllProducts = (e, pageNumber) => {
    setIsLoading(true);
    fetch(`${url}/user/products/list`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        "page": 1,
        "limit": 10,
      })
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "Products fetched Successfully") {
          setProducts(response?.data?.products);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (FromEmail === '') {
      setErrorMessage('Email cannot be empty');
    } else if (!isValidEmail(FromEmail)) {
      setErrorMessage('Invalid email format');
    } else {
      // Perform the desired action when the email is valid
      console.log('Email:', FromEmail);
      // Clear the input and error message
      addQuery()

    }
  };

  const isValidEmail = (value) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };


  const addQuery = () => {

    fetch(`${url}/user/queries/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        "from": FromEmail,
        "message": Message,
      })
    })
      .then((response) => response.json())
      .then((response) => {

        setFromEmail('');
        setErrorMessage('');

      })
      .catch((err) => {
        console.log(err);
      });
  };


  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Add to cart Successfully Added',
    });
  };

  const addToCart = (decodedObj) => {
    const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
    const hasDuplicate = storedArray?.find((obj) => obj.id === decodedObj?.id);
    console.log(hasDuplicate)
    if (!hasDuplicate) {
      decodedObj["quantity"] = 1;
      storedArray.push(decodedObj);
      localStorage.setItem("myArray", JSON.stringify(storedArray));
      console.log(storedArray)
      success()

      checkDefaultCounter()

    } else {

      hasDuplicate["quantity"] = 1 + hasDuplicate["quantity"];
      localStorage.setItem("myArray", JSON.stringify(storedArray));
      success()

      checkDefaultCounter()


    }
  };

  const checkDefaultCounter = () => {
    var totalQuantity = 0;

    let Data = JSON.parse(localStorage.getItem("myArray"))
    for (var i = 0; i < Data?.length; i++) {

      totalQuantity += Data[i].quantity;

      // console.log(totalQuantity)
    }
    localStorage.setItem("myArray", JSON.stringify(Data));
    dispatch({ type: UPDATE_CART_COUNT, payload: totalQuantity });
  }

  return (
    <>
      {contextHolder}

      <DiscountHeader minimum_limit={80} />
      <Header navigate={navigate} />

      <div className="hero3 " style={{ marginBottom: '50px' }}>
        {
        }
        <div className="swiper-slide hero-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 banner-content">
                <h1>Best Store For Your Shopping.</h1>
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

      <div className="home3-categoty-area  mb-120">
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
                <Link to={`/products`} onClick={() => dispatch({
                  type: UPDATE_PRODUCT_REFRESH, payload: 1
                })}>View All Product<img src="assets/images/icon/haf-button-2.svg" alt="" /></Link>
              </div>
            </div>
          </div>
          <div class="row g-4 justify-content-center">
            <Slider className="places-carousel " dots={true} draggable={true} speed={2000} infinite={true} slidesToScroll={1} arrows={false} slidesToShow={4} centerMode={false} centerPadding="50px" autoplay={true} responsive={responsive}>
              {products?.map((item, index) => {
                return (
                  <div class="collection-card " style={{ marginRight: '20px' }}>
                    <div class="offer-card">
                      { }
                    </div>
                    <div class="collection-img">
                      <img class="img-fluid" width={200}
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
                        <li onClick={() => addToCart(item)}><a href="#"><img src={iconCat3} alt="" /></a></li>
                        { }
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
                        { }
                      </div>
                      {
                      }
                    </div>
                  </div>
                )
              })}
            </Slider>



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
                    <input type="text" placeholder="Type Your Email" onChange={(e) => setFromEmail(e.target.value)} />
                  </div>
                  {errorMessage && <p style={{ color: 'red', }}>{errorMessage}</p>}

                  <div class="form-inner mt-2">
                    <input type="text" placeholder="Type Your Comment" onChange={(e) => setMessage(e.target.value)} />

                  </div>
                  <div class="form-inner mt-2" style={{ background: 'none !important' }}>
                    <button onClick={handleAdd}>Connect</button>
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
