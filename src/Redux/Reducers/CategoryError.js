import { CATEGORY_ERROR } from '../Actions/action';

const initialStateTotal = {
    errorTrue: 0,
};


const reducerCategoryError = (state = initialStateTotal, action) => {

    switch (action.type) {
        case CATEGORY_ERROR:
            return {
                ...state,
                errorTrue: action.payload,
            };
        default:
            return state;
    }
};

export default reducerCategoryError;
