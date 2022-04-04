import React, { useEffect, useState } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "./Reviews.css";
const Reviews = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  return (
    <div className="product">
      {car.map((product) => (
        <ReviewDetails product={product} key={product.id}></ReviewDetails>
      ))}
    </div>
  );
};

export default Reviews;
