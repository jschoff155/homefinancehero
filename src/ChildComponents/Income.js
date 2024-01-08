import React, { useState, useEffect } from "react";
import "../StyleSheets/Income.css";

export default function Income({ onChangeMonthlyIncomeTotal }) {
  const [hourlyPayBO, setHourlyPayBO] = useState("");
  const [monthlyPayBO, setMonthlyPayBO] = useState("");
  const [salaryPayBO, setSalaryPayBO] = useState("");
  const [hourlyPayBT, setHourlyPayBT] = useState("");
  const [monthlyPayBT, setMonthlyPayBT] = useState("");
  const [salaryPayBT, setSalaryPayBT] = useState("");

  useEffect(() => {
    onChangeMonthlyIncomeTotal(totalMonthlyIncome);
  });

  const handlePayTypeChangeBO = (selectedValue) => {
    if (selectedValue === "hourly") {
      hourlyPayQsBO();
    } else if (selectedValue === "monthly") {
      monthlyPayQsBO();
    } else if (selectedValue === "salary") {
      salaryPayQsBO();
    }
  };

  const handlePayTypeChangeBT = (selectedValue) => {
    if (selectedValue === "hourly") {
      hourlyPayQsBT();
    } else if (selectedValue === "monthly") {
      monthlyPayQsBT();
    } else if (selectedValue === "salary") {
      salaryPayQsBT();
    }
  };

  let totalhourlyPayBO = (parseInt(hourlyPayBO) * 2080) / 12;
  let totalhourlyPayBT = (parseInt(hourlyPayBT) * 2080) / 12;
  let totalmonthlyPayBO = parseInt(monthlyPayBO);
  let totalmonthlyPayBT = parseInt(monthlyPayBT);
  let totalsalaryPayBO = parseInt(salaryPayBO) / 12;
  let totalsalaryPayBT = parseInt(salaryPayBT) / 12;

  const incomeValues = [
    totalhourlyPayBO || null,
    totalhourlyPayBT || null,
    totalmonthlyPayBO || null,
    totalmonthlyPayBT || null,
    totalsalaryPayBO || null,
    totalsalaryPayBT || null,
  ];

  const totalMonthlyIncome = incomeValues.reduce(
    (accumulator, currentValue) => {
      return currentValue !== null ? accumulator + currentValue : accumulator;
    },
    0
  );

  const onChangeHBO = (event) => setHourlyPayBO(event.target.value);
  const onChangeMBO = (event) => setMonthlyPayBO(event.target.value);
  const onChangeSBO = (event) => setSalaryPayBO(event.target.value);
  const onChangeHBT = (event) => setHourlyPayBT(event.target.value);
  const onChangeMBT = (event) => setMonthlyPayBT(event.target.value);
  const onChangeSBT = (event) => setSalaryPayBT(event.target.value);

  function hourlyPayQsBO() {
    document.getElementById("hourlySelectedBO").style.display = "block";
    document.getElementById("monthlySelectedBO").style.display = "none";
    document.getElementById("salarySelectedBO").style.display = "none";
  }
  function monthlyPayQsBO() {
    document.getElementById("hourlySelectedBO").style.display = "none";
    document.getElementById("monthlySelectedBO").style.display = "block";
    document.getElementById("salarySelectedBO").style.display = "none";
  }
  function salaryPayQsBO() {
    document.getElementById("hourlySelectedBO").style.display = "none";
    document.getElementById("monthlySelectedBO").style.display = "none";
    document.getElementById("salarySelectedBO").style.display = "block";
  }
  function hourlyPayQsBT() {
    document.getElementById("hourlySelectedBT").style.display = "block";
    document.getElementById("monthlySelectedBT").style.display = "none";
    document.getElementById("salarySelectedBT").style.display = "none";
  }
  function monthlyPayQsBT() {
    document.getElementById("hourlySelectedBT").style.display = "none";
    document.getElementById("monthlySelectedBT").style.display = "block";
    document.getElementById("salarySelectedBT").style.display = "none";
  }
  function salaryPayQsBT() {
    document.getElementById("hourlySelectedBT").style.display = "none";
    document.getElementById("monthlySelectedBT").style.display = "none";
    document.getElementById("salarySelectedBT").style.display = "block";
  }
  function showBODetails() {
    document.getElementById("borrowerOneDetails").style.display = "block";
    document.getElementById("borrowerTwoDetails").style.display = "none";
  }
  function showBTDetails() {
    document.getElementById("borrowerOneDetails").style.display = "block";
    document.getElementById("borrowerTwoDetails").style.display = "block";
  }
  function reset() {
    setHourlyPayBO(0);
    setMonthlyPayBO(0);
    setSalaryPayBO(0);
    setHourlyPayBT(0);
    setMonthlyPayBT(0);
    setSalaryPayBT(0);
  }

  return (
    <div id="income">
      <h1>Income</h1>
      <label>Total Monthly Income: $</label>
      <label>
        {totalMonthlyIncome && parseFloat(totalMonthlyIncome).toFixed(2)}
      </label>
      <br></br>
      <button onClick={reset}>Reset</button>
      <br></br>
      <label>Number of borrowers?</label>
      <br></br>
      <select
        id="numberOfBorrowers"
        onChange={(e) =>
          e.target.value === "1" ? showBODetails() : showBTDetails()
        }
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <div id="borrowerIncomeAreas">
        <div id="borrowerOneDetails" className="borrowerIncomeDetails">
          <h2>Borrower 1</h2>
          <label for="payType">How are you paid?</label>
          <select onChange={(e) => handlePayTypeChangeBO(e.target.value)}>
            <option value=""></option>
            <option value="hourly" onChange={hourlyPayQsBO}>
              Hourly
            </option>
            <option value="monthly" onChange={monthlyPayQsBO}>
              Monthly
            </option>
            <option value="salary" onChange={salaryPayQsBO}>
              Salary
            </option>
          </select>

          <div id="hourlySelectedBO" className="payTypeSelection">
            <label>How much do you make per hour?</label>
            <input
              type="text"
              value={hourlyPayBO}
              onChange={onChangeHBO}
            ></input>
          </div>

          <div id="monthlySelectedBO" className="payTypeSelection">
            <label>How much do you make per month?</label>
            <input
              type="text"
              value={monthlyPayBO}
              onChange={onChangeMBO}
            ></input>
          </div>

          <div id="salarySelectedBO" className="payTypeSelection">
            <label>How much do you make per year?</label>
            <input
              type="text"
              value={salaryPayBO}
              onChange={onChangeSBO}
            ></input>
          </div>
        </div>

        <div id="borrowerTwoDetails" className="borrowerIncomeDetails">
          <h2>Borrower 2</h2>
          <label for="payType">How are you paid?</label>
          <select onChange={(e) => handlePayTypeChangeBT(e.target.value)}>
            <option value=""></option>
            <option value="hourly" onChange={hourlyPayQsBT}>
              Hourly
            </option>
            <option value="monthly" onChange={monthlyPayQsBT}>
              Monthly
            </option>
            <option value="salary" onChange={salaryPayQsBT}>
              Salary
            </option>
          </select>
          <div id="hourlySelectedBT" className="payTypeSelection">
            <label>How much do you make per hour?</label>
            <input
              type="text"
              value={hourlyPayBT}
              onChange={onChangeHBT}
            ></input>
          </div>

          <div id="monthlySelectedBT" className="payTypeSelection">
            <label>How much do you make per month?</label>
            <input
              type="text"
              value={monthlyPayBT}
              onChange={onChangeMBT}
            ></input>
          </div>

          <div id="salarySelectedBT" className="payTypeSelection">
            <label>How much do you make per year?</label>
            <input
              type="text"
              value={salaryPayBT}
              onChange={onChangeSBT}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
