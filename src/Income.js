import React, { useState } from 'react'
import './StyleSheets/Income.css'

export default function Income() {
    const [hourlyPay, setHourlyPay] = useState("");
    const [monthlyPay, setMonthlyPay] = useState("");
    const [salaryPay, setSalaryPay] = useState("");
    
    const onChangeH = event => setHourlyPay(event.target.value);
    const onChangeM = event => setMonthlyPay(event.target.value);
    const onChangeS = event => setSalaryPay(event.target.value);

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

  return (
    <div id="income">
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
            <input type="text" value={hourlyPay} onChange={onChangeH}></input>
            <label>Your gross income per month: $</label>
            <label id="mGrossH">{hourlyPay && ((parseInt(hourlyPay) * 2080)/12).toFixed(2)}</label>
        </div>

        <div id="monthlySelected">
            <label>How much do you make per month?</label>
            <input type="text" value={monthlyPay} onChange={onChangeM}></input>
            <label>Your gross income per month: $</label>
            <label id="mGrossM">{monthlyPay && ((parseInt(monthlyPay))).toFixed(2)}</label>
        </div>

        <div id="salarySelected">
            <label>How much do you make per year?</label>
            <input type="text" value={salaryPay} onChange={onChangeS}></input>
            <label>Your gross income per month: $</label>
            <label id="MgrossS">{salaryPay && ((parseInt(salaryPay))/12).toFixed(2)}</label>
        </div>
        
        <h2>Borrower Two</h2>
        <label for = "payType">How are you paid?</label>
        <select id="payType">
            <option>Please Select</option>
            <option value="hourly" onClick={hourlyPayQs}>Hourly</option>
            <option value="monthly" onClick={monthlyPayQs}>Monthly</option>
            <option value="salary" onClick={salaryPayQs}>Salary</option>
        </select>
        <div id="hourlySelected">
            <label>How much do you make per hour?</label>
            <input type="text" value={hourlyPay} onChange={onChangeH}></input>
            <label>Your gross income per month: $</label>
            <label id="mGrossH">{hourlyPay && ((parseInt(hourlyPay) * 2080)/12).toFixed(2)}</label>
        </div>

        <div id="monthlySelected">
            <label>How much do you make per month?</label>
            <input type="text" value={monthlyPay} onChange={onChangeM}></input>
            <label>Your gross income per month: $</label>
            <label id="mGrossM">{monthlyPay && ((parseInt(monthlyPay))).toFixed(2)}</label>
        </div>

        <div id="salarySelected">
            <label>How much do you make per year?</label>
            <input type="text" value={salaryPay} onChange={onChangeS}></input>
            <label>Your gross income per month: $</label>
            <label id="MgrossS">{salaryPay && ((parseInt(salaryPay))/12).toFixed(2)}</label>
        </div>
    </div>
  )
}
