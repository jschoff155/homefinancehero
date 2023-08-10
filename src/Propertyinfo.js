import React from 'react'
import './StyleSheets/primary.css'


    

export default function Propertyinfo() {
    function loanAmountCalc(){
        const price = document.getElementById("homePrice").value;
        const downPayment = document.getElementById("downPayment").value;
        const totalLoanAmount = (price - downPayment);
        document.getElementById("loanAmount").innerHTML = `Total Loan Amount = ${totalLoanAmount}`;
    }
  
    return (
    <div id="page">
      <form>
        <h1>Property Information</h1>
        
        <label>Home Price</label><br></br>
        <input id="homePrice"></input><br></br>
        <label>Down Payment</label><br></br>
        <input id="downPayment"></input><br></br>
        <button type="button" onClick={loanAmountCalc}>Calculate</button>
        <br></br>
        <label id="loanAmount"></label>
        
      </form>
    </div>
  )
}
