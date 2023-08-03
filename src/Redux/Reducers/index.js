import { UPDATE_CART_COUNT } from '../Actions/action';

const initialState = {
    cartCount: 0,
};

const reducerAdd = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_CART_COUNT:
            return {
                ...state,
                cartCount: action.payload,
            };
        default:
            return state;
    }
};

export default reducerAdd;
