import React from 'react'
import './StyleSheets/Propertyinfo.css'

export default function Propertyinfo() {
    
  //const [totalLoanAmount, settotalLoanAmount] = useState("");
  //const [homeprice, sethomeprice] = useState("");
  //const [downpayment, setdownpayment] = useState("");

  function loanAmountCalc(){
        const price = document.getElementById("homePrice").value;
        const downPayment = document.getElementById("downPayment").value;
        const totalLoanAmount = (price - downPayment);
        document.getElementById("loanAmount").innerHTML = `${totalLoanAmount}`;
    }
  
    return (
    <div id="propertyInformation">
      <form id="pIform">
        <h1>Property Information</h1>
        
        <label>Home Price</label><br></br>
        <input className="pIinput" id="homePrice"></input><br></br>
        <label>Down Payment</label><br></br>
        <input className="pIinput" id="downPayment"></input><br></br>
        <button id="pIbutton" type="button" onClick={loanAmountCalc}>Calculate</button>
        <br></br>
        <label>Total Loan Amount: </label>
        <label id="loanAmount"></label>
        
      </form>
    </div>
  )
}
