import React, { useEffect, useState, useRef } from "react";
import Header from "../shared/Header";
import tick from '../assets/qa.gif';
import error from '../assets/er.png';
import DiscountHeader from "../shared/DiscountHeader";
import {
  PaymentElement,
  LinkAuthenticationElement
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Modal from '@mui/material/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CART_COUNT, UPDATE_CART_TOTAL, CATEGORY_ERROR } from '../Redux/Actions/action';
import { url } from "../environment";
import { message } from 'antd';
import { Elements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

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
  const [errorMessage, setErrorMessage] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const [Country, setCountry] = useState('');
  const [ErrorMes, setErrorMes] = useState('');
  const [loading, setLoading] = React.useState(false);
  const [ErrorChec, setErrorChec] = React.useState(false);
  const [CartData, setCartData] = useState([])
  const [messageApi, contextHolder] = message.useMessage();

  const [payStripe, setPayStripe] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [ShippingSettings, setShippingSettings] = useState([]);
  const [ShippingTotal, setShippingTotal] = useState(0);
  const [ErroMsg, setErroMsg] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const [ stripePaymentElements , setStripePaymentElement ] = useState(null);
  const [ paymentCustomerName , setPaymentCustomerName ] = useState(null);
  const [ paymentClientSecret , setPaymentClientSecret] = useState(null);




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
  const initializeStripe = async (clientSecret) => {
    console.log(clientSecret)
    const stripe = await loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');
    const appearance = { /* appearance */ };
    const options = {
      layout: {
        type: 'tabs',
        defaultCollapsed: false,
      }
    };
    const elements = stripe.elements({ clientSecret, appearance });
    const paymentElement = elements.create('payment', options);
    paymentElement.mount('#payment-element');
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

  const success = (e) => {
    messageApi.open({
      type: 'error',
      content: e,
    });
  };

  const navigate = useNavigate()

  const addAllShipping = (e) => {


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
        emailAddress: e.emailNew,
        totalAmount: cartCountTotal,
        orderDetails: Docline,
        shippingAddress: e.Address,
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

  const backToHome = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenPay = () => setPayStripe(true);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const stripe = useStripe();
  // let elements = useElements();
  let elements;


  const makePayment = async(event)=>{

      let myClientSecret = paymentClientSecret;
      let ele = stripePaymentElements;
      console.log(paymentClientSecret , ele )

      event.preventDefault()

      const responce = await stripe.confirmCardPayment(myClientSecret, {
        payment_method: {
        card: ele,
        billing_details: {
            name: "test-customer" // Replace with the customer's name
        }
        }
      });
      
    
    console.log(responce)

      if (responce.error) {
      // Display error message to the user
      console.error(responce.error.message);
      } else {
      // Payment successful, redirect or show a success message
      if(responce.paymentIntent.status == "succeeded"){
      // call the api that was already being called
      console.log('Payment succeeded:', responce.paymentIntent.status);
      }

      }

  
  
      alert( "okkkk" );        




  }

  const handleSubmit = async (event) => {
    console.log(Country)

    handleOpenPay()




    setErrorChec(true)
    if (CartData?.length < 1) {
      navigate('/home')
    }
    
    // setLoading(true)

    const response = await fetch("http://apis.rubypets.co.uk/payment/create/intent", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // paymentMethodId: paymentMethod.id,
        amount: Number(cartCountTotal) * 100,
        currency: 'usd',
        name: event.fname + ' ' + event.lname,
        address: event.Address,
        country: event.country,
        description: event.message,
      }),
    });

    const result = await response.json();
    if (result.statusCode === 400) {
      success(result.message)
      // setLoading(false)

    }
    if (result.success) {

      const { clientSecret } = result.data;
      console.log({clientSecret})

      setPaymentClientSecret( clientSecret )




      const stripe = await loadStripe('pk_test_51NHN8USBku9GQFtqtWrSK4cbXd9UKjVDpMUfANdCwrkr8TM7Tpsjgd6Fy11sHsWrmpzmrvLh6kK0WLTKP9NJbITe00FEj729SF');

      const appearance = {
        theme: 'flat',
      };
      elements = stripe.elements({ appearance, clientSecret });
      console.log(elements)


      const paymentElementOptions = {
        layout: "tabs",
      };

      const paymentElement = elements.create("payment", paymentElementOptions);


      paymentElement.mount("#payment-element");

      setStripePaymentElement(elements)

    }

  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required('First Name is required'),
    lname: Yup.string().required('Last Name is required'),
    country: Yup.string().required('Country is required'),
    Address: Yup.string().required('Street Address is required'),
    emailNew: Yup.string().email('Invalid email address').required('Email Address is required'),
    message: Yup.string().required('Description is required'),
  });

  const handleSubmitnew = (values, { setSubmitting }) => {
    console.log({values});
    handleSubmit(values)

    setSubmitting(false);
  };


  return (
    <>
      {contextHolder}
      <DiscountHeader minimum_limit={80} />
      <Header />
      <div className="checkout-section pt-120 pb-120">
        <div className="container">

          <Modal
            open={open}
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

          <Modal
            open={payStripe}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box id="payment-form" sx={style}>

              <form id="payment-form-2" onSubmit={makePayment} >
                <div id="payment-element">
                </div>
                <button id="submit" >
                  <div class="spinner hidden" id="spinner"></div>
                  <span id="button-text">Pay now</span>
                </button>
                <div id="payment-message" class="hidden"></div>

                {/* <LinkAuthenticationElement id="link-authentication-element"
        // Access the email value like so:
        // onChange={(event) => {
        //  setEmail(event.value.email);
        // }}
        //
        // Prefill the email field like so:
        // options={{defaultValues: {email: 'foo@bar.com'}}}
        /> */}
                {/* <PaymentElement id="payment-element" /> */}
                {/* <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button> */}
                {/* Show any error or success messages */}
                {/* {message && <div id="payment-message">{message}</div>} */}
              </form>
            </Box>
          </Modal>


          <Modal
            open={open1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img src={error} width={120} height={120} />
                <h3 style={{ color: 'black' }} >
                  <b>{ErrorMes}!</b>
                </h3>
                <Typography id="modal-modal-description" style={{ fontSize: '14px' }} sx={{ mt: 3 }}>


                </Typography>

                <div class="form-inner mt-5 mb-2" style={{ background: 'none !important' }}>
                  <button className="btn btn-primary" onClick={() => setOpen1(false)}>Close</button>

                </div>

              </div>
            </Box>
          </Modal>

          <Formik
            initialValues={{
              fname: '',
              lname: '',
              country: '',
              Address: '',
              emailNew: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmitnew}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row g-4">
                  <div className="col-lg-7">
                    <div className="form-wrap box--shadow mb-30">
                      <h4 className="title-25 mb-20">Shipping Details</h4>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-inner">

                            <label>First Name</label>
                            <Field type="text" name="fname" placeholder="Your first name" />
                            <ErrorMessage name="fname" component="div" className="error-message" />

                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-inner">
                            <label>Last Name</label>
                            <Field type="text" name="lname" placeholder="Your last name" />
                            <ErrorMessage name="lname" component="div" className="error-message" />

                          </div>
                        </div>
                        <div class="col-12">
                          <div className="form-inner">
                            <Field as="select" name="country" >
                              <option value="">Country / Region</option>
                              <option value="US">United States</option>
                              <option value="NZ">New Zealand</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="IN">India</option>
                            </Field>
                            <ErrorMessage name="country" component="div" className="error-message" />
                          </div>
                        </div>
                        {
                        }
                        <div className="col-12">
                          <div className="form-inner">
                            <label>Street Address</label>
                            <Field type="text" name="Address" placeholder="House and street name" />
                            <ErrorMessage name="Address" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-inner">
                            <label>Town</label>
                            <Field type="text" name="town" placeholder="Town" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-inner">
                            <label>City</label>
                            <Field type="text" name="city" placeholder="City" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-inner">
                            <label>State</label>
                            <Field type="text" name="state" placeholder="State" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-inner">
                            <Field type="email" id="email" name="emailNew" placeholder="Your Email Address" />
                            <ErrorMessage name="emailNew" component="div" className="error-message" />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-inner">
                            <Field as="textarea" name="message" placeholder="Order Notes (Optional)" rows="6"></Field>
                            <ErrorMessage name="message" component="div" className="error-message" />
                          </div>
                        </div>
                      </div>
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
                                { }

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

                    {/* <button onClick={handleOpenPay}></button> */}

                    <div className="payment-form-div">

                      {/* <div className="payment-methods mb-50">
                        { }
                        <label htmlFor="card-number">Card Number:</label>
                        <div id="card-number">
                          <CardNumberElement options={{ style: { base: { fontSize: '16px' } } }} />
                        </div>

                        <label htmlFor="card-expiry">Expiration Date:</label>
                        <div id="card-expiry">
                          <CardExpiryElement options={{ style: { base: { fontSize: '16px' } } }} />
                        </div>

                        <label htmlFor="card-cvc">CVC:</label>
                        <div id="card-cvc">
                          <CardCvcElement options={{ style: { base: { fontSize: '16px' } } }} />
                        </div>

                        { }

                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        { }

                      </div> */}

                      {/* <form id="payment-form">
                        <div id="link-authentication-element">
                        </div>
                        <div id="payment-element">
                        </div>
                        <button id="submit">
                          <div class="spinner hidden" id="spinner"></div>
                          <span id="button-text">Pay now</span>
                        </button>
                        <div id="payment-message" class="hidden"></div>
                      </form>                       */}

                      <div className="place-order-btn">
                        <button type="submit" className="primary-btn1 lg-btn">
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

                    </div>



                  </aside>
                </div>
              </Form>
            )}
          </Formik>

        </div>

      </div>


    </>
  );
};
export default Checkout;
