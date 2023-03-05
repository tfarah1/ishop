// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSignInAlt, FaUser } from "react-icons/fa";
// import Search from "./Search";
// import { onAuthStateChanged, signOut } from "@firebase/auth";
// import { auth } from "../Database";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// const Navbars = () => {
//   const productsInCart = useSelector((state) => state.products.cart) || [];

//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         // const uid = user.uid;
//         // ...
//       } else {
//         // User is signed out
//         // ...
//       }
//       setUser(user);
//     });
//   }, []);
//   return (
//     // <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     //   <NavLink className="navbar-brand" to="/">
//     //     iShop
//     //   </NavLink>

//     //   <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//     //     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//     //       <li className="nav-item active">
//     //         <NavLink className="nav-link" to="/">
//     //           Home
//     //         </NavLink>
//     //       </li>
//     //       {/* <li className="nav-item">
//     //         <NavLink className="nav-link" to="/cart">
//     //           Cart
//     //         </NavLink>
//     //         <span className="cart-counter">{productsInCart.length}</span>
//     //       </li> */}
//     //       <li className="nav-item">
//     //         <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
//     //       </li>
//     //       <li className="nav-item search-box-container">
//     //         <a className="nav-link" href="#footer">
//     //           Contact us
//     //         </a>
//     //       </li>
//     //       {user ? (
//     //         <>
//     //           <li className="nav-item">
//     //             <NavLink className="nav-link" to="/cart">
//     //               Cart
//     //             </NavLink>
//     //             <span className="cart-counter">{productsInCart.length}</span>
//     //           </li>
//     //           <li className="nav-item">
//     //             <div
//     //               onClick={() => {
//     //                 navigate("/");
//     //                 signOut(auth);
//     //               }}
//     //               className="nav-link"
//     //               style={{ cursor: "pointer" }}
//     //               to="/logout">
//     //               <FaSignInAlt /> Log out
//     //             </div></li></>
//     //       ) : (
//     //         <>
//     //           <li className="nav-item">
//     //             <NavLink className="nav-link" to="/signin">
//     //               <FaSignInAlt /> Sign in
//     //             </NavLink>
//     //           </li>

//     //           <li className="nav-item">
//     //             <NavLink className="nav-link" to="/signup">
//     //               <FaUser /> Sign up
//     //             </NavLink>
//     //           </li>
//     //         </>
//     //          )}
//     //     </ul>
//     //     <form className="form-inline my-2 my-lg-0"></form>
//     //   </div>
//     // </nav>

//     <Navbar className="nav" bg="" expand="lg">
//       <Container fluid className="nav1">
//         <Navbar.Brand id="logo" href="/">
//           iShop
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse
//           id="navbarScroll"
//           style={{ justifyContent: "flex-end" }}
//         >
//           <Nav
//             className="navigation me my-2 my-lg-0"
//             style={{ maxHeight: "200px", justifyContent: "flex-end" }}
//             navbarScroll
//           >
//             {user ? (
//               <>
//                 <Form className="search" style={{ width: "550px" }}>
//                   <Search
//                     setSearchQuery={setSearchQuery}
//                     searchQuery={searchQuery}
//                   />
//                 </Form>
//                 <NavLink className="navlinks" to="/">
//                   Home
//                 </NavLink>
//                 <a className="navlinks" href="#footer">
//                   Contact us
//                 </a>
//                 <li className="counter">
//                   <NavLink className="nav-links" to="/cart">
//                     Cart
//                   </NavLink>
//                   <span className="cart-counter">{productsInCart.length}</span>
//                 </li>
//                 <div
//                   onClick={() => {
//                     navigate("/");
//                     signOut(auth);
//                   }}
//                   className="navlinks"
//                   style={{ cursor: "pointer" }}
//                   to="/logout"
//                 >
//                   Logout <FaSignInAlt className="icon-log" />
//                 </div>
//               </>
//             ) : (
//               <>
//                 <NavLink className="navlinks" to="/Signin">
//                   Login <FaSignInAlt className="icon-log" />
//                 </NavLink>
//                 <NavLink className="navlinks" to="/Signup">
//                   Register <FaUser className="icon-log" />
//                 </NavLink>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navbars;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import Search from "./Search";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../Database";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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

  const handleNavigation = () => {
    navigate("/")
  }
  return (    
  <Navbar className='nav' bg="" expand="lg">
    <Container fluid className='nav1'>
      <NavLink id='logo-div' to="/">
      <Navbar.Brand id='logo'>iShop</Navbar.Brand></NavLink>
      <Navbar.Brand id='logo' onClick={handleNavigation}>Luminosa</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="navigation" style={{ maxHeight: '250px' }} navbarScroll>
                  
                   
          {user ? (
            <>
        
          <Form className="search">
             {/* <BiSearchAlt/> */}
          <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
          </Form>
          <a className="navlinks" href="#footer">Contact</a>  
          <a className="navlinks" href="#footer">Contact</a> 
          <li className="counter"><NavLink className="nav-links" to="/cart">Cart</NavLink> 
          <span className="cart-counter">{productsInCart.length}</span>
          </li>
          <div
              onClick={() => {navigate("/");signOut(auth);}}
                  className="navlinks"
                  style={{ cursor: "pointer" }}
                  to="/logout"> Signout <FaSignInAlt className="icon-log"/></div>
                  
          </>
          ):(
          <>
          <NavLink className="navlinks" to="/Signin"> Signin <FaSignInAlt className="icon-log" /></NavLink>
          <NavLink className="navlinks" to="/Signup"> Signup <FaUser className="icon-log" /></NavLink>
          </>
          )}
          
          </Nav> 
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navbars;