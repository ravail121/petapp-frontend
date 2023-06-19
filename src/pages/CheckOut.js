import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import tick from '../assets/qa.gif'
import DiscountHeader from "../shared/DiscountHeader";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CART_COUNT, UPDATE_CART_TOTAL } from '../Redux/Actions/action';
import { url } from "../environment";
import { message } from 'antd';

import { useNavigate } from "react-router-dom";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 327,
  bgcolor: 'background.paper',
  borderRadius: '25px',

  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 5,
};
const Checkout = () => {
  const dispatch = useDispatch();
  let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
  const cartCountTotal = useSelector((state) => state.cartTotal.cartTotal);
  const [OrderNumber, setOrderNumber] = useState('');
  const [BackButton, setBackButton] = useState(false);
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [SaveValue, setSaveValue] = useState({ id: '' });
  const [loading, setLoading] = React.useState(false);
  const [ErrorAddress, setErrorAddress] = React.useState(false);
  const [ErrorChec, setErrorChec] = React.useState(false);
  const [CartData, setCartData] = useState([])
  const [messageApi, contextHolder] = message.useMessage();

  const [IsLoading, setIsLoading] = useState(false);
  const [ShippingSettings, setShippingSettings] = useState([]);
  const [ShippingTotal, setShippingTotal] = useState(0);
  const [ErroMsg, setErroMsg] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };



  useEffect(() => {
    window.scrollTo(0, 0);
    if (storedArray.length < 1) {
      navigate('/home')
    }
    checkDefaultCounter()
    setCartData(storedArray);
    GetAllShipping()
  }, [])

  const checkDefaultCounter = () => {
    var totalQuantity = 0;

    let Data = JSON.parse(localStorage.getItem("myArray"))
    Data?.map((ele) => {
      ele["totalPrice"] = ele.quantity * ele.dropshipPrice;
    })
    for (var i = 0; i < Data?.length; i++) {

      totalQuantity += Data[i].quantity;

    }
    localStorage.setItem("myArray", JSON.stringify(Data));
    dispatch({ type: UPDATE_CART_COUNT, payload: totalQuantity });

    dispatch({
      type: UPDATE_CART_TOTAL, payload: Data?.reduce(
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
          let obj = response?.data?.shippingFee[0]
          setShippingTotal(obj)
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
    setErrorChec(false)
    if (emailInput.trim() === '') {
      setErroMsg('Email is required');
      setIsValidEmail(false);
    } else {
      setErroMsg('');
      setIsValidEmail(validateEmail(emailInput));
      if (!isValidEmail) {
        setErroMsg('Invalid Email Format');

      }
    }
  };

  const success = (e) => {
    messageApi.open({
      type: 'error',
      content: e,
    });
  };

  const navigate = useNavigate()




  const setAdressValue = (e) => {
    setAddress(e)
    if (e.length > 0) {
      setErrorAddress(true);
    }
    else {
      setErrorAddress(false);

    }

  }



  const addAllShipping = (e) => {
    e.preventDefault();
    setErrorChec(true)
    if (CartData?.length < 1) {
      navigate('/home')
    }

    if (Address.trim() !== '') {
      setErrorAddress(true);
    }


    if (Email.trim() === '') {
      setErroMsg('Email is required');
      setIsValidEmail(false);
    }
    if (!isValidEmail || !ErrorAddress) {
      return
    }
    setErrorChec(false)

    let Docline = []
    CartData &&
      CartData?.map((item, index) => {
        Docline.push({
          quantity: item.quantity,
          productName: item.name,
          productId: item.id,
          amount: calculateTotalPrice(item, index),
        })
      })
    setLoading(true)
    setBackButton(false)

    fetch(`${url}/user/orders/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        emailAddress: Email,
        totalAmount: cartCountTotal,
        orderDetails: Docline,
        shippingAddress: Address,
        shippingFee: ShippingTotal?.shippingFee,
        totalTax: ShippingTotal?.tax * cartCountTotal
      })
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode === 200) {
          localStorage.removeItem('myArray')

          dispatch({
            type: UPDATE_CART_TOTAL, payload: 0
          })
          setOrderNumber(response.data.orderNo)
          handleOpen()
          checkDefaultCounter()
          setCartData([]);
          setLoading(false)

          setIsLoading(false);
        }
        else if (response.statusCode === 400) {
          success(response.message)
          setLoading(false)

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
    setCartData(storedArray);
    console.log(storedArray)
    localStorage.setItem("myArray", JSON.stringify(storedArray));
    if (storedArray?.length < 1) {
      navigate('/home')
    }
    checkDefaultCounter()
  };

  const getAllValue = (e) => {

    let obj = SaveValue
    obj[e.target.name] = e.target.value;

    setSaveValue(obj)
  }

  const backToHome = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <>
      {contextHolder}
      <DiscountHeader minimum_limit={80} />
      <Header />
      <div className="checkout-section pt-120 pb-120">
        <div className="container">

          <Modal
            open={open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img src={tick} width={170} height={170} />
                <h3 style={{ color: 'black' }} >
                  <b>Your Order has been Placed Succesfully!</b>
                </h3>
                <Typography id="modal-modal-description" style={{ fontSize: '14px' }} sx={{ mt: 3 }}>
                  Your Order Has been Confirmed.
                  Your Order Number is {' '}
                  <b>{OrderNumber}</b>.

                  Email has been sent to you.

                </Typography>

                <div class="form-inner mt-5 mb-2" style={{ background: 'none !important' }}>
                  <button style={{ width: '100%', height: '50px' }} class="primary-btn1 mt-4" onClick={(e) => backToHome(e)}>  Back to Home</button>

                </div>

              </div>
            </Box>
          </Modal>
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="form-wrap box--shadow mb-30">
                <h4 className="title-25 mb-20">Shipping Details</h4>
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
                          onChange={(e) => setAdressValue(e.target.value)}
                          name="Address"

                          placeholder="House and street name"
                        />
                        {ErrorChec && !ErrorAddress && <p className="error-message">Address is Required</p>}
                      </div>
                    </div>


                    <div className="col-12">
                      <div className="form-inner">
                        <label>Additional Information</label>
                        <input
                          type="number"
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
                          onChange={(e) => { setEmail(e.target.value); handleEmailChange(e) }}

                          name="email"
                          placeholder="Your Email Address"
                        />
                        {ErrorChec && !isValidEmail && <p className="error-message">{ErroMsg}</p>}
                        { }
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

            </div>
            <aside className="col-lg-5">
              <div className="added-product-summary mb-30">
                <h5 className="title-25 checkout-title">Order Summary</h5>
                <ul className="added-products">
                  {CartData && CartData?.map((item, index) => {
                    return (
                      <li className="single-product d-flex justify-content-start">
                        <div className="product-img">
                          {/* <Avatar alt="" src={item?.imageName}   /> */}

                          <img width={0} height={100} src={item?.imageName} alt="" />
                        </div>
                        <div className="product-info" style={{ marginLeft: '8px' }}>
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
                              <span style={{ display: 'flex', cursor: 'pointer' }} className="product-price">£{calculateTotalPrice(item, index)?.toFixed(2)} <sup> <div className="delete-btn" onClick={() => rmoveToCart(item, index)}>
                                <i className="bi bi-x-lg"></i>
                              </div></sup></span>
                            </strong>
                          </div>
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
                      <th> {localStorage.getItem('currency')}{cartCountTotal ? cartCountTotal.toFixed(2) : 0}</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Shipping Fee</td>
                      <td>{ShippingTotal?.currencySign}{ShippingTotal?.shippingFee}</td>
                    </tr>
                    <tr>
                      <td>Tax ({ShippingTotal?.tax * 100}%)</td>
                      <td>{ShippingTotal?.currencySign}{cartCountTotal ? (ShippingTotal?.tax * cartCountTotal)?.toFixed(2) : 0}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="summery-card total-cost mb-30">
                <table className="table cost-summery-table total-cost">
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th> {localStorage.getItem('currency')}
                        {CartData?.length > 0 ? ((Number(cartCountTotal) + Number(ShippingTotal?.shippingFee ? ShippingTotal?.shippingFee : 0)) + (Number(ShippingTotal?.tax ? ShippingTotal?.tax : 0) * Number(cartCountTotal))).toFixed(2) : 0}</th>
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
                  <button onClick={(e) => { addAllShipping(e); }} className="primary-btn1 lg-btn">
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{

                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-12px',
                          marginLeft: '-12px',
                        }}
                      />)}
                    <span className={loading ? 'None' : ''}>Place Order</span>
                  </button>
                </div>
              </form>
            </aside>
          </div>
          {/* <button onClick={handleOpen}>sdsd</button> */}

        </div>

      </div>

    </>
  );
};
export default Checkout;
