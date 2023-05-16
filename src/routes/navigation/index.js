import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./styles.jsx";
import React from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase";
import CartDropdown from "../../components/cart-dropdown";
import CartIcon from "../../components/cart-icon";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/selector.js";
import { isCartOpenSelector } from "../../store/cart/selector.js";

const Navigation = () => {
  const isCartOpen = useSelector(isCartOpenSelector);
  const currentUser = useSelector(selectCurrentUser);

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
