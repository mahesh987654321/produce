import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="mkrg">
      <div>
        <img
          className="not"
          src={
            "https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png"
          }
          alt=""
        />
      </div>
      <div className="found">
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  );
};

export default NotFound;
