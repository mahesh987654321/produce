import React from "react";
import "./ReviewDetails.css";
const ReviewDetails = ({ product }) => {
  const { name, rating, images, details } = product;
  return (
    <div className="detailsMain">
      <div>
        <img className="image" src={images} alt="" />
      </div>
      <div>
        <p className="detailsP">Name: {name}</p>
        <p className="detailsP">Details: {details}</p>
        <p className="detailsP">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;
