import { CartItemContainer, Image, ItemDetails, Text } from "./styles";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Text>{name}</Text>
        <Text>
          {quantity} x R{price}
        </Text>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
