import React from "react";
import "../StyleSheets/Navigation.css";

export default function Navigation({ setActiveComponent }) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div id="navigation">
      <div className="Icons"></div>
      <button
        className="navButton"
        onClick={() => handleButtonClick("Property")}
      >
        Property
      </button>
      <button className="navButton" onClick={() => handleButtonClick("Income")}>
        Income
      </button>
      <button
        className="navButton"
        onClick={() => handleButtonClick("Expenses")}
      >
        Expenses
      </button>
      <button className="navButton" onClick={() => handleButtonClick("Assets")}>
        Assets
      </button>
      <button
        className="navButton"
        onClick={() => handleButtonClick("Financing")}
      >
        Financing
      </button>
    </div>
  );
}
