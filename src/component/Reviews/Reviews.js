// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ReviewDetails from "../ReviewDetails/ReviewDetails";
// import "./Reviews.css";
// const Reviews = () => {
//   const [car, setCar] = useState([]);
//   const navigate = useNavigate()
//   useEffect(() => {
//     fetch("cars.json")
//       .then((res) => res.json())
//       .then((data) => setCar(data));
//   }, []);
//   return (
//     <div className="product">
//       {car.slice(0, 3).map((product) => (
//         <ReviewDetails product={product} key={product.id}></ReviewDetails>
//       ))}
//       <button onClick={()=> navigate('/review')}>oihsd</button>
//     </div>
//   );
// };

// export default Reviews;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "./Reviews.css";
const Reviews = () => {
  const [car, setCar] = useState([]);
  const navigate = useNavigate();

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
      <button onClick={() => navigate("/review")}>oihsd</button>
    </div>
  );
};

export default Reviews;
