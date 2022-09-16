import { React } from "react";
import "./MainComponent.css";

const MainComponent = () => {
  const handleChange = (event) => {
    event.preventDefault();
    const elements = event.target.value;
  };
  return (
    <>
      <div className="whole-container">
        <div className="upper-section"></div>
        <div className="lower-section">
          <div className="user-card-heading">
            <p className="card-desc-tags">CARDHOLDER NAME</p>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id=""
              placeholder="e.g Jane Appleseed"
            />
          </div>

          <div className="user-card-heading">
            <p className="card-desc-tags">CARD NUMBER</p>
            <input
              type="number"
              name="number"
              id=""
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </div>
          <div className="user-card-heading user-card-date">
            <div className="card-date-input">
              <p className="card-desc-tags">EXP. DATE (MM/YY)</p>
              <div className="card-input-month-year">
                <input
                  type="number"
                  name="number"
                  id=""
                  placeholder="MM"
                  className="date-input"
                />
                <input
                  type="number"
                  name="number"
                  id=""
                  placeholder="YY"
                  className="date-input"
                />
              </div>
            </div>
            <div className="user-card-cvc">
              <p className="card-desc-tags">CVC</p>
              <input type="number" name="number" id="" placeholder="e.g. 123" />
            </div>
          </div>
          <button className="btn">Confirm</button>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
