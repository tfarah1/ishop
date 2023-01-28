import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
