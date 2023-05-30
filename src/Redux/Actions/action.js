export const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT';
export const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';

export const updateCartCount = (count) => {
    // console.log(count)
    return {
        type: UPDATE_CART_COUNT,
        payload: count,
    };
};

export const updateCartTotal = (count) => {
    console.log(count)
    return {
        type: UPDATE_CART_TOTAL,
        payload: count,
    };
};