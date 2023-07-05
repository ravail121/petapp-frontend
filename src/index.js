import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './assets/css/style.scss';
import "./assets/css/all.css"
import "./assets/css/animate.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/boxicons.min.css"
import "./assets/css/bootstrap-icons.css"
import "./assets/css/jquery-ui.css"
import "./assets/css/aos.css"
import "./assets/css/swiper-bundle.css"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import "./assets/css/nice-select.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/jquery.fancybox.min.css"
import "./assets/css/odometer.css"
import "./assets/css/datepicker.min.css"
import "./assets/css/uiicss.css"
import "./assets/css/style.css"
import "./assets/css/slick.css"
import "./assets/css/morphext.css"
import "./assets/css/datepicker.min.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/bootstrap-icons.css"
import "./assets/css/jquery.countdown.css"
import "./assets/css/locomotive-scroll.css"
import "./assets/css/jquery.fancybox.min.css"
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';
const stripePromise = loadStripe('pk_test_51NHN8USBku9GQFtqtWrSK4cbXd9UKjVDpMUfANdCwrkr8TM7Tpsjgd6Fy11sHsWrmpzmrvLh6kK0WLTKP9NJbITe00FEj729SF');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>



  </React.StrictMode>
);
