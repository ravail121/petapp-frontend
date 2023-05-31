// reducer.js
import { UPDATE_CART_COUNT } from '../Actions/action';

const initialState = {
    cartCount: 0,
};

const reducerAdd = (state = initialState, action) => {
    console.log(action.type, state)

    switch (action.type) {

        case UPDATE_CART_COUNT:
            // console.log(UPDATE_CART_COUNT)
            return {
                ...state,
                cartCount: action.payload,
            };
        default:
            return state;
    }
};

export default reducerAdd;
