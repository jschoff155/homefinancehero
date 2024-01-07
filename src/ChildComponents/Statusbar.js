import React from "react";
import "../StyleSheets/statusbar.css";

export default function Statusbar(props) {
  return (
    <div className="statusBar">
      <div className="statusItem">
        <p>Debt-To-Income:</p> {props.debtToIncome}
      </div>
      <div className="statusItem">
        <p>Assets on file:</p> {props.totalAssets}
      </div>
      <div className="statusItem">
        <p>Loan Amount:</p>
        {props.totalLoanAmount}
      </div>
    </div>
  );
}
