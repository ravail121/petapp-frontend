import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { url } from "../../../environment";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setSearchCat } from "../../../store/slices/search_Cat";
import { setSelectCat } from "../../../store/slices/selected-cat";

const MobileNavMenu = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [Categories, setCategories] = useState([]);
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
        if (data.success) {
          let Array = [];
          // data?.data?.categories?.map((item) => {
          //   Array.push({
          //     name: item.name,
          //     checked: item.id === Number(SearchCat) ? true : false,
          //     id: item.id
          //   })
          // })

          setCategories(data?.data?.categories);
          // setLoading(false);
          // GetAllProducts(Array);
        }
      })
      .catch((error) => {});
  };

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/about"}>{t("about")}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("products")}
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("Categories")}</Link>
          <ul className="sub-menu">
            {Categories &&
              Categories.map((item) => {
                return (
                  <li>
                    <Link
                      onClick={() => {
                        dispatch(setSearchCat(""));
                        dispatch(setSelectCat(item.id));
                      }}
                      to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                    >
                      {t(item.name)}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("contact_us")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
