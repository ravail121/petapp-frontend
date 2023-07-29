import { PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { CATEGORY_ERROR } from '../Redux/Actions/action';
import error from '../assets/er.png';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';

import { useNavigate } from 'react-router-dom';

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
export default function CheckoutForm({ handlepayFailed, handlePaystripe, Refresh, setRefresh }) {
  const stripe = useStripe();
  const dispatch = useDispatch();

  const elements = useElements();
  const [message, setMessage] = useState(null);
  // const [ErrorMes, setErrorMes] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setIsLoading(false);

      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/checkOut",
        },
        redirect: "if_required",
      });


      if (error) {
        console.error(error);
        setIsLoading(false);

      }
      else if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log("Payment succeeded");
        dispatch({ type: CATEGORY_ERROR, payload: 0 + 1 });
        setRefresh(Refresh + 1)
        setTimeout(() => {
          handlePaystripe('STripe');
          setIsLoading(false);

        }, 1000)


      } else {
        console.log("Payment failed");
        handlepayFailed()
        setIsLoading(false);

      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);

    }


  }

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <div className="place-order-btn1">
          <button className="primary-btn1 lg-btn" disabled={isLoading || !stripe || !elements} id="submit">

            <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
            </span>
          </button>
        </div>
        {/* <button className="payNow" disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button> */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      {/* <button onClick={handlepayFailed}>swew</button> */}

    </>

  )
}
