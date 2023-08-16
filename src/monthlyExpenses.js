import React from 'react'
import './StyleSheets/MonthlyExpenses.css'

export default function MonthlyExpenses() {

  return (
    <div id="monthlyExpenses">
    <h1>Monthly Expenses</h1>
      <div className="monthlyExpensesIntro">
        <p>Please only include debts which are relevant to your credit report.</p>
        <p>Utilities, insurance payments, and similar revolving payments need not be added.</p>
      </div>
      
      <table className='mETable'>
            <th id="mETh">Total Monthly Payment</th>
            <tr>
              <td class="col">Auto loans</td>
              <input class="monthlyExpensesInput"></input>
            </tr>
            <tr>
              <td class="col">Student loans</td>
              <input class="monthlyExpensesInput"></input>
            </tr>
            <tr>
              <td class="col">Total Debt Amount</td>
              <input class="monthlyExpensesInput"></input>
            </tr>
        </table>
    </div>
  )
}
