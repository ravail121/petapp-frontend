import React from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
const Checkout = () => {
  return (
    <>
      <DiscountHeader minimum_limit={80} />
      <Header />
      <div class="checkout-section pt-120 pb-120">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-7">
              <div class="form-wrap box--shadow mb-30">
                <h4 class="title-25 mb-20">Billing Details</h4>
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-inner">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-inner">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <label>Country / Region</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your country name"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <label>Street Address</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="House and street name"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <select style={{ display: "none" }}>
                          <option>Town / City</option>
                          <option>Dhaka</option>
                          <option>Saidpur</option>
                          <option>Newyork</option>
                        </select>
                        <div class="nice-select" tabindex="0">
                          <span class="current">Town / City</span>
                          <ul class="list">
                            <li
                              data-value="Town / City"
                              class="option selected"
                            >
                              Town / City
                            </li>
                            <li data-value="Dhaka" class="option">
                              Dhaka
                            </li>
                            <li data-value="Saidpur" class="option">
                              Saidpur
                            </li>
                            <li data-value="Newyork" class="option">
                              Newyork
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <input
                          type="text"
                          name="fname"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <label>Additional Information</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <input
                          type="text"
                          name="postcode"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <textarea
                          name="message"
                          placeholder="Order Notes (Optional)"
                          rows="6"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="form-wrap box--shadow">
                <h4 class="title-25 mb-20">Ship to a Different Address?</h4>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-inner">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-inner">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-inner">
                        <textarea
                          name="message"
                          placeholder="Order Notes (Optional)"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <aside class="col-lg-5">
              <div class="added-product-summary mb-30">
                <h5 class="title-25 checkout-title">Order Summary</h5>
                <ul class="added-products">
                  <li class="single-product d-flex justify-content-start">
                    <div class="product-img">
                      <img src="assets/images/bg/check-out-01.png" alt="" />
                    </div>
                    <div class="product-info">
                      <h5 class="product-title">
                        <a href="#">Whiskas Cat Food Core Tuna</a>
                      </h5>
                      <div class="product-total d-flex align-items-center">
                        <div class="quantity">
                          <div class="quantity d-flex align-items-center">
                            <div class="quantity-nav nice-number d-flex align-items-center">
                              <input type="number" value="1" min="1" />
                            </div>
                          </div>
                        </div>
                        <strong>
                          {" "}
                          <i class="bi bi-x-lg px-2"></i>
                          <span class="product-price">$25.00</span>
                        </strong>
                      </div>
                    </div>
                    <div class="delete-btn">
                      <i class="bi bi-x-lg"></i>
                    </div>
                  </li>
                  <li class="single-product d-flex justify-content-start">
                    <div class="product-img">
                      <img src="assets/images/bg/check-out-02.png" alt="" />
                    </div>
                    <div class="product-info">
                      <h5 class="product-title">
                        <a href="#">Friskies Kitten Discoveries.</a>
                      </h5>
                      <div class="product-total d-flex align-items-center">
                        <div class="quantity">
                          <div class="quantity d-flex align-items-center">
                            <div class="quantity-nav nice-number d-flex align-items-center">
                              <input type="number" value="1" min="1" />
                            </div>
                          </div>
                        </div>
                        <strong>
                          {" "}
                          <i class="bi bi-x-lg px-2"></i>
                          <span class="product-price">$39.00</span>
                        </strong>
                      </div>
                    </div>
                    <div class="delete-btn">
                      <i class="bi bi-x-lg"></i>
                    </div>
                  </li>
                  <li class="single-product d-flex justify-content-start">
                    <div class="product-img">
                      <img src="assets/images/bg/check-out-03.png" alt="" />
                    </div>
                    <div class="product-info">
                      <h5 class="product-title">
                        <a href="#">Natural Dog Fresh Food.</a>
                      </h5>
                      <div class="product-total d-flex align-items-center">
                        <div class="quantity d-flex align-items-center">
                          <div class="quantity-nav nice-number d-flex align-items-center">
                            <input type="number" value="1" min="1" />
                          </div>
                        </div>
                        <strong>
                          {" "}
                          <i class="bi bi-x-lg px-2"></i>
                          <span class="product-price">$18.00</span>
                        </strong>
                      </div>
                    </div>
                    <div class="delete-btn">
                      <i class="bi bi-x-lg"></i>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="summery-card cost-summery mb-30">
                <table class="table cost-summery-table">
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                      <th>$128.70</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="tax">Tax</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td>Total ( tax excl.)</td>
                      <td>$15</td>
                    </tr>
                    <tr>
                      <td>Total ( tax incl.)</td>
                      <td>$15</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="summery-card total-cost mb-30">
                <table class="table cost-summery-table total-cost">
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th>$162.70</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <form class="payment-form">
                <div class="payment-methods mb-50">
                  <div class="form-check payment-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Check payments
                    </label>
                    <p class="para">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div class="form-check payment-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked=""
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Cash on delivery
                    </label>
                    <p class="para">Pay with cash upon delivery.</p>
                  </div>
                  <div class="form-check payment-check paypal d-flex flex-wrap align-items-center">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      checked=""
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      PayPal
                    </label>
                    <img src="assets/images/bg/payonert.png" alt="" />
                    <a href="#" class="about-paypal">
                      What is PayPal
                    </a>
                  </div>
                  <div class="payment-form-bottom d-flex align-items-start">
                    <input type="checkbox" id="terms" />
                    <label for="terms">
                      I have read and agree to the website <br />{" "}
                      <a href="#">Terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div class="place-order-btn">
                  <button type="submit" class="primary-btn1 lg-btn">
                    Place Order
                  </button>
                </div>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
