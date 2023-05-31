// reducer.js
import { UPDATE_SEARCH_CATEGORIES } from '../Actions/action';

const initialState = {
    value: '',
};

const searchCategories = (state = initialState, action) => {
    console.log(action.type, state)

    switch (action.type) {

        case UPDATE_SEARCH_CATEGORIES:
            // console.log(UPDATE_SEARCH_PRODUCT)
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
};

export default searchCategories;
