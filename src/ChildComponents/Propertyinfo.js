import React, { useState, useEffect } from "react";
import "../StyleSheets/Propertyinfo.css";

export default function Propertyinfo({ onChangeLoanTotal }) {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");

  const tLoanAmount =
    homePrice && downPayment && parseInt(homePrice) - parseInt(downPayment);

  const onChangeHP = (event) => setHomePrice(event.target.value);
  const onChangeDP = (event) => setDownPayment(event.target.value);

  useEffect(() => {
    onChangeLoanTotal(tLoanAmount);
  });

  return (
    <div id="propertyInformation">
      <form id="pIform">
        <h1>Property Information</h1>
        <label>Total Loan Amount: $</label>
        <label id="loanAmount">
          {tLoanAmount && parseInt(tLoanAmount).toFixed(2)}
        </label>
        <br></br>
        <label>Home Price</label>
        <br></br>
        <input type="text" value={homePrice} onChange={onChangeHP}></input>
        <br></br>
        <label>Down Payment</label>
        <br></br>
        <input type="text" value={downPayment} onChange={onChangeDP}></input>
        <br></br>
      </form>
    </div>
  );
}
