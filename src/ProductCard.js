import cart from "./assets/images/icon/Icon-cart3.svg";
import favaourite from "./assets/images/icon/Icon-favorites3.svg";
import product_image from "./assets/images/bg/category/h3-collection-10.png";

function ProductCard(props) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="collection-card">
        <div className={`${props.additional_classes}`}>
          <span>{props.additional_text}</span>
        </div>
        <div className="collection-img">
          <img className="img-gluid" src={product_image} alt="" />
          <div className="view-dt-btn">
            <div className="plus-icon">
              <i className="bi bi-plus"></i>
            </div>
            <a href="shop-details.html">View Details</a>
          </div>
          <ul className="cart-icon-list">
            <li>
              <a href="cart.html">
                <img src={cart} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={favaourite} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="collection-content text-center">
          <h4>
            <a href="shop-details.html">{props.name}</a>
          </h4>
          <div className="price">
            <h6>${props.price}</h6>
            <del>${props.orignal_price}</del>
          </div>
          <div className="review">
            <ul>
              {Array.from({ length: props.rating }).map((r) => (
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
              ))}
              {props.rating < 5 &&
                Array.from({ length: 5 - props.rating }).map((r) => (
                  <li>
                    <i className="bi bi-star"></i>
                  </li>
                ))}
            </ul>
            <span>({props.total_reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
