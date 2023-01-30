import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Search from "./Search";

//initial navbar
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const productsInCart = useSelector((state) => state.products.cart);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <span>
//           <NavLink className="navbar-brand" to="/">
//             iShop
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="nav-link active" aria-current="page" to="/">
//             Home
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="nav-link" to="/cart">
//             Cart
//           </NavLink>
//           <div className="cart-counter">
//             <span>{productsInCart.length}</span>
//           </div>
//         </span>
//         <span>
//           <NavLink className="nav-link" to="/">
//             About us
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="nav-link" to="/">
//             Contact us
//           </NavLink>
//         </span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// omar edits
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   // intial value of click: false
//   // setClicked instead of setState
//   const [clicked, setClicked] = useState(false);

//   // we don't use this. anymore in functional components
//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   const productsInCart = useSelector((state) => state.products.cart);

//   return (
//     <nav>
//       <div id="logo">
//         <a href="/">iShop</a>
//       </div>
//       <div id="container">
//         <ul id="navbar" className={clicked ? "#navbar active" : "navbar"}>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <NavLink to="/cart">Cart</NavLink>
//             <div className="cart-counter">
//               <span>{productsInCart.length}</span>
//             </div>
//           </li>
//           <li>
//             <a href="#footer">Contacts</a>
//           </li>
//           <li>
//             <a href="/login">Login</a>
//           </li>
//         </ul>
//       </div>
//       <div id="mobile">
//         <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
  // for counter use
  const productsInCart = useSelector((state) => state.products.cart);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        iShop
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              {" "}
              Cart{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">
              Contacts
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              {" "}
              Login{" "}
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
