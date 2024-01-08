import React from "react";
import "../StyleSheets/statusbar.css";

export default function Statusbar(props) {
  return (
    <div className="statusBar">
      <div className="statusItem">
        <p>Debt-To-Income %: {props.debtToIncome}</p>
      </div>
      <div className="statusItem">
        <p>Assets on file: {props.totalAssets}</p>
      </div>
      <div className="statusItem">
        <p>Loan Amount: {props.totalLoanAmount}</p>
      </div>
    </div>
  );
}
