import React from "react";
import { addItemToCart, clearItemFromCart, removeItemToCart } from "../../store/cart/actions";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  ItemDetailsContainer,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../../store/cart/selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(cartItemsSelector);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem, cartItems));
  const addItemHandler = () => dispatch(addItemToCart(cartItem, cartItems));
  const removeItemHandler = () => dispatch(removeItemToCart(cartItem, cartItems));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <ItemDetailsContainer>
        <span>
          <b>Name:</b>
        </span>
        <span>{name}</span>
      </ItemDetailsContainer>

      <ItemDetailsContainer>
        <BaseSpan>
          <b>Quantity:</b>
        </BaseSpan>
        <Quantity>
          <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </Quantity>
      </ItemDetailsContainer>
      <ItemDetailsContainer>
        <BaseSpan>
          <b>Name:</b>
        </BaseSpan>
        <BaseSpan> R{price}</BaseSpan>
      </ItemDetailsContainer>
      <ItemDetailsContainer>
        <BaseSpan>
          <b>Remove Item:</b>
        </BaseSpan>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      </ItemDetailsContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
