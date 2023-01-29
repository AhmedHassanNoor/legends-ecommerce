import "./index.scss";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          SHOP
        </Link>
        <Link to="/sign-in" className="nav-link">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
