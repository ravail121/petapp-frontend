export const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT';

export const updateCartCount = (count) => {
    console.log(count)
    return {
        type: UPDATE_CART_COUNT,
        payload: count,
    };
};