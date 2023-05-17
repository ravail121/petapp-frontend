import React, { useEffect } from "react";
import Header from "../shared/Header";
import DiscountHeader from "../shared/DiscountHeader";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/icon/Icon-cart3.svg";
import fav3 from "../assets/images/icon/Icon-favorites3.svg";
import img2 from "../assets/images/bg/category/h3-collection-02.png";
import { Pagination } from "@mui/material";

import { url } from "../environment";
const Product = () => {
  const navigate = useNavigate();
  const [IsLoading, setIsLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    GetAllProducts();
  }, []);

  const GetAllProducts = (e, pageNumber) => {
    setIsLoading(true);
    fetch(`${url}/user/products/list/${pageNumber ? pageNumber : 1}/6`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Products ----->>>", response);
        if (response.message === "Products has been fetched Succesfully") {
          setProducts(response?.data?.products);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DiscountHeader minimum_limit={80} />
      <Header navigate={navigate} />
      <div class="shop-page pt-120 mb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row g-4 justify-content-center">
                {IsLoading ? (
                  <div
                    className="row text-align-center"
                    style={{ display: "block", textAlign: "center" }}
                  >
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : products.length > 0 ? (
                  products &&
                  products?.map((item) => {
                    return (
                      <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="collection-card">
                          <div class="offer-card">
                            <span>Offer</span>
                          </div>
                          <div class="collection-img">
                            <img class="img-gluid" src={img2} alt="" />
                            <div class="view-dt-btn">
                              <div class="plus-icon">
                                <i class="bi bi-plus"></i>
                              </div>
                              <a href="shop-details.html">View Details</a>
                            </div>
                            <ul class="cart-icon-list">
                              <li>
                                <a href="cart.html">
                                  <img src={img1} alt="" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src={fav3} alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="collection-content text-center">
                            <h4>
                              <a onClick={() => navigate("/productsDetails")}>
                                Whiskas Cat Food Core Tuna
                              </a>
                            </h4>
                            <div class="price">
                              <h6>$25.00</h6>
                              <del>$30.00</del>
                            </div>
                            <div class="review">
                              <ul>
                                <li>
                                  <i class="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i class="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i class="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i class="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i class="bi bi-star-fill"></i>
                                </li>
                              </ul>
                              <span>(50)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h2>No Products found</h2>
                )}
              </div>
              <div class="row pt-70">
                <div class="col-lg-12 d-flex justify-content-center">
                  <div class="paginations-area">
                    <Pagination
                      // count={AllPages}
                      variant="outlined"
                      shape="rounded"
                      onChange={(e, Value) => {
                        GetAllProducts(e, Value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
