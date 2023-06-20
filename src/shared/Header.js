import React, { useState, useEffect } from "react";
import logo from "../assets/images/fav-icon.png"
import { useNavigate } from "react-router-dom";
import { encode, decode } from 'base-64';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { UPDATE_PRODUCT_REFRESH, UPDATE_SEARCH_CATEGORIES, UPDATE_SEARCH_PRODUCT } from "../Redux/Actions/action";
const handleContactClick = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

function Header({ resetAll, setSelecedCat, Refresh, Name, setName, Counts }) {
  const [isMobileMenuOpenCat, setMobileMenuOpenCat] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [TotalQuantity, setTotalQuantity] = useState(0);
  const navigate = useNavigate()
  const [NameNew, setNameNew] = useState('');
  const dispatch = useDispatch()
  const [SliderVisible, setSliderVisible] = useState(false);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const cartCountNew = useSelector((state) => state.add.cartCount);
  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleToggleMobileMenuOption = () => {
    setMobileMenuOpenCat(!isMobileMenuOpenCat);
  };


  let SearchValue = useSelector((state) => state.productRefresh.productRefresh);

  useEffect(() => {
    fetchCategories();
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSliderVisible(false)

      } else if (window.innerWidth >= 992) {
        setSliderVisible(false)


      } else if (window.innerWidth >= 768) {
        setSliderVisible(true)
        setMobileMenuOpenCat(false)

      } else {
        setSliderVisible(true)
        setMobileMenuOpenCat(false)

      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    var totalQuantity = 0;

    let Data = JSON.parse(localStorage.getItem("myArray"))
    for (var i = 0; i < Data?.length; i++) {

      totalQuantity += Data[i].quantity;

      // console.log(totalQuantity)
    }
    setTotalQuantity(totalQuantity)
    localStorage.setItem("myArray", JSON.stringify(Data));

  }, [Refresh])

  const fetchCategories = () => {
    setLoading(true);
    let url = `http://apis.rubypets.co.uk/user/categories/list`;
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

  const getOnchange = (e) => {
    setNameNew(e)

  }

  const catValue = (id) => {
    console.log(id)
    dispatch({
      type: UPDATE_SEARCH_CATEGORIES, payload: id
    })
    dispatch({
      type: UPDATE_SEARCH_PRODUCT, payload: ''
    })

  }

  const handleKeyPress = (event) => {

    if (event.key === 'Enter') {
      event.preventDefault();
      navigate("/products")
      dispatch({
        type: UPDATE_SEARCH_PRODUCT, payload: NameNew
      })
    }

  };

  return (

    <header className="header-area style-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-logo">
          <a href="index.html">
            <img alt="image" className="img-fluid" src={logo} width={150} />
          </a>
        </div>
        <div className={`main-menu ${isMobileMenuOpen ? "show-menu" : ""}`}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <a href="index.html">
                <img alt="image" src={logo} width={150} />
              </a>
            </div>
            <div className="menu-close-btn">
              <i className="bi bi-x-lg" onClick={handleToggleMobileMenu}></i>
            </div>
          </div>
          <ul className="menu-list">
            <li>
              <Link to="/home">Home</Link>
              {/* <a href="" onClick={() => navigate("/home")}> */}
            </li>
            <li>
              <Link to="/about" onClick={() => dispatch({
                type: UPDATE_SEARCH_PRODUCT, payload: ''
              })}>About</Link>

              {/* <a href="" onClick={() => navigate("/about")}>
                About
              </a> */}
            </li>
            <li>
              <Link to="/products" onClick={() => {
                resetAll ? resetAll() : dispatch({
                  type: UPDATE_PRODUCT_REFRESH, payload: 1
                })
              }}>Products</Link>

              {/* <a href="" onClick={() => navigate("/products")}>
                Products
              </a> */}
            </li>



            <li class="menu-item-has-children">
              <a href="#">Categories</a><i class="bi bi-plus dropdown-icon active" onClick={handleToggleMobileMenuOption}></i>
              <ul class={`sub-menu ${isMobileMenuOpenCat ? "active" : ""}`}>
                {categories && categories.map((item) => {
                  return (
                    <li><Link to={`/products`} onClick={() => catValue(item.id)}>{item.name} </Link></li>
                  )

                })}
                {categories?.length < 1 && <li><a href="#">No Categories Found </a></li>}

              </ul>
            </li>
            {isMobileMenuOpenCat && SliderVisible && categories && categories.map((item) => {
              return (
                <li style={{ paddingLeft: '15px' }}><Link to={`/products`} onClick={() => catValue(item.id)}>{item.name} </Link></li>
              )

            })}
            <li>

              {/* <Link to="/cart" style={{ display: 'flex', gap: '10px' }}>Cart {JSON.parse(localStorage.getItem("myArray")).length > 0 && <span className="badge">{JSON.parse(localStorage.getItem("myArray")).length > 0 ? JSON.parse(localStorage.getItem("myArray")).length : 0}</span>}</Link> */}

              {/* <a href="#">Shop</a> */}
            </li>
            <li>
              <Link to={'/contact'} >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <ul>
            <li className="search-btn">

              <a >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.8914 12.3212L11.3164 9.74312C11.1877 9.63999 11.0332 9.56265 10.8787 9.56265H10.4667C11.1619 8.6603 11.5997 7.52593 11.5997 6.26265C11.5997 3.32358 9.1792 0.900146 6.2437 0.900146C3.28245 0.900146 0.887695 3.32358 0.887695 6.26265C0.887695 9.22749 3.28245 11.6251 6.2437 11.6251C7.4797 11.6251 8.6127 11.2126 9.5397 10.4908V10.9291C9.5397 11.0837 9.5912 11.2384 9.71995 11.3673L12.2692 13.9197C12.5267 14.1775 12.9129 14.1775 13.1447 13.9197L13.8657 13.1978C14.1232 12.9658 14.1232 12.5791 13.8914 12.3212ZM6.2437 9.56265C4.41545 9.56265 2.9477 8.09312 2.9477 6.26265C2.9477 4.45796 4.41545 2.96265 6.2437 2.96265C8.0462 2.96265 9.5397 4.45796 9.5397 6.26265C9.5397 8.09312 8.0462 9.56265 6.2437 9.56265Z" />
                </svg>
              </a>

              <form className="nav__search-form">
                <input
                  type="text"

                  placeholder="Search Products"
                  id="search"
                  onKeyPress={handleKeyPress}
                  onChange={(e) => getOnchange(e.target.value)}
                  autoComplete="off"
                />
                <Link to={`/products`} onClick={() => dispatch({
                  type: UPDATE_SEARCH_PRODUCT, payload: NameNew
                })} style={{ padding: '8px' }} >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.8914 12.3212L11.3164 9.74312C11.1877 9.63999 11.0332 9.56265 10.8787 9.56265H10.4667C11.1619 8.6603 11.5997 7.52593 11.5997 6.26265C11.5997 3.32358 9.1792 0.900146 6.2437 0.900146C3.28245 0.900146 0.887695 3.32358 0.887695 6.26265C0.887695 9.22749 3.28245 11.6251 6.2437 11.6251C7.4797 11.6251 8.6127 11.2126 9.5397 10.4908V10.9291C9.5397 11.0837 9.5912 11.2384 9.71995 11.3673L12.2692 13.9197C12.5267 14.1775 12.9129 14.1775 13.1447 13.9197L13.8657 13.1978C14.1232 12.9658 14.1232 12.5791 13.8914 12.3212ZM6.2437 9.56265C4.41545 9.56265 2.9477 8.09312 2.9477 6.26265C2.9477 4.45796 4.41545 2.96265 6.2437 2.96265C8.0462 2.96265 9.5397 4.45796 9.5397 6.26265C9.5397 8.09312 8.0462 9.56265 6.2437 9.56265Z" />
                  </svg>
                </Link>
              </form>

            </li>

            <li className="cartNumber">
              <Link to="/cart" onClick={() => dispatch({
                type: UPDATE_SEARCH_PRODUCT, payload: ''
              })}>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.6365 5.46266C15.6365 5.12721 15.3541 4.84336 15.0202 4.84336H13.274L10.5262 1.07601C10.2694 0.688956 9.75576 0.611544 9.39624 0.895386C9.01104 1.15342 8.934 1.6695 9.21648 2.03075L11.2452 4.84336H5.21036L7.2391 2.03075C7.52158 1.6695 7.44454 1.15342 7.05934 0.895386C6.69982 0.611544 6.18621 0.688956 5.92941 1.07601L3.18163 4.84336H1.46105C1.10153 4.84336 0.844727 5.12721 0.844727 5.46266V5.87552C0.844727 6.23677 1.10153 6.49481 1.46105 6.49481H1.66649L2.33418 11.2169C2.41122 11.8362 2.92482 12.2749 3.54115 12.2749H12.9144C13.5308 12.2749 14.0444 11.8362 14.1214 11.2169L14.8148 6.49481H15.0202C15.3541 6.49481 15.6365 6.23677 15.6365 5.87552V5.46266ZM8.85696 10.0041C8.85696 10.3654 8.57447 10.6234 8.24063 10.6234C7.88111 10.6234 7.6243 10.3654 7.6243 10.0041V7.1141C7.6243 6.77865 7.88111 6.49481 8.24063 6.49481C8.57447 6.49481 8.85696 6.77865 8.85696 7.1141V10.0041ZM11.7331 10.0041C11.7331 10.3654 11.4507 10.6234 11.1168 10.6234C10.7573 10.6234 10.5005 10.3654 10.5005 10.0041V7.1141C10.5005 6.77865 10.7573 6.49481 11.1168 6.49481C11.4507 6.49481 11.7331 6.77865 11.7331 7.1141V10.0041ZM5.98077 10.0041C5.98077 10.3654 5.69829 10.6234 5.36445 10.6234C5.00492 10.6234 4.74812 10.3654 4.74812 10.0041V7.1141C4.74812 6.77865 5.00492 6.49481 5.36445 6.49481C5.69829 6.49481 5.98077 6.77865 5.98077 7.1141V10.0041Z" />
                </svg>

              </Link>
              {cartCountNew !== 0 && <div className="cartCount"> <b>{JSON.parse(localStorage.getItem("myArray"))?.length > 0 ? cartCountNew : 0}</b></div>}

            </li>

          </ul>
          <div className="sidebar-button mobile-menu-btn ">
            <i className="bi bi-list" onClick={handleToggleMobileMenu}></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
