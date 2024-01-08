import React, { useState, useEffect } from "react";
import App from "../App";
import "../StyleSheets/MonthlyExpenses.css";

export default function MonthlyExpenses({ onChangeMonthlyExpensesTotal }) {
  const [mAutoLoans, setmAutoLoans] = useState("");
  const [mStdLoans, setmStdLoans] = useState("");
  const [mCredit, setmCredit] = useState("");
  const [mMiscDebts, setmMiscDebts] = useState("");
  const [tAutoLoans, settAutoLoans] = useState("");
  const [tStdLoans, settStdLoans] = useState("");
  const [tCredit, settCredit] = useState("");
  const [tMiscDebts, settMiscDebts] = useState("");

  useEffect(() => {
    onChangeMonthlyExpensesTotal(totalMonthlyExpenses);
  });

  const onChangemAL = (event) => setmAutoLoans(event.target.value);
  const onChangemSL = (event) => setmStdLoans(event.target.value);
  const onChangemC = (event) => setmCredit(event.target.value);
  const onChangemMD = (event) => setmMiscDebts(event.target.value);
  const onChangetAL = (event) => settAutoLoans(event.target.value);
  const onChangetSL = (event) => settStdLoans(event.target.value);
  const onChangetC = (event) => settCredit(event.target.value);
  const onChangetMD = (event) => settMiscDebts(event.target.value);

  let totalMonthlyExpenses =
    mAutoLoans &&
    mStdLoans &&
    mCredit &&
    mMiscDebts &&
    parseInt(mAutoLoans) +
      parseInt(mStdLoans) +
      parseInt(mCredit) +
      parseInt(mMiscDebts);
  let totalDebtAmount =
    tAutoLoans &&
    tStdLoans &&
    tCredit &&
    tMiscDebts &&
    parseInt(tAutoLoans) +
      parseInt(tStdLoans) +
      parseInt(tCredit) +
      parseInt(tMiscDebts);

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
        </p>
        <p>
          Utilities, insurance payments, and similar revolving payments need not
          be added.
        </p>
        <p>Please ensure all fields have a value for proper calculations</p>
      </div>

      <table className="mETable">
        <tr className="mEtr">
          <th className="mETh">Payment Type</th>
          <th className="mETh">Monthly Minimum Payment</th>
        </tr>
        <tr className="mEtr">
          <td class="mEdebtType">Auto loans</td>
          <td>
            <input
              type="text"
              value={mAutoLoans}
              onChange={onChangemAL}
            ></input>
          </td>
        </tr>
        <tr className="mEtr">
          <td class="mEdebtType">Student loans</td>
          <td class="mEInputField">
            <input type="text" value={mStdLoans} onChange={onChangemSL}></input>
          </td>
        </tr>
        <tr className="mEtr">
          <td class="mEdebtType">Credit Cards</td>
          <td class="mEInputField">
            <input type="text" value={mCredit} onChange={onChangemC}></input>
          </td>
        </tr>
        <tr className="mEtr">
          <td class="mEdebtType">All other credit debts</td>
          <td class="mEInputField">
            <input
              type="text"
              value={mMiscDebts}
              onChange={onChangemMD}
            ></input>
          </td>
        </tr>
        <tr className="mEtr">
          <td class="mEdebtType"></td>
        </tr>
        <tr className="mEtr">
          <td></td>
          <td class="mEInputField"></td>
        </tr>
      </table>
    </div>
  );
}
