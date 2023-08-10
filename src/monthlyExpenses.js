import React from 'react'

export default function monthlyExpenses() {

    const expenses = [
        "Student Loans", 
        "Auto Loans", 
        "Credit Cards", 
        "Misc Additional"];

  return (
    <div>
      <p>Please only include debts which are relevant to your credit report.</p>
      <p>Utilities, insurance payments, and similar revolving payments need not be added.</p>
      <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Monthly Credit Expenses</th>
              <th scope="col">Monthly Minimum</th>
              <th scope="col">Total Debt Amount</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map(expenses)}
            </tbody>
        </table>
    </div>
  )
}
