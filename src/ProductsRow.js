import product_item2 from './assets/images/icon/cat.svg';
import product_discription2 from './assets/images/bg/h3-category-2.png';
import { useState } from 'react';

function ProductsRow(props) {
  const products = props.products;
  const [index, setIndex] = useState(0)

  const selected_products = (list, i) => {
    const index = i % list.length;
    const values = [];
  
    for (let j = 0; j < 3; j++) {
      const valueIndex = (index + j) % list.length;
      const value = list[valueIndex];
      values.push(value);
    }
  
    return values;
  }

  const listProducts = selected_products(products, index).map((product) =>
    <div class="category-card">
      <a href="shop.html" class="category-card-inner">
        <div class="category-card-front">
          <div class="category-icon">
            <img src={product_item2} alt="" />
          </div>
          <div class="content">
            <h4>{product.name}</h4>
          </div>
        </div>
        <div class="category-card-back">
          <img src={product_discription2} alt="" />
        </div>
      </a>
    </div>
  );
  return (
    <>
      <div class="row mb-60">
        <div class="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div class="section-title3">
            <h2><span>Browse By Categories</span></h2>
          </div>
          <div class="slider-btn-wrap">
            <div class="slider-btn prev-btn-11">
              <i class="bi bi-arrow-left" onClick={() => setIndex(index+1)}></i>
            </div>
            <div class="slider-btn next-btn-11">
              <i class="bi bi-arrow-right" onClick={() => setIndex(index+1)}></i>
            </div>
          </div>
        </div>
      </div>
      {listProducts}
    </>
  );
}

export default ProductsRow;
