import React, { Fragment } from "react";

import CheckoutItem from "../../components/checkout-item";

import { Total } from "./styles";
import { useSelector } from "react-redux";
import { cartItemsSelector, cartTotalSelector } from "../../store/cart/selector";
import PaymentForm from "../../components/payment-form";

const Checkout = () => {
  const cartItems = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);

  return (
    <Fragment>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: R{cartTotal}</Total>
      <PaymentForm />
    </Fragment>
  );
};

export default Checkout;
