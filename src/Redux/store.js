import { createStore, combineReducers } from 'redux';
import reducerAdd from '../Redux/Reducers/index';
import reducerCartTotal from '../Redux/Reducers/cartTotal';

const rootReducer = combineReducers({
    add: reducerAdd,
    cartTotal: reducerCartTotal,
    // add other reducers here if you have more
});

const store = createStore(rootReducer);

export default store;