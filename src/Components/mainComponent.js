import React from "react";
import "./mainComponent.css";

const MainComponent = () => {
  return (
    <>
      <div className="whole-container">
        <div className="upper-section"></div>
        <div className="lower-section">
          <p className="card-desc-tags">CARDHOLDER NAME</p>
          <input
            type="text"
            name="name"
            id=""
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div>
          <p className="card-desc-tags">CARD NUMBER</p>
          <input
            type="number"
            name="number"
            id=""
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div>
          <p className="card-desc-tags">EXP. DATE (MM/YY)</p>
          <div>
            <input type="number" name="number" id="" placeholder="MM" />
            <input type="number" name="number" id="" placeholder="YY" />
          </div>
          <div>
            <p className="card-desc-tags">CVC</p>
            <input type="number" name="number" id="" placeholder="e.g. 123" />
          </div>
        </div>
        <button className="btn">Confirm</button>
      </div>
    </>
  );
};

export default MainComponent;
