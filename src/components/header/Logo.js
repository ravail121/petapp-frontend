import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div
      className={clsx(logoClass)}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Link to={process.env.PUBLIC_URL + "/"}>
        <h2>
          <b>Ruby Pets</b>
        </h2>
        {/* <img width={100} alt="" src={process.env.PUBLIC_URL + imageUrl} /> */}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string,
};

export default Logo;
