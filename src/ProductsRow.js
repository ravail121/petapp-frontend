import product_discription2 from './assets/images/bg/h3-category-2.png';
import { useEffect, useState } from 'react';

function ProductsRow(props) {
   const products = props.products;
   const [startIndex, setStartIndex] = useState(0);
   const [categories , setCategories] = useState([]);

   const [page , setPage] = useState(1);
   const [rows , setRows] = useState(6);

   useEffect(()=>{
    fetchCategories();
   } , [] )

  
  const selected_products = (list, i) => {
    const index = i % list.length;
    const values = [];
  
    for (let j = 0; j < 6; j++) {
      const valueIndex = (index + j) % list.length;
      const value = list[valueIndex];
      values.push(value);
    }
  
    return values;
  }

  const fetchCategories = () => {
    let url = `http://apis.rubypets.co.uk/user/categories/list/${page}/${rows}`;
    console.log(url)
    fetch(url, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      setCategories(data.data.categories);
    })
    .catch(error => {
      console.error(error);
    });
  }



  const listProducts = categories.map((product) => 
      <div className="category-card">
        <a href="shop.html" className="category-card-inner">
          <div className="category-card-front">
            <div className="category-icon">
              <img src={product.imgName} alt="" />
            </div>
            <div className="content">
              <h4>{product.name}</h4>
            </div>
          </div>
          <div className="category-card-back">
            <img src={product_discription2} alt="" />
          </div>
        </a>
      </div>
    )

  return (
    <>
      <div className="row mb-60">
        <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="section-title3">
            <h2><span>Browse By Categories</span></h2>
          </div>
          <div className="slider-btn-wrap">
            <div className="slider-btn prev-btn-11">
              <i className="bi bi-arrow-left" onClick={() => setStartIndex(startIndex-1)}></i>
            </div>
            <div className="slider-btn next-btn-11">
              <i className="bi bi-arrow-right" onClick={() => setStartIndex(startIndex+1)}></i>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex'>
        {listProducts}
      </div>
    </>
  );
}

export default ProductsRow;
