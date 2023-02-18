import "./index.scss";
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
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser === null ? (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
