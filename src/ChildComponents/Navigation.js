import React from "react";
import "../StyleSheets/Navigation.css";

export default function Navigation() {
  return (
    <div id="navigation">
      <div className="Icons"></div>
      <button class="navButton">Property</button>
      <button class="navButton">Income</button>
      <button class="navButton">Expenses</button>
      <button class="navButton">Assets</button>
      <button class="navButton">Financing</button>
    </div>
  );
}
