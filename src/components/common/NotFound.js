import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <div className="notFound">
        <h1>Oops! You seem to be lost.</h1>
      </div>
      <div className="notFound">
        <h5>
          Consider going back to the{" "}
          <Link to="/" style={{ color: "rgb(107, 105, 105)" }}>
            {" "}
            Home
          </Link>{" "}
          Page
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
