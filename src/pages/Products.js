import React, { useEffect } from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import img1 from "../assets/images/icon/Icon-cart3.svg";
import fav3 from "../assets/images/icon/Icon-favorites3.svg";
import img2 from "../assets/images/bg/category/h3-collection-02.png";
import { Pagination } from "@mui/material";

import { url } from "../environment";
function valuetext(value) {
  return `${value}°C`;
}

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#f46f30",
  height: 6,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));
const minDistance = 10;

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

const Product = () => {
  const navigate = useNavigate();
  const [IsLoading, setIsLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [AllPages, setAllpages] = React.useState(0);
  const [value1, setValue1] = React.useState([20, 397]);


  useEffect(() => {
    GetAllProducts();
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
          setAllpages(response?.data?.totalCount);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <>
      <DiscountHeader minimum_limit={80} />
      <Header navigate={navigate} />
      <div className="inner-page-banner container-fluid" style={{ marginBottom: "120px", padding: '120px 0px' }}>
        <div className="breadcrumb-vec-btm">
          <img
            className="img-fluid"
            src="assets/images/bg/inner-banner-btm-vec.png"
            alt=""
          />
        </div>
        <div className="container ">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-6 align-items-center">
              <div className="banner-content">
                <h1>Shop</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img d-lg-block d-none">
                <div className="banner-img-bg">
                  <img
                    className="img-fluid"
                    src="https://demo.egenslab.com/html/scooby/preview/assets/images/bg/inner-banner-img.png"
                    alt=""
                  />
                </div>
                <img
                  className="img-fluid"
                  // src="assets/images/bg/inner-banner-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-page  mb-120">
        <div className="container">

          <div className="row">

            <div className="col-lg-3">
              <div className="shop-sidebar">
                <div className="shop-widget">
                  <h5 className="shop-widget-title">Price Range</h5>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-12 mt-4">
                        <AirbnbSlider
                          slots={{ thumb: AirbnbThumbComponent }}
                          onChange={handleChange1}
                          min={100}
                          max={500}
                          getAriaLabel={(index) =>
                            index === 0 ? "Minimum price" : "Maximum price"
                          }
                          defaultValue={value1}
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 mt-4"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="tric">{value1[0]}</span>
                      <span className="tric">{value1[1]}</span>
                    </div>

                    {/* <div className="col-12">
                      <p>Min Price: {value1[0]}</p>
                      <p>Max Max: {value1[1]}</p>
                    </div> */}
                  </div>
                </div>
                <div class="shop-widget">
                  <div class="check-box-item">
                    <h5 class="shop-widget-title">Category</h5>
                    <div class="checkbox-container">
                      <label class="containerss">
                        Food Toppers
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Milk Replacers
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Canned Food
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Veterinary Authorized Diets
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Bones & Rawhide
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row mb-50">
                <div className="col-lg-12">
                  <div className="multiselect-bar">
                    <h6>shop</h6>
                    <div className="multiselect-area">
                      <div className="single-select">
                        <span>Show</span>
                        <select
                          className="defult-select-drowpown"
                          id="color-dropdown"
                        >
                          <option selected value="0">
                            5
                          </option>
                          <option value="1">10</option>

                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 justify-content-center">
                {IsLoading ? (
                  <div
                    className="row text-align-center"
                    style={{ display: "block", textAlign: "center" }}
                  >
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : products.length > 0 ? (
                  products &&
                  products?.map((item) => {
                    return (
                      <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="collection-card">
                          {/* <div className="offer-card">
                            <span>Offer</span>
                          </div> */}
                          <div className="collection-img">
                            <img
                              width={200}
                              height={150}
                              className="img-gluid"
                              src={item?.imageName}
                              alt=""
                            />
                            <div className="view-dt-btn">
                              <div className="plus-icon">
                                <i className="bi bi-plus"></i>
                              </div>
                              <a
                                onClick={() =>
                                  navigate(
                                    `/productsDetails/${encodeURIComponent(
                                      JSON.stringify(item)
                                    )}`
                                  )
                                }
                              >
                                View Details
                              </a>
                            </div>
                            <ul className="cart-icon-list">
                              <li>
                                <a href="#">
                                  <img src={img1} alt="" />
                                </a>
                              </li>
                              {/* <li>
                                <a href="#">
                                  <img src={fav3} alt="" />
                                </a>
                              </li> */}
                            </ul>
                          </div>
                          <div className="collection-content text-center">
                            <h4>
                              <a
                                onClick={() =>
                                  navigate(
                                    `/productsDetails/${encodeURIComponent(
                                      JSON.stringify(item)
                                    )}`
                                  )
                                }
                              >
                                {item?.name}
                              </a>
                            </h4>
                            <div className="price">
                              <h6>${item.dropshipPrice}</h6>
                              {/* <del>${item.rrp}</del> */}
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h2>No Products found</h2>
                )}
              </div>
              <div className="row pt-70">
                <div className="col-lg-12 d-flex justify-content-center">
                  <div className="paginations-area">
                    <Pagination
                      count={AllPages}
                      variant="outlined"
                      shape="rounded"
                      onChange={(e, Value) => {
                        GetAllProducts(e, Value);
                      }}
                    />
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
export default Product;
