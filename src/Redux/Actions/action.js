export const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT';
export const UPDATE_PRODUCT_REFRESH = 'UPDATE_PRODUCT_REFRESH';
export const UPDATE_SEARCH_PRODUCT = 'UPDATE_SEARCH_PRODUCT';
export const UPDATE_SEARCH_CATEGORIES = 'UPDATE_SEARCH_CATEGORIES';
export const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';
export const CATEGORY_ERROR = 'CATEGORY_ERROR';

export const updateCartCount = (count) => {
    // 
    return {
        type: UPDATE_CART_COUNT,
        payload: count,
    };
};
export const updateProductRefresh = (count) => {
    // 
    return {
        type: UPDATE_PRODUCT_REFRESH,
        payload: count,
    };
};


export const updateCartTotal = (count) => {
    // 
    return {
        type: UPDATE_CART_TOTAL,
        payload: count,
    };
};
export const searchProduct = (value) => {
    // 
    return {
        type: UPDATE_SEARCH_PRODUCT,
        payload: value,
    };
};
export const searchCategories = (value) => {
    // 
    return {
        type: UPDATE_SEARCH_CATEGORIES,
        payload: value,
    };
};
export const categoryError = (value) => {
    // 
    return {
        type: CATEGORY_ERROR,
        payload: value,
    };
};