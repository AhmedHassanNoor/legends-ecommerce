import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./styles.jsx";
import React from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/legends.svg";

import { userSignOutUserStart } from "../../store/user/actions.js";
import CartDropdown from "../../components/cart-dropdown";
import CartIcon from "../../components/cart-icon";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/selector.js";
import { isCartOpenSelector } from "../../store/cart/selector.js";

const Navigation = () => {
  const isCartOpen = useSelector(isCartOpenSelector);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const onSignOut = () => dispatch(userSignOutUserStart());
  return (
    <React.Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo stroke="#ae9100" fill="#ae9100" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser === null ? (
            <NavLink to="/auth">SIGN IN</NavLink>
          ) : (
            <NavLink as="span" onClick={onSignOut}>
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
