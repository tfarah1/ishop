import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>You might consider going back to the Home Page:</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
