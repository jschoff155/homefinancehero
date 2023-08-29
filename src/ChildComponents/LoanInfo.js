import React from 'react';

export default function LoanInfo() {
    function monthlyPaymentCalc (){
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
        <button type="button" onClick={monthlyPaymentCalc()}>Calculate Payment</button>
      </form>
    </div>
  )
}
