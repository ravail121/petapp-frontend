import { UPDATE_SEARCH_CATEGORIES } from '../Actions/action';

const initialState = {
    value: '',
};

const searchCategories = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_SEARCH_CATEGORIES:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
};

export default searchCategories;
