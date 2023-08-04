import { createStore, combineReducers } from 'redux';
import reducerAdd from '../Redux/Reducers/index';
import reducerCartTotal from '../Redux/Reducers/cartTotal';
import searchValue from './Reducers/SearchProduct'
import searchCategories from './Reducers/changeCategories';
import searchProduct from './Reducers/productrefresh'
import reducerCategoryError from './Reducers/CategoryError';
import productDetail from './Reducers/productDetails';
const rootReducer = combineReducers({
    add: reducerAdd,
    cartTotal: reducerCartTotal,
    searchValue: searchValue,
    productDetail: productDetail,
    searchCat: searchCategories,
    productRefresh: searchProduct,
    categoryError: reducerCategoryError,
});

const store = createStore(rootReducer);

export default store;