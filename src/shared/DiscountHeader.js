import support from '../assets/images/icon/support2.svg'

function DiscountHeader(props) {
  return (
    <div className="top-bar two">
      <div className="container-lg container-fluid ">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-md-between justify-content-center">
            {/* <div className="contact-number">
              <a href="tel:+1(234)567-8910"><img src={support} alt="" /> +1 (234) 567-8910</a>
            </div> */}
            <div className="opening-time text-center">
              <a href="tel:+1(234)567-8910"><img src={support} alt="" /> +1 (234) 567-8910</a>
            </div>
            <div className="social-area">
              <ul>
                <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                <li><a href="#"><i className='bx bxl-twitter'></i></a></li>
                <li><a href="#"><i className='bx bxl-pinterest-alt' ></i></a></li>
                <li><a href="#"><i className='bx bxl-instagram' ></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountHeader;