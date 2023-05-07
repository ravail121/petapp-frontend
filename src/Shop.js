import banner_bg from './assets/images/bg/inner-banner-vec.png';
import banner from './assets/images/bg/inner-banner-img.png';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import Header from './shared/Header';

function Shop() {
  const navigate = useNavigate();
  return (
    <>
      <Header navigate={navigate}/>
      <div className="inner-page-banner">
        <div className="breadcrumb-vec-btm">
          <img className="img-fluid" src="assets/images/bg/inner-banner-btm-vec.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-6 align-items-center">
              <div className="banner-content">
                <h1>Shop</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="" onClick={() => navigate('/home')}>Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </nav>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="banner-img d-lg-block d-none">
                <div className="banner-img-bg">
                  <img className="img-fluid" src={banner_bg} alt="" />
                </div>
                <img className="img-fluid" src={banner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-page pt-120 mb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="shop-sidebar">
                        {/* <div className="shop-widget">
                            <h5 className="shop-widget-title">Price Range</h5>
                            <div className="range-widget">
                                <div id="slider-range" className="price-filter-range"></div>
                                <div className="mt-25 d-flex justify-content-between gap-4">
                                    <input type="number" min={100} max={499} oninput="validity.valid||(value='100');" id="min_price" className="price-range-field" />
                                    <input type="number" min={100} max={500} oninput="validity.valid||(value='500');" id="max_price" className="price-range-field" />
                                </div>
                            </div>
                        </div>
                        <div className="shop-widget">
                            <div className="check-box-item">
                                <h5 className="shop-widget-title">Category</h5>
                                <div className="checkbox-container">
                                    <label className="containerss">Food Toppers
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Milk Replacers
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Canned Food
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Veterinary Authorized Diets
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Bones & Rawhide
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div> */}

                        <div className="shop-widget">
                            <div className="check-box-item">
                                <h5 className="shop-widget-title">Brand</h5>
                                <div className="checkbox-container">
                                    <label className="containerss">Fancy Feast
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Gentle Giants
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Purina Pro Plan
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Stella & Chewy's
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Pet Dreams
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* <div className="shop-widget">
                            <div className="check-box-item">
                                <h5 className="shop-widget-title">Health Consideration</h5>
                                <div className="checkbox-container">
                                    <label className="containerss">Brain Development
                                        <input type="checkbox /" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Bladder
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Allergies
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Bone Development
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Dehydration
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="shop-widget">
                            <div className="check-box-item">
                                <h5 className="shop-widget-title">Flavor</h5>
                                <div className="checkbox-container">
                                    <label className="containerss">Beef 
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Chicken
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Fish
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Duck
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="containerss">Other
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* shop */}
                <div className="col-lg-9">
                    <div className="row g-4 justify-content-center">
                      <ProductCard name={'abc'} price={123} orignal_price={333} total_reviews={23} rating={5}/>
                      <ProductCard name={'xyz'} price={678} orignal_price={666} total_reviews={34} rating={3} additional_classes={'offer-card sale'} additional_text={'Hot Sale'}/>
                      <ProductCard name={'Testing'} price={789} orignal_price={999} total_reviews={39} rating={5} additional_classes={'offer-card offer'} additional_text={'Disscount'}/>
                    </div>
                    <div className="row pt-70">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="paginations-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                      <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-left-short"></i></a></li>
                                      <li className="page-item active"><a className="page-link" href="#">01</a></li>
                                      <li className="page-item"><a className="page-link" href="#">02</a></li>
                                      <li className="page-item"><a className="page-link" href="#">03</a></li>
                                      <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-right-short"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop;