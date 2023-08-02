import { UPDATE_PRODUCT_REFRESH } from '../Actions/action';

const initialState = {
    productRefresh: 0,
};

const reducerAdd = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_PRODUCT_REFRESH:
            return {
                ...state,
                productRefresh: action.payload,
            };
        default:
            return state;
    }
};

export default reducerAdd;
