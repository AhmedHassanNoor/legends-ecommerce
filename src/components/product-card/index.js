import { ProductCartContainer, Footer, Name, Price } from "./styles";
import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button";
import { addItemToCart } from "../../store/cart/actions";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../../store/cart/selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(cartItemsSelector);

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product, cartItems));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price className="price">R{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
