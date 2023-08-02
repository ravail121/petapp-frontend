import { UPDATE_CART_TOTAL } from '../Actions/action';

const initialStateTotal = {
    cartTotal: 0,
};


const reducerCartTotal = (state = initialStateTotal, action) => {

    switch (action.type) {

        case UPDATE_CART_TOTAL:
            return {
                ...state,
                cartTotal: action.payload,
            };
        default:
            return state;
    }
};

export default reducerCartTotal;
