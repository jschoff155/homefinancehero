import React, { useState } from 'react'
import './StyleSheets/Income.css'

export default function Income() {
    const [hourlyPay, sethourlyPay] = useState("");
    const [monthlyPay, setmonthlyPay] = useState("");
    const [salaryPay, setsalaryPay] = useState("");
    
    const onChangeH = event => sethourlyPay(event.target.value);
    const onChangeM = event => setmonthlyPay(event.target.value);
    const onChangeS = event => setsalaryPay(event.target.value);

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
    function monthlyIncomeH(){
        let mGrossH = ((parseInt(hourlyPay) * 2080)/12);
        document.getElementById("mGrossH").innerHTML = `${mGrossH}`;
    }
    function monthlyIncomeM(){
        let mGrossM = (parseInt(monthlyPay));
        document.getElementById("mGrossM").innerHTML = `${mGrossM}`;
    }
    function monthlyIncomeS(){
        let mGrossS = (parseInt(salaryPay)/12);
        document.getElementById("mGrossS").innerHTML = `${mGrossS}`;
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
            <button onClick={monthlyIncomeH}>Calculate monthly</button>
            <label>Your gross income per month: $</label>
            <label id="mGrossH"></label>
        </div>

        <div id="monthlySelected">
            <label>How much do you make per month?</label>
            <input type="text" value={monthlyPay} onChange={onChangeM}></input>
            <button onClick={monthlyIncomeM}>Calculate monthly</button>
            <label>Your gross income per month: $</label>
            <label id="mGrossM"></label>
        </div>

        <div id="salarySelected">
            <label>How much do you make per year?</label>
            <input type="text" value={salaryPay} onChange={onChangeS}></input>
            <button onClick={monthlyIncomeS}>Calculate monthly</button>
            <label>Your gross income per month: $</label>
            <label id="MgrossS"></label>
        </div>
    </div>
  )
}
