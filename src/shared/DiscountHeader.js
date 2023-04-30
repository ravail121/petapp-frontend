import support from '../assets/images/icon/support2.svg'

function DiscountHeader(props) {
  return (
    <div class="top-bar two">
      <div class="container-lg container-fluid ">
        <div class="row">
          <div class="col-lg-12 d-flex align-items-center justify-content-md-between justify-content-center">
            <div class="contact-number">
              <a href="tel:+1(234)567-8910"><img src={support} alt="" /> +1 (234) 567-8910</a>
            </div>
            <div class="opening-time text-center">
              <p>Free Shipping On Shipment of ${props.minimum_limit} Or More</p>
            </div>
            <div class="social-area">
              <ul>
                <li><a href="#"><i class="bx bxl-facebook"></i></a></li>
                <li><a href="#"><i class='bx bxl-twitter'></i></a></li>
                <li><a href="#"><i class='bx bxl-pinterest-alt' ></i></a></li>
                <li><a href="#"><i class='bx bxl-instagram' ></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountHeader;