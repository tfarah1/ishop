import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost. </h1>
      <Link to="/">You might consider going back to the Home Page!</Link>
    </div>
  );
};

export default NotFound;
