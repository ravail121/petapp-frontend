import { CATEGORY_ERROR } from '../Actions/action';

const initialStateTotal = {
    cartTotal: false,
};


const reducerCategoryError = (state = initialStateTotal, action) => {
    // console.log(action.type, state)

    switch (action.type) {

        case CATEGORY_ERROR:
            // console.log(UPDATE_CART_TOTAL)
            return {
                ...state,
                cartTotal: action.payload,
            };
        default:
            return state;
    }
};

export default reducerCategoryError;
