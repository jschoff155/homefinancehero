import React, { useState } from 'react';
import './StyleSheets/primary.css';
import Propertyinfo from './Propertyinfo';

export default function LoanInfo() {
    function MonthlyPaymentCalc (){
       const rate = document.getElementById("rate").value;
       const term = document.getElementById("term").value;
       const {totalLoanAmount} = useState(Propertyinfo);
       //document.getElementById("paymentAmount").innerHTML = `Monthly Payment Amount: ${rate + term}`;
    }
    return (
    <div id="page">
      <form>
        <label>Loan Amount:</label><br></br><br></br>
        <label>Interest Rate</label><br></br>
        <input id="rate"></input><br></br>
        <label>Term</label><br></br>
        <input id="term"></input><br></br>
        <label id="monthlyPayment"></label>
        <label id="paymentAmount"></label>
        <button type="button" onClick={MonthlyPaymentCalc()}>Calculate Payment</button>
      </form>
    </div>
  )
}
