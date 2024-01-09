import React, { useState, useEffect } from "react";
import "../StyleSheets/MonthlyExpenses.css";

export default function MonthlyExpenses({ onChangeMonthlyExpensesTotal }) {
  const [mAutoLoans, setmAutoLoans] = useState("");
  const [mStdLoans, setmStdLoans] = useState("");
  const [mCredit, setmCredit] = useState("");
  const [mMiscDebts, setmMiscDebts] = useState("");

  useEffect(() => {
    onChangeMonthlyExpensesTotal(totalMonthlyExpenses);
  });

  const onChangemAL = (event) => setmAutoLoans(event.target.value);
  const onChangemSL = (event) => setmStdLoans(event.target.value);
  const onChangemC = (event) => setmCredit(event.target.value);
  const onChangemMD = (event) => setmMiscDebts(event.target.value);

  let totalMonthlyExpenses =
    mAutoLoans &&
    mStdLoans &&
    mCredit &&
    mMiscDebts &&
    parseInt(mAutoLoans) +
      parseInt(mStdLoans) +
      parseInt(mCredit) +
      parseInt(mMiscDebts);

  const paymentTypeLabel = [
    {
      title: "Auto Loans",
      onChangeValue: mAutoLoans,
      onChangeFunction: onChangemAL,
    },
    {
      title: "Student Loans",
      onChangeValue: mStdLoans,
      onChangeFunction: onChangemSL,
    },
    {
      title: "Credit Cards",
      onChangeValue: mCredit,
      onChangeFunction: onChangemC,
    },
    {
      title: "All other credit debts",
      onChangeValue: mMiscDebts,
      onChangeFunction: onChangemMD,
    },
  ];

  const ExpensesInput = (title, onChangeValue, onChangeFunction) => {
    return (
      <tr className="mEtr">
        <td class="mEdebtType">{title}</td>
        <td>
          <input
            type="text"
            value={onChangeValue}
            onChange={onChangeFunction}
          ></input>
        </td>
      </tr>
    );
  };

  return (
    <div id="monthlyExpenses">
      <h1>Monthly Expenses</h1>
      <div className="monthlyExpensesIntro">
        <label>Total Monthly Payments: $</label>
        <label>
          {totalMonthlyExpenses && parseInt(totalMonthlyExpenses).toFixed(2)}
        </label>
        <p>
          Please only include debts which are relevant to your credit report.
          <br></br>
          Utilities, insurance payments, and similar revolving payments need not
          be added. <br></br>Please ensure all fields have a value for proper
          calculations
        </p>
      </div>

      <table className="mETable">
        <tr className="mEtr">
          <th className="mETh">Payment Type</th>
          <th className="mETh">Monthly Minimum Payment</th>
        </tr>
        {paymentTypeLabel.map((input) =>
          ExpensesInput(
            input.title,
            input.onChangeValue,
            input.onChangeFunction
          )
        )}
      </table>
    </div>
  );
}
