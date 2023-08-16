import React from 'react'
import './StyleSheets/statusbar.css'

export default function Statusbar() {
  

  return (
    <div className = "statusBar">
      <div className = "statusItem"><p>Debt-To-Income:</p> {}</div>
      <div className = "statusItem"><p>Assets on file:</p> {}</div>
      <div className = "statusItem"><p>Loan Amount:</p>{}</div>
    </div>
  )
}
