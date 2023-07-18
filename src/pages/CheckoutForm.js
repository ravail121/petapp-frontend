import { PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { CATEGORY_ERROR } from '../Redux/Actions/action';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
export default function CheckoutForm({ handlePaystripe, Refresh, setRefresh }) {
  const stripe = useStripe();
  const dispatch = useDispatch();

  const elements = useElements();
  const [message, setMessage] = useState(null);
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
          return_url: "https://google.com",
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
        setIsLoading(false);

      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);

    }


  }

  return (
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
  )
}
