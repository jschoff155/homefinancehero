import React from 'react'
import './StyleSheets/Income.css'

export default function Income() {
  return (
    <div>
        <h1>Income</h1>
        <h2>Borrower One</h2>
        <label for = "payType">How are you paid?</label>
        <select id="payType">
            <option value="hourly">Hourly</option>
            <option value="monthly">Monthly</option>
            <option value="salary">Salary</option>
        </select>
        <label id="hourlySelected">How much do you make per hour?</label>
        <label id="monthlySelected">How much do you make per month?</label>
        <label id="salarySelected">How much do you make per year?</label>
    </div>
  )
}
