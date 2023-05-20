import product_discription2 from "./assets/images/bg/h3-category-2.png";
import { useEffect, useState } from "react";

function ProductsRow(props) {
  const products = props.products;
  const [startIndex, setStartIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(6);

  useEffect(() => {
    fetchCategories();
  }, [page]);

  const selected_products = (list, i) => {
    const index = i % list.length;
    const values = [];

    for (let j = 0; j < 6; j++) {
      const valueIndex = (index + j) % list.length;
      const value = list[valueIndex];
      values.push(value);
    }

    return values;
  };

  const fetchCategories = () => {
    setLoading(true);
    let url = `http://apis.rubypets.co.uk/user/categories/list/${page}/${rows}`;
    console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Categories has been fetched Succesfully") {
          setCategories(data?.data?.categories);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const listProducts = categories.map((product) => (
    <div className="category-card col-lg-2 col-md-4 col-sm-6 mb-5">
      <a href="shop.html" className="category-card-inner">
        <div className="category-card-front">
          <div className="category-icon">
            {/* <img width={126} height={126} alt="" /> */}
          </div>
          <div className="content">
            <h4>{product.name}</h4>
          </div>
        </div>
        <div className="category-card-back">
          <img width={126} height={126} src={product.imageName} alt="" />
        </div>
      </a>
    </div>
  ));

  return (
    <>
      <div className="row mb-60">
        <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="section-title3">
            <h2>
              <span>Browse By Categories</span>
            </h2>
          </div>
          <div className="slider-btn-wrap">
            <div className="slider-btn prev-btn-11">
              <i
                className="bi bi-arrow-left"
                onClick={() => setPage(page - 1)}
              ></i>
            </div>
            <div className="slider-btn next-btn-11">
              <i
                className="bi bi-arrow-right"
                onClick={() => setPage(page + 1)}
              ></i>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="swiper h3-category-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="category-card">
                  <a href="shop.html" className="category-card-inner">
                    <div className="category-card-front">
                      <div className="category-icon">
                        <img src="assets/images/icon/dog.svg" alt="" />
                      </div>
                      <div className="content">
                        <h4>Dog Supplies</h4>
                      </div>
                    </div>
                    <div className="category-card-back">
                      <img src="assets/images/bg/h3-category-1.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-card">
                  <a href="shop.html" className="category-card-inner">
                    <div className="category-card-front">
                      <div className="category-icon">
                        <img src="assets/images/icon/cat.svg" alt="" />
                      </div>
                      <div className="content">
                        <h4>Cat Supplies</h4>
                      </div>
                    </div>
                    <div className="category-card-back">
                      <img src="assets/images/bg/h3-category-2.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-card">
                  <a href="shop.html" className="category-card-inner">
                    <div className="category-card-front">
                      <div className="category-icon">
                        <img src="assets/images/icon/bird.svg" alt="" />
                      </div>
                      <div className="content">
                        <h4>Bird Supplies</h4>
                      </div>
                    </div>
                    <div className="category-card-back">
                      <img src="assets/images/bg/h3-category-4.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-card">
                  <a href="shop.html" className="category-card-inner">
                    <div className="category-card-front">
                      <div className="category-icon">
                        <img src="assets/images/icon/Rabbit.svg" alt="" />
                      </div>
                      <div className="content">
                        <h4>Small Animal</h4>
                      </div>
                    </div>
                    <div className="category-card-back">
                      <img src="assets/images/bg/h3-category-5.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-card">
                  <a href="shop.html" className="category-card-inner">
                    <div className="category-card-front">
                      <div className="category-icon">
                        <img src="assets/images/icon/Acces.svg" alt="" />
                      </div>
                      <div className="content">
                        <h4>Accessories</h4>
                      </div>
                    </div>
                    <div className="category-card-back">
                      <img src="assets/images/bg/h3-category-6.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-card">
                  <a href="shop.html" className="category-card-inner">
                    <div className="category-card-front">
                      <div className="category-icon">
                        <img src="assets/images/icon/fish.svg" alt="" />
                      </div>
                      <div className="content">
                        <h4>Fish Supplies</h4>
                      </div>
                    </div>
                    <div className="category-card-back">
                      <img src="assets/images/bg/h3-category-3.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {loading ? (
        <div
          className="row text-align-center"
          style={{ display: "block", textAlign: "center" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : categories.length > 0 ? (
        // categories
        <div className="maincategory">{listProducts}</div>
      ) : (
        <div className="row" style={{ display: "block", textAlign: "center" }}>
          <h2>No Categories found</h2>
        </div>
      )}
    </>
  );
}

export default ProductsRow;
