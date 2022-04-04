import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="combine">
        <div className="leftSide">
          <div>
            <h1>
              <span className="firstH1">MORE CAPABILITY.</span>
              <br></br>
              <span className="secondH1">MORE FUN.</span>
            </h1>

            <p className="p">
              Find a Toyota that's ready for your weekend adventures. Explore
              our lineup of capable SUVs below. We are Providing best cars for
              our customers. Please connect With us.
            </p>
            <button className="btn">EXPLORE HERE</button>
          </div>
        </div>
        <div className="rightSide">
          <img
            className="img"
            src={
              "https://imgd.aeplcdn.com/1200x900/cw/ec/37092/BMW-M2-Exterior-141232.jpg?wm=0&q=75"
            }
            alt=""
          />
        </div>
      </div>
      <div>
        <h1>name</h1>
      </div>
    </>
  );
};

export default HomePage;
