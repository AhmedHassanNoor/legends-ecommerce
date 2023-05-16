import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isCartItemsSelector } from "../../store/cart/selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button";
import CartItem from "../cart-item";

import { CartDropdownContainer, EmptyMessage, CartItems } from "./styles";

const CartDropdown = () => {
  const cartItems = useSelector(isCartItemsSelector);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
