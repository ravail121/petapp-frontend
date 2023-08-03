import React, { useEffect, useState, useRef } from "react";
import Header from "../shared/Header";
import tick from '../assets/qa.gif';
import error from '../assets/er.png';
import CheckoutForm from './CheckoutForm'

import DiscountHeader from "../shared/DiscountHeader";
import { useParams } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import Modal from '@mui/material/Modal';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CART_COUNT, UPDATE_CART_TOTAL, CATEGORY_ERROR } from '../Redux/Actions/action';
import { url } from "../environment";
import { message } from 'antd';
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
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
  const [messagestripe, setMessagestripe] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();


  const dispatch = useDispatch();
  let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
  const checkhandle = useSelector((state) => state.categoryError.errorTrue);

  const cartCountTotal = useSelector((state) => state.cartTotal.cartTotal);
  const [OrderNumber, setOrderNumber] = useState('');
  const [BackButton, setBackButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const stripePromise = loadStripe('pk_test_51Mywy9J9slboT9qM4PkQxymo2HEnuKJ4SlNo47OnduBi31RwWE8t3ysgbvH1RaC0zxiSy99zR7VMnjit9tvWOsnW00FzMFE1rJ')
  const [Country, setCountry] = useState('');
  const [ErrorMes, setErrorMes] = useState('');
  const [loading, setLoading] = React.useState(false);
  const [ErrorChec, setErrorChec] = React.useState(false);
  const [CartData, setCartData] = useState(JSON.parse(localStorage.getItem("myArray")))
  const [payStripe, setPayStripe] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [ShippingSettings, setShippingSettings] = useState([]);
  const [ShippingTotal, setShippingTotal] = useState(0);
  const [Refresh, setRefresh] = useState(0);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [payFailed, setpayFailed] = React.useState(false);

  const [open1, setOpen1] = React.useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [AllValue, setAllValue] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate()
  const [isLoadingStripe, setIsLoadingStripe] = useState(false);

  const handleOpenPay = () => setPayStripe(true);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const stripe = useStripe();
  const [stripePaymentElements, setStripePaymentElement] = useState(null);
  const [paymentClientSecret, setPaymentClientSecret] = useState(null);

  let elementsStripe;

  const elements = useElements();
  const { redirect_status } = useParams();

  const formik = useFormikContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    let storedArray = JSON.parse(localStorage.getItem("myArray"));
    setCartData(storedArray);

    const url = window.location.search;

    const queryString = url.substring(1);

    const queryParamsArray = queryString.split('&');

    const queryParamsObject = {};
    queryParamsArray.forEach((param) => {
      const [key, value] = param.split('=');
      queryParamsObject[key] = value;
    });

    const redirect_status = queryParamsObject['redirect_status'];
    if (redirect_status === 'succeeded') {
      addAllShipping('Paypal')
    }
    else if (redirect_status === 'failed') {
      handlepayFailed()
    }

    if (storedArray?.length < 1) {
      navigate('/home')
    }
    if (firstNameRef.current) {
      firstNameRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    checkDefaultCounter()

    GetAllShipping()
    const container = remainingFieldsRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  }, [])


  const handlepayFailed = () => {
    setpayFailed(true)
    handlePaystripe('')
  };


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

        if (response.message === "Shipping Fee has been fetched Succesfully") {
          setShippingSettings(response?.data?.shippingFee);
          let obj = response?.data?.shippingFee[0]
          setShippingTotal(obj)
          setIsLoading(false);
        }
      })
      .catch((err) => {

      });
  };

  const success = (e) => {
    messageApi.open({
      type: 'error',
      content: e,
    });
  };

  const addAllShipping = (e) => {
    let Docline = []
    let myArray = JSON.parse(localStorage.getItem('myArray'))
    let Data = JSON.parse(localStorage.getItem('PlaceOrder'))
    let Data1 = JSON.parse(localStorage.getItem('shippingDetail'))
    let Data2 = localStorage.getItem('cartTotal')

    CartData &&
      CartData?.map((item, index) => {
        Docline.push({
          quantity: item.quantity,
          productName: item.name,
          productStock: item.stockName,
          productId: item.id,
          amount: calculateTotalPrice(item, index),
        })
      })
    setLoading(true)
    handleOpen()

    let TaxNew;
    if (e === 'Paypal') {
      TaxNew = Data2 ? (Data1?.tax * Data2)?.toFixed(2) : 0
    }
    else {
      TaxNew = cartCountTotal ? (ShippingTotal?.tax * cartCountTotal)?.toFixed(2) : 0
    }

    setBackButton(false)
    fetch(`${url}/user/orders/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        emailAddress: e === 'Paypal' ? Data.emailNew : AllValue.emailNew,
        totalAmount: e === 'Paypal' ? Data2 : cartCountTotal,
        orderDetails: Docline,
        shippingAddress: e === 'Paypal' ? Data.emailNew : AllValue.Address,
        city: e === 'Paypal' ? Data.emailNew : AllValue.city,
        town: e === 'Paypal' ? Data.emailNew : AllValue.town,
        shippingAddress: e === 'Paypal' ? Data.emailNew : AllValue.Address,
        shippingFee: e === 'Paypal' ? Data1?.shippingFee : ShippingTotal?.shippingFee,
        totalTax: TaxNew
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

      });
  };

  const rmoveToCart = (item, index) => {
    storedArray = storedArray.filter((obj) => obj.id !== item.id);
    storedArray.map((ele) => {
      ele["totalPrice"] = ele.quantity * ele.dropshipPrice;
    })
    setCartData(storedArray);

    localStorage.setItem("myArray", JSON.stringify(storedArray));
    if (storedArray?.length < 1) {
      navigate('/home')
    }
    checkDefaultCounter()
  };

  const firstNameRef = useRef(null);

  const backToHome = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  const handleSubmit = async (event) => {
    localStorage.setItem('PlaceOrder', JSON.stringify(event))
    localStorage.setItem('shippingDetail', JSON.stringify(ShippingTotal))
    localStorage.setItem('cartTotal', cartCountTotal)
    setErrorChec(true)
    handleOpenPay()

    if (CartData?.length < 1) {
      navigate('/home')
    }

    setLoading(true)
    const response = await fetch(`${url}/payment/create/intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: (Number(cartCountTotal) * 100).toFixed(0),
        currency: 'usd',
        name: event.fname + ' ' + event.lname,
        address: event.Address,
        country: 'UK',
        description: event.message,
      }),
    });
    const result = await response.json();
    if (result.statusCode === 400) {
      success(result.message)
      setLoading(false)
    }
    if (result.success) {
      const { clientSecret } = result.data;


      setClientSecret(clientSecret)

      setPaymentClientSecret(clientSecret)

      setLoading(false)
      const stripe = await loadStripe(process.env.STRIPE_API_KEY);

      const appearance = {
        theme: 'flat',
      };

      elementsStripe = stripe.elements({ appearance, clientSecret });



      const paymentElementOptions = {
        layout: "tabs",
      };

      const paymentElement = elementsStripe.create("payment", paymentElementOptions);
      setStripePaymentElement(paymentElement)

    }
  };

  const handlePaystripe = (e) => {
    setPayStripe(false)
    if (e === 'STripe') {
      addAllShipping()
    }

  }

  const remainingFieldsRef = useRef(null);

  const handleSubmitnew = async (values, { setSubmitting, setFieldError }) => {
    try {
      const validationSchema = Yup.object().shape({
        fname: Yup.string().required('First Name is required'),
        lname: Yup.string().required('Last Name is required'),
        city: Yup.string().required('City is required'),
        town: Yup.string(),
        Address: Yup.string().required('Street Address is required'),
        emailNew: Yup.string().email('Invalid email address').required('Email Address is required'),
        message: Yup.string().required('Order notes is required'),
      });

      await validationSchema.validate(values, { abortEarly: false });
      dispatch({ type: CATEGORY_ERROR, payload: 0 });
      handleSubmit(values)
      setAllValue(values)
      setSubmitting(false);


      remainingFieldsRef.current.scrollIntoView({ behavior: 'smooth' });
    } catch (validationError) {
      window.scrollTo(0, 0);


      validationError.inner.forEach(error => {
        setFieldError(error.path, error.message);
      });

      setSubmitting(false);
    }
  };

  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    appearance: {},
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
              {loading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
              </Box> :
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
                </div>}
            </Box>
          </Modal>
          <Modal
            open={payStripe}
            onClose={() => { dispatch({ type: CATEGORY_ERROR, payload: 0 }); handlePaystripe(); }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >


            <Box sx={style}>
              {loading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
                : clientSecret ? (
                  <Elements stripe={stripePromise} options={{ clientSecret, }}>
                    <CheckoutForm setRefresh={setRefresh} handlepayFailed={handlepayFailed} Refresh={Refresh} handlePaystripe={handlePaystripe} />
                  </Elements>
                ) : null}

            </Box>
          </Modal>
          <Modal
            open={payFailed}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img src={error} width={100} height={100} />
                <h3 style={{ color: 'black' }} >
                  <b>Payment failed!</b>
                </h3>
                <Typography id="modal-modal-description" style={{ fontSize: '14px' }} sx={{ mt: 3 }}>
                </Typography>
                <div class="form-inner mt-5 mb-2" style={{ background: 'none !important' }}>
                  <button className="btn btn-primary" onClick={() => setpayFailed(false)}>Close</button>
                </div>
              </div>
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

              city: '',
              Address: '',
              emailNew: '',
              message: '',
            }}
            onSubmit={handleSubmitnew}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row g-4">
                  <div className="col-lg-7">
                    <div className="form-wrap box--shadow mb-30">
                      <h4 className="title-25 mb-20">Shipping Details </h4>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-inner">
                            <label>First Name *</label>
                            <Field type="text" name="fname" placeholder="Your first name" innerRef={firstNameRef} />
                            <ErrorMessage name="fname" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-inner">
                            <label>Last Name *</label>
                            <Field type="text" name="lname" placeholder="Your last name" />
                            <ErrorMessage name="lname" component="div" className="error-message" />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-inner">
                            <label>Street Address *</label>
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
                            <label>City *</label>
                            <Field type="text" name="city" placeholder="City" />
                            <ErrorMessage name="city" component="div" className="error-message" />

                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-inner">
                            <label>Email *</label>
                            <Field type="email" id="email" name="emailNew" placeholder="Your Email Address" />
                            <ErrorMessage name="emailNew" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-inner">
                            <label>Order Notes *</label>

                            <Field as="textarea" name="message" placeholder="Order Notes" rows="6"></Field>
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
                                <img className="img-fluid" src={item?.imageName} alt="" />
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
                    { }
                    <div className="payment-form-div">

                      <div className="place-order-btn">
                        <button type="submit" className="primary-btn1 lg-btn">
                          { }
                          <span >Place Order</span>
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
