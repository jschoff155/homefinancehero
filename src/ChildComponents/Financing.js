import React, { useState, useEffect } from "react";
import "../StyleSheets/Financing.css";

export default function Financing(props) {
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");

  const rateForFormula = rate * 0.01;

  const paymentAmount =
    props.apptotalLoanAmount *
      (((rateForFormula / 12) * (1 + rateForFormula / 12) ** term) /
        ((1 + rateForFormula / 12) ** term - 1)) || null;

  const onChangeTerm = (event) => setTerm(event.target.value);
  const onChangeRate = (event) => setRate(event.target.value);

  return (
    <div id="financing">
      <h1>Financing Information</h1>
      <div id="amortizationSchedule"></div>
      <div className="mortgageDetails">
        <h2>Monthly payment (P&I)</h2>
        <label>Term</label>
        <input type="text" value={term} onChange={onChangeTerm}></input>
        <br></br>
        <label>Interest Rate</label>
        <input type="text" value={rate} onChange={onChangeRate}></input>
        <br></br>
        <label>Loan Amount:$</label>
        <label>{props.apptotalLoanAmount}</label>
        <br></br>
        <label>Your monthly mortgage payment is:</label>
        <br></br>
        <label>{paymentAmount}</label>
      </div>
    </div>
  );
}
