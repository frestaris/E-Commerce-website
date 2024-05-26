import React, { useContext, useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import menu_icon from "../Assets/menu_icon.png";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const location = useLocation();

  const getMenuFromPath = (path) => {
    if (path === "/") return "shop";
    if (path.startsWith("/men")) return "mens";
    if (path.startsWith("/women")) return "women";
    if (path.startsWith("/kids")) return "kids";
    return "";
  };

  const [menu, setMenu] = useState(getMenuFromPath(location.pathname));

  useEffect(() => {
    setMenu(getMenuFromPath(location.pathname));
  }, [location.pathname]);

  const dropdown_toggle = (event) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    event.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Yokami</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={menu_icon}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
