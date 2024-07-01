import React from "react";
import "./pagenot.css"; // Import the CSS file

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="home-link">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
