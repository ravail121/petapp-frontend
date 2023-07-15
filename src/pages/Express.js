import React, { useState } from 'react';
import { useStripe, useElements, ExpressCheckoutElement } from '@stripe/react-stripe-js';
import { UPDATE_CART_COUNT, UPDATE_CART_TOTAL, CATEGORY_ERROR } from '../Redux/Actions/action';
import { useSelector, useDispatch } from 'react-redux';

const CheckoutPage = ({ handlePaystripe }) => {
    const stripe = useStripe();
    const dispatch = useDispatch();

    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
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
                // handleError();
            } else if (paymentIntent && paymentIntent.status === "succeeded") {
                console.log("Payment succeeded");
                handlePaystripe();
                dispatch({ type: CATEGORY_ERROR, payload: true });

            } else {
                console.log("Payment failed");
                // handleOther();
            }
        } catch (error) {
            console.error(error);
        }
        // const { error } = await stripe.confirmPayment({
        //   elements,
        //   confirmParams: {
        //     // Make sure to change this to your payment completion page
        //     return_url: `${window.location.origin}/home` ,
        //   },
        // });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        // if (error.type === "card_error" || error.type === "validation_error") {
        //   setMessage(error.message);
        // } else {
        //   setMessage("An unexpected error occured.");
        // }

        setIsLoading(false);
    }

    return (
        <div id="checkout-page">
            <ExpressCheckoutElement onConfirm={handleSubmit} />
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
};
export default CheckoutPage;