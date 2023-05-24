import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
import { message } from 'antd';

import { Link } from "react-router-dom";
const Cart = () => {
  let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
  const [count, setCount] = useState(1);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [contextHolder] = message.useMessage();

  const [CartData, setCartData] = useState([]);
  useEffect(() => {
    setCartData(storedArray);
    if (storedArray.length > 0) {
      checBalance();
    }
  }, []);
  const calculateTotalPrice = (product, index) => {
    CartData[index]["totalPrice"] = product.quantity * product.dropshipPrice;

    return product.quantity * product.dropshipPrice;
    // checBalance();
  };
  // const updatedProducts = CartData.map((product) => ({
  //   ...product,
  //   totalPrice: calculateTotalPrice(product),
  // }));

  const totalSum = CartData.reduce(
    (sum, product) => sum + product.totalPrice,
    0
  );

  const checBalance = () => {
    const totalPrice = storedArray.reduce(
      (accumulator, product) => accumulator + Number(product.dropshipPrice),
      0
    );
    // console.log(totalPrice * count);
    setTotalPrice(totalPrice);
  };

  const rmoveToCart = (id) => {
    storedArray = storedArray.filter((obj) => obj.id !== id);
    // console.log(storedArray);
    setCartData(storedArray);

    localStorage.setItem("myArray", JSON.stringify(storedArray));
    checBalance();
  };
  const getOnChangeCounter = (value, index) => {
    let obj = CartData;
    obj[index]["quantity"] = value;
    // console.log(obj);
    setCartData(obj);
  };
  return (
    <>
      {/* {contextHolder} */}

      <DiscountHeader minimum_limit={80} />
      <Header />
      <div class="inner-page-banner" style={{ padding: '120px 0px' }}>
        <div class="breadcrumb-vec-btm">
          <img class="img-fluid" src="assets/images/bg/inner-banner-btm-vec.png" alt="" />
        </div>
        <div class="container">
          <div class="row justify-content-center align-items-center text-center">
            <div class="col-lg-6 align-items-center">
              <div class="banner-content">
                <h1>Cart</h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Cart</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-img d-lg-block d-none">
                <div class="banner-img-bg">
                  <img class="img-fluid" src="https://demo.egenslab.com/html/scooby/preview/assets/images/bg/inner-banner-img.png" alt="" />
                </div>
                {/* <img class="img-fluid" src="assets/images/bg/inner-banner-img.png" alt=""/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-section pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-wrapper">
                <table className="eg-table table cart-table">
                  <thead>
                    <tr>
                      <th>Delete</th>
                      <th>Image</th>
                      <th>Food Name</th>
                      <th>Unite Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartData &&
                      CartData?.map((item, index) => {
                        return (
                          <tr>
                            <td data-label="Delete">
                              <div
                                className="delete-icon"
                                onClick={() => rmoveToCart(item.id)}
                              >
                                <i className="bi bi-x"></i>
                              </div>
                            </td>
                            <td data-label="Image">
                              <img src={item.imageName} alt="" />
                            </td>
                            <td data-label="Food Name">
                              <a href="shop-details.html">{item.name}</a>
                            </td>

                            <td data-label="Discount Price">
                              ${Number(item.dropshipPrice).toFixed(2)}
                            </td>
                            <td data-label="Quantity">
                              <div className="quantity d-flex align-items-center">
                                <div className="quantity-nav nice-number d-flex align-items-center">
                                  <button
                                    disabled={item.quantity === 1}
                                    onClick={() => {
                                      setCount(count - 1);
                                      getOnChangeCounter(
                                        item.quantity - 1,
                                        index
                                      );
                                    }}
                                  >
                                    -
                                  </button>{" "}
                                  <input
                                    style={{ width: "24px" }}
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                  />
                                  <button
                                    onClick={() => {
                                      setCount(count + 1);

                                      getOnChangeCounter(
                                        item.quantity + 1,
                                        index
                                      );
                                      // checBalance();
                                    }}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td data-label="Subtotal">
                              ${calculateTotalPrice(item, index).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {/* <div className="col-lg-4">
              <div className="coupon-area">
                <div className="cart-coupon-input">
                  <h5 className="coupon-title">Coupon Code</h5>
                  <form className="coupon-input d-flex align-items-center">
                    <input type="text" placeholder="Coupon Code" />
                    <button type="submit">Apply Code</button>
                  </form>
                </div>
              </div>
            </div> */}
            <div className="col-lg-8">
              <table className="table total-table">
                <thead>
                  <tr>
                    <th>Cart Totals</th>
                    <th></th>
                    <th>${totalSum ? totalSum.toFixed(2) : 0}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      <ul className="cost-list text-start">
                        <li>Shipping Fee</li>
                        <li>Total ( tax excl.)</li>
                        <li>Total ( tax incl.)</li>
                        <li>Taxes</li>
                        {/* <li>
                          Shipping Enter your address to view shipping options.{" "}
                          <br /> <a href="#">Calculate shipping</a>
                        </li> */}
                      </ul>
                    </td>
                    <td>
                      <ul className="single-cost text-center">
                        <li>Fee</li>
                        <li>$15</li>
                        <li></li>
                        <li>$15</li>
                        <li>$15</li>
                        {/* <li>$5</li> */}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td></td>
                    <td>$162.70</td>
                  </tr>
                </tbody>
              </table>
              <ul className="cart-btn-group">
                <li>
                  <a href="shop.html" className="primary-btn2 btn-lg">
                    Continue to shopping
                  </a>
                </li>
                <li>
                  <Link to="/checkOut" className="primary-btn3 btn-lg">
                    Proceed to Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
