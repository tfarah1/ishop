import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbars from "./components/common/Navbars";
import ProductsDetails from "./components/ProductDetails";
import NotFound from "./components/common/NotFound";
import Cart from "./components/Cart";
import Copyrights from "./components/common/Copyrights";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/common/Checkout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/Database";
import { useEffect, useState } from "react";

function App() {
  // const auth = getAuth();
  const [user, setUser] = useState(null);
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
  if (user) console.log(user.uid);

  return (
    <div>
      <Navbars />

      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Products />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="products/:id" element={<ProductsDetails />}></Route>
            <Route path="cart/checkout" element={<Checkout />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Signin />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="signin" element={<Signin />}></Route>
          </>
        )}
      </Routes>

      <Copyrights />
    </div>
  );
}

export default App;
