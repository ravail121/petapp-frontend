import { UPDATE_SEARCH_PRODUCT } from '../Actions/action';

const initialState = {
    value: '',
};

const searchProduct = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_SEARCH_PRODUCT:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
};

export default searchProduct;
