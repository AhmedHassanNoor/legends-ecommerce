import { ShoppingIcon, CartIconContainer, ItemCount } from "./styles";
import { isCartCountSelector, isCartOpenSelector } from "../../store/cart/selector";
import { setIsCartOpen } from "../../store/cart/actions";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const cartCount = useSelector(isCartCountSelector);
  const isCartOpen = useSelector(isCartOpenSelector);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
