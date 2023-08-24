import React from 'react'
//import Assets from './Assets';
//import MonthlyExpenses from './MonthlyExpenses';
//import Income from './Income';
import './StyleSheets/statusbar.css'

export default function Statusbar(props) {
  //const {totalAssets} = useContext(Assets);
  //const {totalMonthlyExpenese} = useContext(MonthlyExpenses);
  //const {totalMonthlyIncome} = useContext(Income);

  return (
    <div className = "statusBar">
      <div className = "statusItem"><p>Debt-To-Income:</p> {}</div>
      <div className = "statusItem"><p>Assets on file:</p> {}</div>
      <div className = "statusItem"><p>Loan Amount:</p>{props.tLoanAmount}</div>
    </div>
  )
}
