import logo_green from "./../utility/emerald_green logo.webp";
import { Link } from "react-router-dom";
import useStatus from "../utility/useStatus";
import { useContext } from "react";
import userContext from "../utility/userContext";
import shoppingCart from "./../utility/shopping-cart (1).png";
import { useSelector } from "react-redux";

const Header = () => {
  const status = useStatus();

  const { userName } = useContext(userContext);

  let items = useSelector((store) => store.cart.items);

  return (
    <div id="header">
      <img src={logo_green} alt="" id="logo" />
      <ul id="nav">
        <li>Your network : {status === true ? "🛜" : "⚠️"} </li>
        <li>
          <Link to="/" className="my-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="my-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="my-link">
            Contact Us
          </Link>
        </li>
        {/* <li>Wishlist</li> */}
        <li id="cart-li">
          <Link to="/cart" className="my-link cart-link">
            <img src={shoppingCart} alt="Cart" id="cart-img" />
          </Link>
          {items.length !== 0 && <li id="cart-item-number">{items.length}</li>}
        </li>
        <li id="user-name">{userName[0]}</li>
      </ul>
    </div>
  );
};

export default Header;
