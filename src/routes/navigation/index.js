import "./index.scss";
import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
