import React, { useState } from 'react'
import './StyleSheets/Income.css'

export default function Income() {
    const [hourlyPayBO, setHourlyPayBO] = useState("");
    const [monthlyPayBO, setMonthlyPayBO] = useState("");
    const [salaryPayBO, setSalaryPayBO] = useState("");
    const [hourlyPayBT, setHourlyPayBT] = useState("");
    const [monthlyPayBT, setMonthlyPayBT] = useState("");
    const [salaryPayBT, setSalaryPayBT] = useState("");
    
    const totalMonthlyIncome = (hourlyPayBO && monthlyPayBO && salaryPayBO && hourlyPayBT && monthlyPayBT && salaryPayBT && ((parseInt(hourlyPayBO) * 2080)/12)+parseInt(monthlyPayBO)+((parseInt(salaryPayBO))/12)+((parseInt(hourlyPayBT) * 2080)/12)+parseInt(monthlyPayBT)+((parseInt(salaryPayBT))/12));

    const onChangeHBO = event => setHourlyPayBO(event.target.value);
    const onChangeMBO = event => setMonthlyPayBO(event.target.value);
    const onChangeSBO = event => setSalaryPayBO(event.target.value);
    const onChangeHBT = event => setHourlyPayBT(event.target.value);
    const onChangeMBT = event => setMonthlyPayBT(event.target.value);
    const onChangeSBT = event => setSalaryPayBT(event.target.value);

    function hourlyPayQsBO(){
        document.getElementById("hourlySelectedBO").style.display="block";
        document.getElementById("monthlySelectedBO").style.display="none";
        document.getElementById("salarySelectedBO").style.display="none";
    }
    function monthlyPayQsBO(){
        document.getElementById("hourlySelectedBO").style.display="none";
        document.getElementById("monthlySelectedBO").style.display="block";
        document.getElementById("salarySelectedBO").style.display="none";
    }
    function salaryPayQsBO(){
        document.getElementById("hourlySelectedBO").style.display="none";
        document.getElementById("monthlySelectedBO").style.display="none";
        document.getElementById("salarySelectedBO").style.display="block";
    }
    function hourlyPayQsBT(){
        document.getElementById("hourlySelectedBT").style.display="block";
        document.getElementById("monthlySelectedBT").style.display="none";
        document.getElementById("salarySelectedBT").style.display="none";
    }
    function monthlyPayQsBT(){
        document.getElementById("hourlySelectedBT").style.display="none";
        document.getElementById("monthlySelectedBT").style.display="block";
        document.getElementById("salarySelectedBT").style.display="none";
    }
    function salaryPayQsBT(){
        document.getElementById("hourlySelectedBT").style.display="none";
        document.getElementById("monthlySelectedBT").style.display="none";
        document.getElementById("salarySelectedBT").style.display="block";
    }
    function reset(){
        document.getElementById("borrowerOneDetails").style.display="none";
        document.getElementById("borrowerTwoDetails").style.display="none";
        document.getElementById("hourlySelectedBO").style.display="none";
        document.getElementById("monthlySelectedBO").style.display="none";
        document.getElementById("salarySelectedBO").style.display="none";
        document.getElementById("hourlySelectedBT").style.display="none";
        document.getElementById("monthlySelectedBT").style.display="none";
        document.getElementById("salarySelectedBT").style.display="none";
    }
    function showBODetails(){
        document.getElementById("borrowerOneDetails").style.display="block";
        document.getElementById("borrowerTwoDetails").style.display="none";
    }
    function showBTDetails(){
        document.getElementById("borrowerOneDetails").style.display="block";
        document.getElementById("borrowerTwoDetails").style.display="block";
    }

  return (
    <div id="income">
        <h1>Income</h1>
        <label>Total Monthly Income: $</label><label>{totalMonthlyIncome && ((parseFloat(totalMonthlyIncome))).toFixed(2)}</label><br></br>
        <label>Number of borrowers?</label><br></br>
        <select>
            <option onClick={reset}></option>
            <option onClick={showBODetails}>1</option>
            <option onClick={showBTDetails}>2</option>
        </select>
        <div id="borrowerIncomeAreas">
        <div id="borrowerOneDetails" className="borrowerIncomeDetails">
            <h2>Borrower 1</h2>
            <label for = "payType">How are you paid?</label>
            <select id="payType">
                <option>Please Select</option>
                <option value="hourly" onClick={hourlyPayQsBO}>Hourly</option>
                <option value="monthly" onClick={monthlyPayQsBO}>Monthly</option>
                <option value="salary" onClick={salaryPayQsBO}>Salary</option>
            </select>
            <div id="hourlySelectedBO" className="payTypeSelection">
                <label>How much do you make per hour?</label>
                <input type="text" value={hourlyPayBO} onChange={onChangeHBO}></input>
            </div>

            <div id="monthlySelectedBO" className="payTypeSelection">
                <label>How much do you make per month?</label>
                <input type="text" value={monthlyPayBO} onChange={onChangeMBO}></input>
            </div>

            <div id="salarySelectedBO" className="payTypeSelection">
                <label>How much do you make per year?</label>
                <input type="text" value={salaryPayBO} onChange={onChangeSBO}></input>
            </div>
        </div>
        
        <div id="borrowerTwoDetails" className="borrowerIncomeDetails">
            <h2>Borrower 2</h2>
            <label for = "payType">How are you paid?</label>
            <select id="payType">
                <option>Please Select</option>
                <option value="hourly" onClick={hourlyPayQsBT}>Hourly</option>
                <option value="monthly" onClick={monthlyPayQsBT}>Monthly</option>
                <option value="salary" onClick={salaryPayQsBT}>Salary</option>
            </select>
            <div id="hourlySelectedBT" className="payTypeSelection">
                <label>How much do you make per hour?</label>
                <input type="text" value={hourlyPayBT} onChange={onChangeHBT}></input>
            </div>

            <div id="monthlySelectedBT" className="payTypeSelection">
                <label>How much do you make per month?</label>
                <input type="text" value={monthlyPayBT} onChange={onChangeMBT}></input>
            </div>

            <div id="salarySelectedBT" className="payTypeSelection">
                <label>How much do you make per year?</label>
                <input type="text" value={salaryPayBT} onChange={onChangeSBT}></input>
            </div>
        </div>
        </div>
       
        
    </div>
  )
}
