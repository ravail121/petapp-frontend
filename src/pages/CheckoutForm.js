import { PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { CATEGORY_ERROR } from '../Redux/Actions/action';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
export default function CheckoutForm({ handlePaystripe }) {
  const stripe = useStripe();
  const dispatch = useDispatch();

  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
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
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log("Payment succeeded");
        dispatch({ type: CATEGORY_ERROR, payload: true });
        setTimeout(() => {
          handlePaystripe();
        }, 1000)

      } else {
        console.log("Payment failed");
      }
    } catch (error) {
      console.error(error);
    }


    setIsLoading(false);
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {
      }
      <PaymentElement id="payment-element" />
      <button className="payNow" disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      { }
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}
