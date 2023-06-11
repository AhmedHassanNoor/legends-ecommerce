import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItemsSelector, isCartOpenSelector } from "../../store/cart/selector";
import { setIsCartOpen } from "../../store/cart/actions";

import Button, { BUTTON_TYPE_CLASSES } from "../button";
import CartItem from "../cart-item";

import { CartDropdownContainer, EmptyMessage, CartItems } from "./styles";

const CartDropdown = () => {
  const cartItems = useSelector(cartItemsSelector);
  const isCartOpen = useSelector(isCartOpenSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef(null);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isCartOpen) {
        console.log("handleClickOutside");
        dispatch(setIsCartOpen(false));
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <CartDropdownContainer ref={ref}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>
        CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
