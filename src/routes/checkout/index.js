import React from "react";

import CheckoutItem from "../../components/checkout-item";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./styles";
import { useSelector } from "react-redux";
import { isCartItemsSelector, isCartTotalSelector } from "../../store/cart/selector";

const Checkout = () => {
  const cartItems = useSelector(isCartItemsSelector);
  const cartTotal = useSelector(isCartTotalSelector);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
