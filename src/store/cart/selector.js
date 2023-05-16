import { createSelector } from "reselect";

const cartReducer = (state) => state.cart;

export const cartSelector = createSelector([cartReducer], (cart) => cart);

export const isCartOpenSelector = createSelector([cartReducer], (cart) => cart.isCartOpen);

export const isCartCountSelector = createSelector([cartReducer], (cart) => cart.cartCount);

export const isCartTotalSelector = createSelector([cartReducer], (cart) => cart.cartTotal);

export const isCartItemsSelector = createSelector([cartReducer], (cart) => cart.cartItems);
