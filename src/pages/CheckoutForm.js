import { PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { CATEGORY_ERROR } from '../Redux/Actions/action';
import { useDispatch } from 'react-redux';

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
          return_url: "http://rubypets.co.uk/checkOut",
        },
        redirect: "if_required",
      });


      if (error) {

        setIsLoading(false);

      }
      else if (paymentIntent && paymentIntent.status === "succeeded") {

        dispatch({ type: CATEGORY_ERROR, payload: 0 + 1 });
        setRefresh(Refresh + 1)
        setTimeout(() => {
          handlePaystripe('STripe');
          setIsLoading(false);

        }, 1000)


      } else {

        handlepayFailed()
        setIsLoading(false);

      }
    } catch (error) {

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
        {
        }
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>

  )
}
