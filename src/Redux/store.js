import { createStore, combineReducers } from 'redux';
import reducerAdd from '../Redux/Reducers/index';
import reducerCartTotal from '../Redux/Reducers/cartTotal';
import searchValue from './Reducers/SearchProduct'
import searchCategories from './Reducers/changeCategories';
import searchProduct from './Reducers/productrefresh'
const rootReducer = combineReducers({
    add: reducerAdd,
    cartTotal: reducerCartTotal,
    searchValue: searchValue,
    searchCat: searchCategories,
    productRefresh: searchProduct
    // add other reducers here if you have more
});

const store = createStore(rootReducer);

export default store;