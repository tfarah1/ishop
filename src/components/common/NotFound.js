import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="cart-empty">
      <h1>Oops! You seem to be lost.</h1>
      <h5>Consider going back to the <Link to="/">Home Page!</Link></h5>
    </div>
  );
};

export default NotFound;
