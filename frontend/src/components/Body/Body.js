import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="img-responsive"
              src={require("../../assets/images/homeImage.png")}
              alt="bodyImage"
            />
          </div>
          <div className="col">
            <div className="body-text">
              Character & Typeface Recognition in One Tool
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
