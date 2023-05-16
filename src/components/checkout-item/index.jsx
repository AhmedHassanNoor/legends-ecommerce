import React from "react";
import { addItemToCart, clearItemFromCart, removeItemToCart } from "../../store/cart/actions";
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { isCartItemsSelector } from "../../store/cart/selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(isCartItemsSelector);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem, cartItems));
  const addItemHandler = () => dispatch(addItemToCart(cartItem, cartItems));
  const removeItemHandler = () => dispatch(removeItemToCart(cartItem, cartItems));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan className="price"> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
