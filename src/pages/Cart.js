import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
import { message } from 'antd';
import { url } from "../environment";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CART_COUNT, UPDATE_CART_TOTAL } from '../Redux/Actions/action';
const Cart = () => {
  let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
  const [count, setCount] = useState(1);
  const [contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const [IsLoading, setIsLoading] = useState(false);
  const [ShippingSettings, setShippingSettings] = useState([]);
  const [ShippingTotal, setShippingTotal] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const cartCountTotal = useSelector((state) => state.cartTotal.cartTotal);
  const cartCountNew = useSelector((state) => state.add.cartCount);
  // console.log(cartCountTotal)

  const [CartData, setCartData] = useState([]);
  useEffect(() => {
    checkDefaultCounter()

    GetAllShipping()
    if (storedArray?.length > 0) {
      checBalance();
    }
    setCartData(storedArray);

  }, []);
  const calculateTotalPrice = (product, index) => {
    CartData[index]["totalPrice"] = product.quantity * product.dropshipPrice;

    return product.quantity * product.dropshipPrice;
    // checBalance();
  };
  // const calculateShippingPrice = (product, index) => {
  //   ShippingSettings[index]["totalPrice"] = product.quantity * product.dropshipPrice;

  //   return product.quantity * product.dropshipPrice;
  //   // checBalance();
  // };

  // const updatedProducts = CartData.map((product) => ({
  //   ...product,
  //   totalPrice: calculateTotalPrice(product),
  // }));
  dispatch({
    type: UPDATE_CART_TOTAL, payload: CartData.reduce(
      (sum, product) => sum + Number(product.totalPrice),
      0
    )
  })

  const addToCart = (decodedObj, check) => {
    console.log(decodedObj)
    // success()
    // debugger;
    const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
    //  decodedObj const  = { id: 123 }; // Example decoded object
    const hasDuplicate = storedArray?.find((obj) => obj.id === decodedObj?.id);
    console.log(hasDuplicate)
    if (!hasDuplicate) {
      decodedObj["quantity"] = 1;
      storedArray.push(decodedObj);
      localStorage.setItem("myArray", JSON.stringify(storedArray));
      console.log(storedArray)

      checkDefaultCounter()
      // navigate("/cart")

    } else {
      hasDuplicate["quantity"] = check === '+' ? 1 + hasDuplicate["quantity"] : hasDuplicate["quantity"] - 1;
      localStorage.setItem("myArray", JSON.stringify(storedArray));

      checkDefaultCounter()


      // navigate(`/cart`)
    }
  };



  const checkDefaultCounter = () => {
    var totalQuantity = 0;
    console.log(JSON.parse(localStorage.getItem("myArray")))

    let Data = JSON.parse(localStorage.getItem("myArray"))
    for (var i = 0; i < Data?.length; i++) {
      console.log(JSON.parse(localStorage.getItem("myArray")))

      totalQuantity += Data[i].quantity;

      console.log(totalQuantity)
    }
    localStorage.setItem("myArray", JSON.stringify(Data));
    dispatch({ type: UPDATE_CART_COUNT, payload: totalQuantity });

  }

  const checBalance = () => {
    const totalPrice = storedArray?.reduce(
      (accumulator, product) => accumulator + Number(product.dropshipPrice),
      0
    );

    // console.log(totalPrice * count);
    setTotalPrice(totalPrice);
  };

  const GetAllShipping = () => {
    setIsLoading(true);
    fetch(`${url}/user/orders/shipping/costs`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Shipping ----->>>", response);
        if (response.message === "Shipping Fee has been fetched Succesfully") {
          setShippingSettings(response?.data?.shippingFee);
          // setAllpages(response?.data?.totalCount);
          let obj = response?.data?.shippingFee[0]
          // const sum = Object.keys(obj)
          //   .filter(key => key !== "id")
          //   .reduce((acc, key) => acc + obj[key], 0);
          setShippingTotal(obj)
          // console.log(obj.shippingFee)
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const rmoveToCart = (id) => {
    storedArray = storedArray.filter((obj) => obj.id !== id);
    // console.log(storedArray);
    setCartData(storedArray);

    localStorage.setItem("myArray", JSON.stringify(storedArray));
    checBalance();
    checkDefaultCounter()
  };
  const getOnChangeCounter = (value, index) => {
    // addToCart()
    console.log(value)
    let obj = CartData;
    obj[index]["quantity"] = value;
    console.log(obj);
    checkDefaultCounter()
    dispatch({
      type: UPDATE_CART_TOTAL, payload: obj.reduce(
        (sum, product) => sum + product.totalPrice,
        0
      )
    })
    // dispatch({
    //   type: UPDATE_CART_TOTAL, payload: obj.reduce(
    //     (sum, product) => sum + product.totalPrice,
    //     0
    //   )
    // })
  };



  return (
    <>
      {/* {contextHolder} */}

      <DiscountHeader minimum_limit={80} />
      <Header />
      <div class="inner-page-banner" style={{ padding: '120px 0px' }}>
        <div class="breadcrumb-vec-btm">
          <img class="img-fluid" src="assets/images/bg/inner-banner-btm-vec.png" alt="" />
        </div>
        <div class="container">
          <div class="row justify-content-center align-items-center text-center">
            <div class="col-lg-6 align-items-center">
              <div class="banner-content">
                <h1>Cart</h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Cart</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-img d-lg-block d-none">
                <div class="banner-img-bg">
                  <img class="img-fluid" src="https://demo.egenslab.com/html/scooby/preview/assets/images/bg/inner-banner-img.png" alt="" />
                </div>
                {/* <img class="img-fluid" src="assets/images/bg/inner-banner-img.png" alt=""/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-section pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-wrapper">
                <table className="eg-table table cart-table">
                  <thead>
                    <tr>
                      <th>Delete</th>
                      <th>Image</th>
                      <th>Food Name</th>
                      <th>Unite Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartData &&
                      CartData?.map((item, index) => {
                        return (
                          <tr>
                            <td data-label="Delete">
                              <div
                                className="delete-icon"
                                onClick={() => rmoveToCart(item.id)}
                              >
                                <i className="bi bi-x"></i>
                              </div>
                            </td>
                            <td data-label="Image">
                              <img src={item.imageName} alt="" />
                            </td>
                            <td data-label="Food Name">
                              <a href="shop-details.html">{item.name}</a>
                            </td>

                            <td data-label="Discount Price">
                              ${Number(item.dropshipPrice).toFixed(2)}
                            </td>
                            <td data-label="Quantity">
                              <div className="quantity d-flex align-items-center">
                                <div className="quantity-nav nice-number d-flex align-items-center">
                                  <button
                                    disabled={item.quantity === 1}
                                    onClick={() => {
                                      setCount(count - 1);
                                      addToCart(item, '-');
                                      getOnChangeCounter(
                                        item.quantity - 1,
                                        index
                                      );
                                    }}
                                  >
                                    -
                                  </button>{" "}
                                  <input
                                    style={{ width: "24px" }}
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                  />
                                  <button
                                    onClick={() => {
                                      setCount(count + 1);
                                      addToCart(item, '+');

                                      getOnChangeCounter(
                                        item.quantity + 1,
                                        index
                                      );
                                      // checBalance();
                                    }}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td data-label="Subtotal">
                              ${calculateTotalPrice(item, index).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>

                </table>
                {CartData.length < 1 && <div style={{ textAlign: 'center' }}> <h2>Cart is empty</h2></div>}

              </div>
            </div>
          </div>
          <div className="row g-4">
            {/* <div className="col-lg-4">
              <div className="coupon-area">
                <div className="cart-coupon-input">
                  <h5 className="coupon-title">Coupon Code</h5>
                  <form className="coupon-input d-flex align-items-center">
                    <input type="text" placeholder="Coupon Code" />
                    <button type="submit">Apply Code</button>
                  </form>
                </div>
              </div>
            </div> */}

            <div className="col-lg-8">
              <table className="table total-table">
                <thead>
                  <tr>
                    <th>Cart Totals</th>
                    <th></th>
                    <th>${cartCountTotal ? cartCountTotal.toFixed(2) : 0}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      <ul className="cost-list text-start">
                        <li>Shipping Fee</li>
                        <li>Taxes</li>
                        {/* <li>
                          Shipping Enter your address to view shipping options.{" "}
                          <br /> <a href="#">Calculate shipping</a>
                        </li> */}
                      </ul>
                    </td>
                    <td>
                      <ul className="single-cost text-center">
                        {ShippingSettings && ShippingSettings?.map((item) => {
                          return (<>
                            <li>${item?.shippingFee}</li>
                            <li>${item?.tax}</li>
                          </>
                          )

                        })}
                        {/* <li>$5</li> */}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td></td>

                    <td>${(cartCountTotal + Number(ShippingTotal?.shippingFee)).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <ul className="cart-btn-group">
                <li>
                  <a href="shop.html" className="primary-btn2 btn-lg">
                    Continue to shopping
                  </a>
                </li>
                <li>
                  {cartCountNew > 0 ? (
                    <Link to="/checkOut" className="primary-btn3 btn-lg" >
                      Proceed to Checkout
                    </Link>
                  ) : ('')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
