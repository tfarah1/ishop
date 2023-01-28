import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const productsInCart = useSelector((state) => state.products.cart);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span>
          <NavLink className="navbar-brand" to="/">
            iShop
          </NavLink>
        </span>
        <span>
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </span>
        <span>
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
          <div className="cart-counter">
            <span>{productsInCart.length}</span>
          </div>
        </span>
        <span>
          <NavLink className="nav-link" to="/">
            About us
          </NavLink>
        </span>
        <span>
          <NavLink className="nav-link" to="/">
            Contact us
          </NavLink>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
