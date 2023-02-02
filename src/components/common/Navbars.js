import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import Search from "./Search";

const Navbars = () => {
  const productsInCart = useSelector((state) => state.products.cart);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        iShop
      </a>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
            <span className="cart-counter">{productsInCart.length}</span>
          </li>
          <li className="nav-item">
          <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
          </li>
          <li className="nav-item search-box-container">
            <a className="nav-link" href="#footer">
              Contacts
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              <FaSignInAlt /> Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              <FaUser /> Register
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
         
        </form>
      </div>
    </nav>
  );
};

export default Navbars;
