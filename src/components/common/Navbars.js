import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import Search from "./Search";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../Database";

const Navbars = () => {
  const productsInCart = useSelector((state) => state.products.cart) || [];

  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
      setUser(user);
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        iShop
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
            <span className="cart-counter">{productsInCart.length}</span>
          </li> */}
          <li className="nav-item">
            <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
          </li>
          <li className="nav-item search-box-container">
            <a className="nav-link" href="#footer">
              Contact us
            </a>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
                <span className="cart-counter">{productsInCart.length}</span>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => {
                    navigate("/");
                    signOut(auth);
                  }}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  to="/logout"
                >
                  <FaSignInAlt /> Sign out
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  <FaSignInAlt /> Sign in
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  <FaUser /> Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <form className="form-inline my-2 my-lg-0"></form>
      </div>
    </nav>
  );
};

export default Navbars;
