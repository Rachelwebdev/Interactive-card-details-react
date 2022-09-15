import React from "react";
import "./frontDebitCardComponent.css";

const FrontDebitCardComponent = () => {
  return (
    <>
      <div className="mainCard">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        <p className="card-number">0000 0000 0000 0000</p>
        <div className="name-and-date">
          <p className="name">JANE APPLESEED</p>
          <p className="date">00/00</p>
        </div>
      </div>
    </>
  );
};

export default FrontDebitCardComponent;
