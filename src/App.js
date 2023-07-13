import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Shop from "./Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Footer from "./shared/Footer";
import About from "./About";
import Product from "./pages/Products";
import ProductDetails from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Payment from './pages/Payment'
import Completion from './pages/Completion'

import { useEffect, useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import Checkout from "./pages/CheckOut";
import Contact from "./pages/Contact";
function App() {
  // const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {

  }, []);
  const stripePromise = loadStripe('pk_test_51NHN8USBku9GQFtqtWrSK4cbXd9UKjVDpMUfANdCwrkr8TM7Tpsjgd6Fy11sHsWrmpzmrvLh6kK0WLTKP9NJbITe00FEj729SF')
  return (
    <>
      <BrowserRouter
      >
        <Routes>
          <Route path="/pay" element={<Payment stripePromise={stripePromise} />} />
          <Route path="/completion" element={<Completion stripePromise={stripePromise} />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productsDetails/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
