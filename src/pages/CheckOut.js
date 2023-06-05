import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CART_COUNT, UPDATE_CART_TOTAL } from '../Redux/Actions/action';
import { url } from "../environment";
const Checkout = () => {
  const dispatch = useDispatch();
  let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
  const cartCountTotal = useSelector((state) => state.cartTotal.cartTotal);
  const [Error, setError] = useState('');
  const [SaveValue, setSaveValue] = useState({ id: '' });

  const [CartData, setCartData] = useState([])

  const [IsLoading, setIsLoading] = useState(false);
  const [ShippingSettings, setShippingSettings] = useState([]);
  const [ShippingTotal, setShippingTotal] = useState(0);
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    checkDefaultCounter()
    setCartData(storedArray);
    GetAllShipping()
  }, [])

  const checkDefaultCounter = () => {
    var totalQuantity = 0;
    console.log(JSON.parse(localStorage.getItem("myArray")))

    let Data = JSON.parse(localStorage.getItem("myArray"))
    Data?.map((ele) => {
      ele["totalPrice"] = ele.quantity * ele.dropshipPrice;
    })
    for (var i = 0; i < Data?.length; i++) {
      console.log(JSON.parse(localStorage.getItem("myArray")))

      totalQuantity += Data[i].quantity;

      console.log(totalQuantity)
    }
    localStorage.setItem("myArray", JSON.stringify(Data));
    dispatch({ type: UPDATE_CART_COUNT, payload: totalQuantity });
    console.log(Data.reduce(
      (sum, product) => sum + product.totalPrice,
      0
    ))
    dispatch({
      type: UPDATE_CART_TOTAL, payload: Data.reduce(
        (sum, product) => sum + product.totalPrice,
        0
      )
    })
  }

  const calculateTotalPrice = (product, index) => {
    CartData[index]["totalPrice"] = product.quantity * product.dropshipPrice;

    return product.quantity * product.dropshipPrice;
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

  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    // setEmail(emailInput);
    setIsValidEmail(validateEmail(emailInput));
  };

  // Function to handle email authentication
  const handleEmailAuthentication = () => {
    if (isValidEmail) {
      // Email is valid, perform further authentication logic here
      console.log('Email authentication successful!');
    } else {
      // Invalid email format
      console.log('Invalid email format!');
    }
  };










  const addAllShipping = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      return
    }
    // if(SaveValue.email.length )
    let Docline = []
    CartData &&
      CartData?.map((item, index) => {
        Docline.push({
          quantity: item.quantity,
          productId: item.id,
          amount: calculateTotalPrice(item, index),
        })
      })
    // setIsLoading(true);
    fetch(`${url}/user/orders/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        emailAddress: SaveValue.email,
        totalAmount: cartCountTotal,
        orderDetails: Docline
      })
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

  const rmoveToCart = (item, index) => {
    storedArray = storedArray.filter((obj) => obj.id !== item.id);
    storedArray.map((ele) => {
      ele["totalPrice"] = ele.quantity * ele.dropshipPrice;
    })
    // 
    setCartData(storedArray);
    console.log(storedArray)
    localStorage.setItem("myArray", JSON.stringify(storedArray));
    // checBalance();
    checkDefaultCounter()
  };

  const getAllValue = (e) => {

    let obj = SaveValue
    obj[e.target.name] = e.target.value;

    setSaveValue(obj)
  }

  return (
    <>
      <DiscountHeader minimum_limit={80} />
      <Header />
      <div className="checkout-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="form-wrap box--shadow mb-30">
                <h4 className="title-25 mb-20">Billing Details</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>First Name</label>
                        <input
                          type="text"
                          onChange={(e) => getAllValue(e)}
                          name="fname"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>Last Name</label>
                        <input
                          type="text"
                          onChange={(e) => getAllValue(e)}

                          name="lname"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Country / Region</label>
                        <input
                          type="text"
                          onChange={(e) => getAllValue(e)}

                          name="country"
                          placeholder="Your country name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Street Address</label>
                        <input
                          type="text"
                          onChange={(e) => getAllValue(e)}
                          name="Address"
                          placeholder="House and street name"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          onChange={(e) => getAllValue(e)}

                          name="code"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Additional Information</label>
                        <input
                          type="text"
                          onChange={(e) => getAllValue(e)}
                          name="PhNumber"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="email"
                          id="email"
                          onChange={(e) => { getAllValue(e); handleEmailChange(e) }}

                          name="email"
                          placeholder="Your Email Address"
                        />
                        {!isValidEmail && <p className="error-message">Invalid email format</p>}
                        {/* {!isValidEmail && <p className="error-message">Invalid email format</p>} */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          onChange={(e) => getAllValue(e)}

                          name="postcode"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <textarea
                          name="message"
                          onChange={(e) => getAllValue(e)}
                          placeholder="Order Notes (Optional)"
                          rows="6"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="form-wrap box--shadow">
                <h4 className="title-25 mb-20">Ship to a Different Address?</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Country / Region</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your country name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Street Address</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="House and street name"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="fname"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <aside className="col-lg-5">
              <div className="added-product-summary mb-30">
                <h5 className="title-25 checkout-title">Order Summary</h5>
                <ul className="added-products">
                  {CartData && CartData?.map((item, index) => {
                    return (
                      <li className="single-product d-flex justify-content-start">
                        <div className="product-img">
                          <img width={40} height={100} src={item?.imageName} alt="" />
                        </div>
                        <div className="product-info">
                          <h5 className="product-title">
                            <a href="#">{item?.name}</a>
                          </h5>
                          <div className="product-total d-flex align-items-center">
                            <div className="quantity">
                              <div className="quantity d-flex align-items-center">
                                <div className="quantity-nav nice-number d-flex align-items-center">
                                  <input type="number" value={item?.quantity} min="1" readOnly />
                                </div>
                              </div>
                            </div>
                            <strong>
                              {" "}
                              <i className="bi bi-x-lg px-2"></i>
                              <span className="product-price">£{calculateTotalPrice(item, index).toFixed(2)}</span>
                            </strong>
                          </div>
                        </div>
                        <div className="delete-btn" onClick={() => rmoveToCart(item, index)}>
                          <i className="bi bi-x-lg"></i>
                        </div>
                      </li>
                    )

                  })}


                </ul>
              </div>

              <div className="summery-card cost-summery mb-30">
                <table className="table cost-summery-table">
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                      <th>£{cartCountTotal.toFixed(2)}</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Shipping Fee</td>
                      <td>{ShippingTotal?.currencySign}{ShippingTotal?.shippingFee}</td>
                    </tr>
                    <tr>
                      <td>Tax ({ShippingTotal?.tax * 100}%)</td>
                      <td>{ShippingTotal?.currencySign}{(ShippingTotal?.tax * cartCountTotal).toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="summery-card total-cost mb-30">
                <table className="table cost-summery-table total-cost">
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th>£
                        {((cartCountTotal + Number(ShippingTotal?.shippingFee)) + (ShippingTotal?.tax * cartCountTotal)).toFixed(2)}</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <form className="payment-form">
                <div className="payment-methods mb-50">
                  <div className="row">

                  </div>

                </div>
                <div className="place-order-btn">
                  <button onClick={(e) => addAllShipping(e)} className="primary-btn1 lg-btn">
                    Place Order
                  </button>
                </div>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
