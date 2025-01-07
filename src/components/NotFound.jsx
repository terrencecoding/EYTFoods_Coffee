import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="error-link">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;
