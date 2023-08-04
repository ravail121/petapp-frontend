import { PRODUCT_DETAIL } from '../Actions/action';

const initialState = {
    value: {},
};

const productDetail = (state = initialState, action) => {

    switch (action.type) {

        case PRODUCT_DETAIL:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
};

export default productDetail;
