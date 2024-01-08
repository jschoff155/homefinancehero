import React from "react";
import "../StyleSheets/Financing.css";

export default function Financing(props) {
  return (
    <div id="financing">
      <h1>Financing Information</h1>
      <div id="amortizationSchedule"></div>
      <div className="mortgageDetails">
        <h2>Monthly payment (P&I)</h2>
        <label>Term</label>
        <select>
          <option>30 year</option>
          <option>20 year</option>
          <option>15 year</option>
          <option>10 year</option>
        </select>
        <br></br>
        <label>Interest Rate</label>
        <input></input>
        <br></br>
        <label>Loan Amount:$</label>
        <label>{props.apptotalLoanAmount}</label>
      </div>
    </div>
  );
}
