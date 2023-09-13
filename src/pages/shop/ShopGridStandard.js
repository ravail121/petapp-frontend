import { Fragment, useState, useEffect } from 'react';
import Paginator from 'react-hooks-paginator';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { getSortedProducts } from '../../helpers/product';
import SEO from "../../components/seo";
import LayoutOne from '../../layouts/LayoutOne';
// import { Pagination } from "@mui/material";

import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import { url } from '../../environment';
const ShopGridStandard = () => {
    const [layout, setLayout] = useState('grid three-column');
    const [sortType, setSortType] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [filterSortType, setFilterSortType] = useState('');
    const [Allpages, setAllpages] = useState(0);
    const [filterSortValue, setFilterSortValue] = useState('');
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [Products, setProducts] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const { products } = useSelector((state) => state.product);

    const pageLimit = 15;
    let { pathname } = useLocation();

    const getLayout = (layout) => {
        setLayout(layout)
    }

    const getSortParams = (sortType, sortValue) => {
        setSortType(sortType);
        setSortValue(sortValue);
    }

    const getFilterSortParams = (sortType, sortValue) => {
        setFilterSortType(sortType);
        setFilterSortValue(sortValue);
    }

    useEffect(() => {
        let sortedProducts = getSortedProducts(products, sortType, sortValue);
        const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue);
        sortedProducts = filterSortedProducts;
        setSortedProducts(sortedProducts);
        setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }, [offset, products, sortType, sortValue, filterSortType, filterSortValue ]);

useEffect(()=>{
    GetAllProducts()
},[])

    const GetAllProducts = (event, pageNumber, perpage) => {
        // value++
        // setIsLoading(true); window.s
    
        window.scrollTo(0, 0);
        let filteredItems = [];
    
        // setLimits(perpage)
        // let Docline = categories?.map((item) => {
        //   if (item.checked) {
        //     return item.id
        //   }
        // })
    
        // if (RefreshProduct === 1) {
        //   let Array = []
        //   event?.map((item) => {
        //     Array.push({
        //       name: item.name,
        //       checked: true,
        //       id: item.id
        //     })
        //   })
        //   setCategories(Array);
        // }
        // if (event === 'Apply') {
        //   filteredItems = Docline.filter((item) => typeof item !== 'undefined');
        // }
        // else {
        //   filteredItems = []
        // }
    
        // setIsLoading(true);
        fetch(`${url}/user/products/list`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            page: pageNumber ? pageNumber : 1,
            limit: 15,
            search: '',
            categories:[],
            price: '',
          })
        })
          .then((response) => response.json())
          .then((response) => {
    
            // value--
            if (response.statusCode === 200) {
              setProducts(response?.data?.products);
            //   dispatch({
            //     type: UPDATE_PRODUCT_REFRESH, payload: 0
            //   })
              setAllpages(response?.data?.totalCount);
            //   checkLoading()
    
    
            }
          })
          .catch((err) => {
    
          });
      };

    return (
        <Fragment>
            <SEO
                titleTemplate="Shop Page"
                description="Shop page of flone react minimalist eCommerce template."
            />

            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb 
                    pages={[
                        {label: "Home", path: process.env.PUBLIC_URL + "/" },
                        {label: "Shop", path: process.env.PUBLIC_URL + pathname }
                    ]} 
                />

                <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                {/* shop sidebar */}
                                <ShopSidebar products={products} getSortParams={getSortParams} sideSpaceClass="mr-30"/>
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
                                {/* shop topbar default */}
                                {/* <ShopTopbar getLayout={getLayout} getFilterSortParams={getFilterSortParams} productCount={products.length} sortedProductCount={currentData.length} /> */}

                                {/* shop page content default */}
                                <ShopProducts layout={layout} products={Products} />

                                {/* shop product pagination */}
                                <div className="pro-pagination-style text-center mt-30">
                                {/* <Pagination
                      count={Allpages}
                    //   page={Activepage}
                      variant="outlined"
                      shape="rounded"
                      onChange={(e, Value) => {
                        // setActivepage(Value)
                        GetAllProducts(e, Value,);
                      }}
                    /> */}
                                    {/* <Paginator
                                        totalRecords={sortedProducts.length}
                                        pageLimit={pageLimit}
                                        pageNeighbours={2}
                                        setOffset={setOffset}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        pageContainerClass="mb-0 mt-0"
                                        pagePrevText="«"
                                        pageNextText="»"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}


export default ShopGridStandard;