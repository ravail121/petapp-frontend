export const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT';
export const UPDATE_SEARCH_PRODUCT = 'UPDATE_SEARCH_PRODUCT';
export const UPDATE_SEARCH_CATEGORIES = 'UPDATE_SEARCH_CATEGORIES';
export const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';

export const updateCartCount = (count) => {
    // console.log(count)
    return {
        type: UPDATE_CART_COUNT,
        payload: count,
    };
};

export const updateCartTotal = (count) => {
    // console.log(count)
    return {
        type: UPDATE_CART_TOTAL,
        payload: count,
    };
};
export const searchProduct = (value) => {
    // console.log(value)
    return {
        type: UPDATE_SEARCH_PRODUCT,
        payload: value,
    };
};
export const searchCategories = (value) => {
    console.log(value)
    return {
        type: UPDATE_SEARCH_CATEGORIES,
        payload: value,
    };
};