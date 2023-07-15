import { CATEGORY_ERROR } from '../Actions/action';

const initialStateTotal = {
    errorTrue: false,
};


const reducerCategoryError = (state = initialStateTotal, action) => {
    console.log(action.type, state)

    switch (action.type) {

        case CATEGORY_ERROR:
            // console.log(CATEGORY_ERROR)
            return {
                ...state,
                errorTrue: action.payload,
            };
        default:
            return state;
    }
};

export default reducerCategoryError;
