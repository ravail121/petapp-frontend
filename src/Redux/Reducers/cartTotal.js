import { UPDATE_CART_TOTAL } from '../Actions/action';

const initialStateTotal = {
    cartTotal: 0,
};


const reducerCartTotal = (state = initialStateTotal, action) => {
    // console.log(action.type, state)

    switch (action.type) {

        case UPDATE_CART_TOTAL:
            // console.log(UPDATE_CART_TOTAL)
            return {
                ...state,
                cartTotal: action.payload,
            };
        default:
            return state;
    }
};

export default reducerCartTotal;
