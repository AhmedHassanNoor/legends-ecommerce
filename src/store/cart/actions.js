import { CART_ACTION_TYPES } from "./types";
import { isCartOpenSelector, isCartItemsSelector } from "./selector";
import { createAction } from "../../utils/reducer";
import { useSelector } from "react-redux";

/*
 *
 *  Helper functions
 *
 */

const addCartItem = (productToAdd, cartItems) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const updateCartItemsReducer = (cartItems) => {
  const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

  const payload = {
    cartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  };

  return payload;
};

const removeCartItem = (cartItemToRemove, cartItems) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

const clearCartItem = (cartItemToClear, cartItems) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

/*
 *
 *  Cart Actions
 *
 */

export const setIsCartOpen = (isCartOpen) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen);

export const addItemToCart = (productToAdd, cartItems) => {
  const newCartItems = addCartItem(productToAdd, cartItems);
  const updatedCartItems = updateCartItemsReducer(newCartItems);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const clearItemFromCart = (cartItemToClear, cartItems) => {
  const newCartItems = clearCartItem(cartItemToClear, cartItems);
  const updatedCartItems = updateCartItemsReducer(newCartItems);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const removeItemToCart = (cartItemToRemove, cartItems) => {
  const newCartItems = removeCartItem(cartItemToRemove, cartItems);
  const updatedCartItems = updateCartItemsReducer(newCartItems);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};
