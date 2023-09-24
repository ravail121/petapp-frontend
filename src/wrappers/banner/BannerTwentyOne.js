import PropTypes from "prop-types";
import { url } from "../../environment";

import { useState, useEffect } from "react";

import clsx from "clsx";
import bannerData from "../../data/banner/banner-twenty-one.json";
import BannerTwentyOneSingle from "../../components/banner/BannerTwentyOneSingle.js";

const BannerTwentyOne = ({ spaceTopClass, spaceBottomClass }) => {
  const [Categories, setCategories] = useState();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    // setLoading(true);
    // setIsLoading(true);

    let urlnew = `${url}/user/categories/list`;

    fetch(urlnew, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Categories has been fetched Succesfully") {
          setCategories(data?.data?.categories);
        }
      })
      .catch((error) => {});
  };

  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {Categories &&
            Categories?.map((single, key) => (
              <div className="col-lg-2 col-md-2" key={key}>
                <BannerTwentyOneSingle data={single} spaceBottomClass="mb-30" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

BannerTwentyOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BannerTwentyOne;
