import React, { useEffect, useRef } from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CART_COUNT, UPDATE_PRODUCT_REFRESH, UPDATE_SEARCH_PRODUCT } from '../Redux/Actions/action';
import { styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import img1 from "../assets/images/icon/Icon-cart3.svg";
import { Pagination } from "@mui/material";
import { url } from "../environment";
import { useParams } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core';


import { message } from 'antd';

import { decode, encode } from "base-64";
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
  const [SelecedCat, setSelecedCat] = React.useState('');
  const [Activepage, setActivepage] = React.useState(1);
  const [sliderValues, setSliderValues] = React.useState([0, 500]);

  const [Counts, setCounts] = React.useState(0);
  const [Name, setName] = React.useState('');
  const [AllPages, setAllpages] = React.useState(0);
  const [PageData, setPageData] = React.useState(10);
  const [Refresh, setRefresh] = React.useState(0);
  const [limits, setLimits] = React.useState(10);

  const [value1, setValue1] = React.useState([0, 500]);
  let SearchValue = useSelector((state) => state.searchValue.value);
  let SearchCat = useSelector((state) => state.searchCat.value);
  let RefreshProduct = useSelector((state) => state.productRefresh.productRefresh);

  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  let value = 0
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchCategories()





    checkDefaultCounter()
  }, [SearchValue, SearchCat]);


  const GetAllProducts = (event, pageNumber, perpage) => {
    // debugger
    value++
    setIsLoading(true);

    window.scrollTo(0, 0);
    let filteredItems = [];

    setLimits(perpage)
    let Docline = categories?.map((item) => {
      if (item.checked) {
        return item.id
      }
    })

    if (RefreshProduct === 1) {
      let Array = []
      event?.map((item) => {
        Array.push({
          name: item.name,
          checked: true,
          id: item.id
        })
      })
      setCategories(Array);
    }
    if (event === 'Apply') {
      filteredItems = Docline.filter((item) => typeof item !== 'undefined');
    }
    else {
      filteredItems = []
    }

    setIsLoading(true);
    fetch(`${url}/user/products/list`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        page: pageNumber ? pageNumber : 1,
        limit: perpage ? Number(perpage) : PageData,
        search: SearchValue,
        // categoryId: SearchCat,
        categories: filteredItems?.length > 0 ? filteredItems : SearchCat ? [SearchCat] : [],
        price: sliderValues,
      })
    })
      .then((response) => response.json())
      .then((response) => {

        value--
        if (response.statusCode === 200) {
          setProducts(response?.data?.products);
          // fetchCategories()
          dispatch({
            type: UPDATE_PRODUCT_REFRESH, payload: 0
          })
          setAllpages(response?.data?.totalCount);
          checkLoading()


        }
      })
      .catch((err) => {

      });
  };

  const checkLoading = () => {
    if (value === 0) {
      setIsLoading(false);
    }
  }

  const resetAll = () => {
    // filteredItems = []
    dispatch({
      type: UPDATE_SEARCH_PRODUCT, payload: ''
    })

    setIsLoading(true)
    SearchCat = ''
    SearchValue = ''
    setSliderValues([0, 500])
    setLimits(10)
    setActivepage(1)
    // setValue1([0, 500])
    let Array = []
    categories?.map((item) => {
      Array.push({
        name: item.name,
        checked: true,
        id: item.id
      })
    })
    setCategories(Array);
    fetch(`${url}/user/products/list`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        page: 1,
        limit: 10,
        search: '',
        categories: [],
        price: [0, 500],
      })
    })
      .then((response) => response.json())
      .then((response) => {

        if (response.statusCode === 200) {
          setProducts(response?.data?.products);
          // fetchCategories()
          dispatch({
            type: UPDATE_PRODUCT_REFRESH, payload: 0
          })
          setAllpages(response?.data?.totalCount);
          setIsLoading(false);
        }
      })
      .catch((err) => {

      });
  }



  const fetchCategories = () => {
    setLoading(true);
    setIsLoading(true);

    let url = `http://apis.rubypets.co.uk/user/categories/list`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Categories has been fetched Succesfully") {
          let Array = []
          data?.data?.categories?.map((item) => {
            Array.push({
              name: item.name,
              checked: item.id === Number(SearchCat) ? true : false,
              id: item.id
            })
          })

          setCategories(Array);
          setLoading(false);
          GetAllProducts(Array);

        }
      })
      .catch((error) => {

      });
  };


  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Add to cart Successfully Added',
    });
  };

  const checkDefaultCounter = () => {
    var totalQuantity = 0;

    let Data = JSON.parse(localStorage.getItem("myArray"))
    for (var i = 0; i < Data?.length; i++) {

      totalQuantity += Data[i].quantity;

      // // 
    }
    localStorage.setItem("myArray", JSON.stringify(Data));
    dispatch({ type: UPDATE_CART_COUNT, payload: totalQuantity });

  }


  const addToCart = (decodedObj) => {
    // success()
    // debugger;
    const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
    //  decodedObj const  = { id: 123 }; // Example decoded object
    const hasDuplicate = storedArray?.find((obj) => obj.id === decodedObj?.id);

    if (!hasDuplicate) {
      decodedObj["quantity"] = 1;
      storedArray.push(decodedObj);
      localStorage.setItem("myArray", JSON.stringify(storedArray));

      success()
      setRefresh(Refresh + 1)
      checkDefaultCounter()
      // navigate("/cart")

    } else {

      hasDuplicate["quantity"] = 1 + hasDuplicate["quantity"];
      localStorage.setItem("myArray", JSON.stringify(storedArray));
      success()
      setRefresh(Refresh + 1)
      checkDefaultCounter()


      // navigate(`/cart`)
    }
  };


  const minPriceInputRef = useRef(null);
  const maxPriceInputRef = useRef(null);

  useEffect(() => {
    const minPriceInput = minPriceInputRef.current;
    const maxPriceInput = maxPriceInputRef.current;

    const handleMinPriceChange = () => {
      const minPrice = parseInt(minPriceInput.value);
      const maxPrice = parseInt(maxPriceInput.value);
      if (minPrice <= maxPrice) {
        setSliderValues([minPrice, maxPrice]);
      }
    };

    const handleMaxPriceChange = () => {
      const minPrice = parseInt(minPriceInput.value);
      const maxPrice = parseInt(maxPriceInput.value);
      if (maxPrice >= minPrice) {
        setSliderValues([minPrice, maxPrice]);
      }
    };

    minPriceInput.addEventListener('input', handleMinPriceChange);
    maxPriceInput.addEventListener('input', handleMaxPriceChange);

    return () => {
      minPriceInput.removeEventListener('input', handleMinPriceChange);
      maxPriceInput.removeEventListener('input', handleMaxPriceChange);
    };
  }, []);


  const handleSliderChange = (event, newValues) => {

    setSliderValues(newValues);
    minPriceInputRef.current.value = newValues[0];
    maxPriceInputRef.current.value = newValues[1];
  };


  const theme = createTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          color: 'orange',
        },
        track: {
          color: 'orange',
        },
        rail: {
          color: 'orange',
        },
      },
    },
  });


  return (
    <>
      {contextHolder}

      <DiscountHeader minimum_limit={80} />
      <Header Counts={Counts} navigate={navigate} resetAll={resetAll} setName={setName} Name={Name} setSelecedCat={setSelecedCat} />
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
      <div className="shop-page  mb-120" style={{ background: 'white' }}>
        <div className="container">

          <div className="row">

            <div className="col-lg-3">
              <div className="shop-sidebar">
                <div className="shop-widget">
                  <div>
                    <h5 className="shop-widget-title">Price Range</h5>
                    <div className="range-widget">
                      <div className="price-filter-range">
                        <ThemeProvider theme={theme}>
                          <Slider
                            value={sliderValues}
                            onChange={handleSliderChange}
                            min={0}
                            max={500}
                          />
                        </ThemeProvider>
                      </div>
                      <div className="mt-25 d-flex justify-content-between gap-4 ">
                        <input
                          type="number"
                          min={100}
                          inputMode="numeric"
                          max={499}
                          value={sliderValues[0]}
                          ref={minPriceInputRef}
                          style={{ padding: '4px', textAlign: 'center' }}
                          className="price-range-field numeric-input"
                        />
                        <input
                          type="number"
                          min={100}
                          max={500}

                          style={{ padding: '4px', textAlign: 'center' }}

                          inputMode="numeric"
                          ref={maxPriceInputRef}
                          value={sliderValues[1]}
                          className="price-range-field numeric-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-widget">
                  <div class="check-box-item">
                    <h5 class="shop-widget-title">Category</h5>
                    <div class="checkbox-container">
                      {categories && categories?.map((item, index) => {
                        return (
                          <label class="containerss">
                            {item.name}
                            <input type="checkbox" checked={item.checked} onChange={(e) => {
                              const checked = e.target.checked;
                              const updatedItems = [...categories];
                              updatedItems[index].checked = checked;
                              setCategories(updatedItems);
                            }} />
                            <span class="checkmark"></span>
                          </label>
                        )
                      })}


                    </div>
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-dark btn-lg" onClick={() => {
                    setActivepage(1); dispatch({
                      type: UPDATE_SEARCH_PRODUCT, payload: ''
                    }); GetAllProducts('Apply');
                  }}>Apply filter</button>

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
                          value={limits}
                          onChange={(e) => { GetAllProducts('Apply', 1, e.target.value); setPageData(e.target.value); setActivepage(1) }}
                        >
                          <option value="5">
                            5
                          </option>
                          <option value="10" selected>10</option>
                          <option value="25">
                            25
                          </option>
                          <option value="50">
                            50
                          </option>

                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 justify-content-center" style={{ textAlign: 'center' }}>
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
                      <>
                        <div className="col-lg-4 col-md-4 col-sm-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center' }}>
                          <div className="collection-card" >
                            {/* <div className="offer-card">
                            <span>Offer</span>
                          </div> */}
                            <div className="collection-img">
                              <img
                                // width={300}
                                // height={300}
                                className="img-fluid"
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
                                  <a href="#" onClick={() => addToCart(item)}>
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

                          </div>
                          <div className="collection-card col-lg-4 col-md-4 col-sm-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

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
                                <h6> {localStorage.getItem('currency')}{Number(item?.dropshipPrice).toFixed(2)}</h6>
                                {/* <del>${item.rrp}</del> */}
                              </div>

                            </div>
                          </div>
                        </div>
                      </>
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
                      page={Activepage}
                      variant="outlined"
                      shape="rounded"
                      onChange={(e, Value) => {
                        setActivepage(Value)
                        GetAllProducts(e, Value,);
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
