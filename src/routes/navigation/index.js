import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./styles.jsx";
import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";
import { signOutUser } from "../../utils/firebase";
import CartDropdown from "../../components/cart-dropdown";
import CartIcon from "../../components/cart-icon";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <React.Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser === null ? (
            <NavLink to="/auth">SIGN IN</NavLink>
          ) : (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
