import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
import { Link } from "react-router-dom";
const Cart = () => {
  let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
  const [CartData, setCartData] = useState([]);
  useEffect(() => {
    setCartData(storedArray);
  }, []);
  const rmoveToCart = (id) => {
    storedArray = storedArray.filter((obj) => obj.id !== id);
    console.log(storedArray);
    setCartData(storedArray);

    localStorage.setItem("myArray", JSON.stringify(storedArray));
  };
  return (
    <>
      <DiscountHeader minimum_limit={80} />
      <Header />

      <div class="cart-section pt-120 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="table-wrapper">
                <table class="eg-table table cart-table">
                  <thead>
                    <tr>
                      <th>Delete</th>
                      <th>Image</th>
                      <th>Food Name</th>
                      <th>Unite Price</th>
                      <th>Discount Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartData &&
                      CartData?.map((item) => {
                        return (
                          <tr>
                            <td data-label="Delete">
                              <div
                                class="delete-icon"
                                onClick={() => rmoveToCart(item.id)}
                              >
                                <i class="bi bi-x"></i>
                              </div>
                            </td>
                            <td data-label="Image">
                              <img src="assets/images/bg/cart-01.png" alt="" />
                            </td>
                            <td data-label="Food Name">
                              <a href="shop-details.html">{item.name}</a>
                            </td>
                            <td data-label="Unite Price">
                              <del>${item.dropshipPrice}</del>
                            </td>
                            <td data-label="Discount Price">${item.rrp}</td>
                            <td data-label="Quantity">
                              <div class="quantity d-flex align-items-center">
                                <div class="quantity-nav nice-number d-flex align-items-center">
                                  <input type="number" value="1" min="1" />
                                </div>
                              </div>
                            </td>
                            <td data-label="Subtotal">$25.006</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-4">
              <div class="coupon-area">
                <div class="cart-coupon-input">
                  <h5 class="coupon-title">Coupon Code</h5>
                  <form class="coupon-input d-flex align-items-center">
                    <input type="text" placeholder="Coupon Code" />
                    <button type="submit">Apply Code</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <table class="table total-table">
                <thead>
                  <tr>
                    <th>Cart Totals</th>
                    <th></th>
                    <th>$128.70</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      <ul class="cost-list text-start">
                        <li>Shipping Fee</li>
                        <li>Total ( tax excl.)</li>
                        <li>Total ( tax incl.)</li>
                        <li>Taxes</li>
                        <li>
                          Shipping Enter your address to view shipping options.{" "}
                          <br /> <a href="#">Calculate shipping</a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul class="single-cost text-center">
                        <li>Fee</li>
                        <li>$15</li>
                        <li></li>
                        <li>$15</li>
                        <li>$15</li>
                        <li>$5</li>
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
              <ul class="cart-btn-group">
                <li>
                  <a href="shop.html" class="primary-btn2 btn-lg">
                    Continue to shopping
                  </a>
                </li>
                <li>
                  <Link to="/checkOut" class="primary-btn3 btn-lg">
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
