import React, { useState } from 'react'
import './StyleSheets/Propertyinfo.css'

export default function Propertyinfo() {
  
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");

  const totalLoanAmount = (homePrice && downPayment && (parseInt(homePrice) - parseInt(downPayment)));
  
  const onChangeHP = event => setHomePrice(event.target.value);
  const onChangeDP = event => setDownPayment(event.target.value);
  
    return (
    <div id="propertyInformation">
      <form id="pIform">
        <h1>Property Information</h1>
        
        <label>Home Price</label><br></br>
        <input type="text" value={homePrice} onChange={onChangeHP}></input><br></br>
        <label>Down Payment</label><br></br>
        <input type="text" value={downPayment} onChange={onChangeDP}></input><br></br>
        
        <label>Total Loan Amount: $</label>
        <label id="loanAmount">{totalLoanAmount && ((parseInt(totalLoanAmount))).toFixed(2)}</label>
        
      </form>
    </div>
  )
}
