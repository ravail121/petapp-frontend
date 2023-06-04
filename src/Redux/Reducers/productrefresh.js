// reducer.js
import { UPDATE_PRODUCT_REFRESH } from '../Actions/action';

const initialState = {
    productRefresh: 0,
};

const reducerAdd = (state = initialState, action) => {
    console.log(action.type, state)

    switch (action.type) {

        case UPDATE_PRODUCT_REFRESH:
            // console.log(UPDATE_PRODUCT_REFRESH)
            return {
                ...state,
                productRefresh: action.payload,
            };
        default:
            return state;
    }
};

export default reducerAdd;
