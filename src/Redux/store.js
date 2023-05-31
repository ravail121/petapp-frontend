import { createStore, combineReducers } from 'redux';
import reducerAdd from '../Redux/Reducers/index';
import reducerCartTotal from '../Redux/Reducers/cartTotal';
import searchValue from './Reducers/SearchProduct'
import searchCategories from './Reducers/changeCategories';
const rootReducer = combineReducers({
    add: reducerAdd,
    cartTotal: reducerCartTotal,
    searchValue: searchValue,
    searchCat: searchCategories
    // add other reducers here if you have more
});

const store = createStore(rootReducer);

export default store;