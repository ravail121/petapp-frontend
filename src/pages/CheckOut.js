import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import tick from '../assets/qa.gif'
import DiscountHeader from "../shared/DiscountHeader";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CART_COUNT, UPDATE_CART_TOTAL } from '../Redux/Actions/action';
import { url } from "../environment";
import { useNavigate } from "react-router-dom";
// import { Grid } from "swiper";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '25px',

  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Checkout = () => {
  const dispatch = useDispatch();
  let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
  const cartCountTotal = useSelector((state) => state.cartTotal.cartTotal);
  const [OrderNumber, setOrderNumber] = useState('');
  const [BackButton, setBackButton] = useState(false);
  const [Error, setError] = useState('');
  const [SaveValue, setSaveValue] = useState({ id: '' });
  const [loading, setLoading] = React.useState(false);
  const [ErrorChec, setErrorChec] = React.useState(false);
  const [CartData, setCartData] = useState([])

  const [IsLoading, setIsLoading] = useState(false);
  const [ShippingSettings, setShippingSettings] = useState([]);
  const [ShippingTotal, setShippingTotal] = useState(0);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

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
    setErrorChec(false)
    // setEmail(emailInput);
    setIsValidEmail(validateEmail(emailInput));
  };

  // Function to handle email authentication


  const navigate = useNavigate()








  const addAllShipping = (e) => {
    e.preventDefault();
    setErrorChec(true)
    if (!isValidEmail) {
      return
    }
    setErrorChec(false)

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
    setLoading(true)
    setBackButton(false)

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
        // console.log("All Shipping ----->>>", response);
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
          setTimeout(() => {
            setBackButton(true)

          }, 3000)
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

  const backToHome = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <>
      <DiscountHeader minimum_limit={80} />
      <Header />
      <div className="checkout-section pt-120 pb-120">
        <div className="container">

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img src={tick} width={170} height={170} />
                <Typography id="modal-modal-title" variant="h6" component="h1" >
                  <b>Order Placed Succesfully!</b>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                  Your Order Has been Confirmed.
                  <br />Your Order Number is {' '}
                  <b>{OrderNumber}</b>.

                  Email has been sent to you.

                </Typography>

                {/* <form> */}
                {BackButton &&
                  <div class="form-inner mt-5 mb-2" style={{ background: 'none !important' }}>
                    <button style={{ width: '100%', height: '50px' }} class="primary-btn1 mt-4" onClick={(e) => backToHome(e)}>  Back to Home</button>
                    {/* <Button class="backBTN"  variant="outlined"
                      startIcon={<KeyboardBackspaceIcon />}>
                      Back to Home
                    </Button> */}
                  </div>
                }
                {/* </form> */}

              </div>

            </Box>
          </Modal>
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
                        {ErrorChec && !isValidEmail && <p className="error-message">Invalid email format</p>}
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
                              <span className="product-price">£{calculateTotalPrice(item, index)?.toFixed(2)}</span>
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
                        {cartCountTotal !== 0 ? ((cartCountTotal + Number(ShippingTotal?.shippingFee)) + (ShippingTotal?.tax * cartCountTotal))?.toFixed(2) : 0}</th>
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
                    Place Order
                  </button>
                  <button onClick={() => handleOpen()}></button>
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
