import React, { useEffect } from "react";
import "../StyleSheets/statusbar.css";

export default function Statusbar(props) {
  const DTI = props.debtToIncome;

  function DTIalert() {
    if (DTI >= 45) {
      document.getElementById("DTIalert").innerHTML =
        "DTI should be below 45% to qualify for most loans";
    }
  }

  useEffect(() => {
    DTIalert();
  });

  return (
    <div className="statusBar">
      <div className="statusItem">
        <p>Debt-To-Income %: {props.debtToIncome}</p>
        <p id="DTIalert"></p>
      </div>
      <div className="statusItem">
        <p>Assets on file: ${props.totalAssets}</p>
      </div>
      <div className="statusItem">
        <p>Loan Amount: ${props.totalLoanAmount}</p>
      </div>
    </div>
  );
}
