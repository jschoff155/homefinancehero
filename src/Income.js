import React from 'react'
import './StyleSheets/Income.css'

export default function Income() {
    function hourlyPayQs(){
        document.getElementById("hourlySelected").style.display="block";
        document.getElementById("monthlySelected").style.display="none";
        document.getElementById("salarySelected").style.display="none";
    }
    function monthlyPayQs(){
        document.getElementById("hourlySelected").style.display="none";
        document.getElementById("monthlySelected").style.display="block";
        document.getElementById("salarySelected").style.display="none";
    }
    function salaryPayQs(){
        document.getElementById("hourlySelected").style.display="none";
        document.getElementById("monthlySelected").style.display="none";
        document.getElementById("salarySelected").style.display="block";
    }
    
    //let hourlyPay = parseInt(document.getElementById("hourlyPay").value);
   // let monthlyPay = parseInt(document.getElementById("monthlyPay").value);
   // let salaryPay = parseInt(document.getElementById("hourlyPay").value);

   // function monthlyIncomeH(){
        
    //}
    
   // function monthlyIncomeS(){}

  return (
    <div>
        <h1>Income</h1>
        <h2>Borrower One</h2>
        <label for = "payType">How are you paid?</label>
        <select id="payType">
            <option>Please Select</option>
            <option value="hourly" onClick={hourlyPayQs}>Hourly</option>
            <option value="monthly" onClick={monthlyPayQs}>Monthly</option>
            <option value="salary" onClick={salaryPayQs}>Salary</option>
        </select>
        <div id="hourlySelected">
            <label>How much do you make per hour?</label>
            <input id="hourlyPay"></input>
            <label>Your gross income per month:</label>
        </div>
        <div id="monthlySelected">
            <label>How much do you make per month?</label>
            <input id="monthlyPay"></input>
            <label>Your gross income per month:</label>
            <label id="grossMonthly"></label>
        </div>
        <div id="salarySelected">
            <label>How much do you make per year?</label>
            <input id="annualPay"></input>
            <label>Your gross income per month:</label>
        </div>
        
    </div>
  )
}
