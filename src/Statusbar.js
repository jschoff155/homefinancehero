import React, { useState } from 'react'
import './StyleSheets/statusbar.css'
import Propertyinfo from './Propertyinfo'

export default function Statusbar() {
  const loanAmount = useState(Propertyinfo);
  return (
    <div className = "statusBar">
      <div className = "statusItem"><p>Current Debt-To-Income:</p> {}</div>
      <div className = "statusItem"><p>Current Assets on file:</p> {}</div>
      <div className = "statusItem"><p>Current Loan Amount:</p> {loanAmount}</div>
    </div>
  )
}
