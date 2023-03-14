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
// import { getDatabase, push, ref } from "firebase/database";

// const Navbars = () => {
//   const productsInCart = useSelector((state) => state.products.cart) || [];


//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const [uid, setUid] = useState(null);

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
//       setUid(user.uid);
//       console.log(uid);
//     });
//   }, []);

//   const handleNavigation = () => {
//     navigate("/");
//   };

// const handleSignout = () => {
//   navigate("/");
//   signOut(auth);

//   //saveCartProducts
//    //write
//    const db = getDatabase();
//    const Productref = ref(db, "Cart/");
//   //  const data = action.payload;
//    function writeUserData(productsInCart) {
//    const uid = user.uid;
//     push(Productref, {
//       uid: productsInCart,
//     });
//    }
//    writeUserData(productsInCart);
// }

//   return (
//     <Navbar className="nav" bg="" expand="lg">
//       <Container fluid className="nav1">
//         <Navbar.Brand id="logo" onClick={handleNavigation}>
//           Luminosa
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="navigation"
//             style={{ maxHeight: "250px" }}
//             navbarScroll
//           >
//             {user ? (
//               <>
//                 <Form className="search">
//                   {/* <BiSearchAlt/> */}
//                   <Search
//                     setSearchQuery={setSearchQuery}
//                     searchQuery={searchQuery}
//                   />
//                 </Form>
//                 <a className="navlinks" href="#footer">
//                   Contact
//                 </a>
//                 <li className="counter">
//                   <NavLink className="nav-links" to="/cart">
//                     Cart
//                   </NavLink>
//                   <span className="cart-counter">{productsInCart.length}</span>
//                 </li>
//                 <div
//                   onClick={handleSignout}
//                   className="navlinks"
//                   style={{ cursor: "pointer" }}
//                   to="/logout"
//                 >
//                   Signout <FaSignInAlt className="icon-log" />
//                 </div>
//               </>
//             ) : (
//               <>
//                 <NavLink className="navlinks" to="/Signin">
//                   Signin <FaSignInAlt className="icon-log" />
//                 </NavLink>
//                 <NavLink className="navlinks" to="/Signup">
//                   Signup <FaUser className="icon-log" />
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
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
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
    <section id="titles">
  <Navbar className='nav' bg="" expand="lg">
    <Container fluid className='nav1'>
      <Navbar.Brand id='logo' onClick={handleNavigation}>Luminosa</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="navigation" style={{ maxHeight: '250px' }} navbarScroll>
                  
        <Form className="search" id="#formm">
          <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        </Form>
            <>
          <a className="navlinks" href="#footer">Contact</a>  
          <li className="counter"><NavLink className="nav-links" to="/cart">Cart</NavLink> 
          <span className="cart-counter">{productsInCart.length}</span>
          </li>
          <div
              onClick={() => {navigate("/");signOut(auth);}}
                  className="navlinks"
                  style={{ cursor: "pointer" }}
                  to="/logout"> Sign-out <FaSignInAlt className="icon-log"/></div>
                  
          </>
       
          
          
          {/* <NavLink className="navlinks" to="/signin"> Sign-in <FaSignInAlt className="icon-log" /></NavLink>
         
          <NavLink className="navlinks" to="/Signup"> Sign-up <FaUser className="icon-log" /></NavLink>
          </> */}
       
          
          </Nav> 
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
      <div className="header">
      {/* <div className="logo-box">
        <img src="img/logo-white.png" alt="Logo" className="logo" />
      </div> */}

      <div className="text-box">     
        {/* <h1 className="heading-primary">
          <span className="heading-primary-main">Luminosa</span>
          <span className="heading-primary-sub">
            Where shopping meets convenience
          </span>
        </h1> */}
        
            <>
         {/* <Form className="search">
          <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        </Form> */}
          
          {/* <Link to="/signup" className="btnn btnn-white">
          Register
        </Link> */}
          </>
           

      </div>
    </div>
    </section>
  );
};

export default Navbars;