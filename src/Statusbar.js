import React from 'react'
import './StyleSheets/statusbar.css'

export default function Statusbar() {
  
  return (
    <div className = "statusBar">
      <div className = "statusItem"><p>Current Debt-To-Income:</p> {}</div>
      <div className = "statusItem"><p>Current Assets on file:</p> {}</div>
      <div className = "statusItem"><p>Current Loan Amount:</p> {}</div>
    </div>
  )
}
