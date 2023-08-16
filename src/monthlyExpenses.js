import React from 'react'
import './StyleSheets/MonthlyExpenses.css'

export default function MonthlyExpenses() {
  function totalMonthlyDebts(){
    const mEMonthlyAutoLoans = document.getElementById("mEMonthlyAutoLoans").value;
    const mAutoLoans = parseInt(mEMonthlyAutoLoans);
    const mEMonthlyStdLoans = document.getElementById("mEMonthlyStdLoans").value;
    const mStdLoans = parseInt(mEMonthlyStdLoans);
    const mEMonthlyCredit = document.getElementById("mEMonthlyCredit").value;
    const mCredit = parseInt(mEMonthlyCredit);
    const mEMiscDebtsMonthly = document.getElementById("mEMiscDebtsMonthly").value;
    const mMiscDebts = parseInt(mEMiscDebtsMonthly);
    const combinedmonthlyExpenses = +(mAutoLoans + mStdLoans + mCredit + mMiscDebts);
    document.getElementById("mETotalMonthly").innerHTML = `${combinedmonthlyExpenses}`;
  }
  function DebtTotal(){
    const mETotalAutoLoans = document.getElementById("mETotalAutoLoans").value;
    const totalAutoLoans = parseInt(mETotalAutoLoans);
    const mETotalStdLoans = document.getElementById("mETotalStdLoans").value;
    const totalStdLoans = parseInt(mETotalStdLoans);
    const mETotalCreditDebt = document.getElementById("mETotalCreditDebt").value;
    const totalCredit = parseInt(mETotalCreditDebt);
    const mEMiscDebtsTotal = document.getElementById("mEMiscDebtsTotal").value;
    const totalMiscDebts = parseInt(mEMiscDebtsTotal);
    const combinedDebtAmount = (totalAutoLoans + totalStdLoans + totalCredit + totalMiscDebts);
    document.getElementById("mETotalDebt").innerHTML = `${combinedDebtAmount}`;
  }
  return (
    <div id="monthlyExpenses">
    <h1>Monthly Expenses</h1>
      <div className="monthlyExpensesIntro">
        <p>Please only include debts which are relevant to your credit report.</p>
        <p>Utilities, insurance payments, and similar revolving payments need not be added.</p>
      </div>
      
      <table className='mETable'>
            <tr className="mEtr">
              <th className="mETh">Payment Type</th>
              <th className="mETh">Monthly Minimum Payment</th>
              <th className="mETh">Total Debt Amount</th>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">Auto loans</td>
              <td><input id="mEMonthlyAutoLoans" class="mEmonthly"></input></td>
              <td><input id="mETotalAutoLoans" class="mEtotalDebt"></input></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">Student loans</td>
              <td class="mEInputField"><input id="mEMonthlyStdLoans" class="mEmonthly"></input></td>
              <td class="mEInputField"><input id="mETotalStdLoans" class="mEtotalDebt"></input></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">Credit Cards</td>
              <td class="mEInputField"><input id="mEMonthlyCredit" class="mEmonthly"></input></td>
              <td class="mEInputField"><input id="mETotalCreditDebt" class="mEtotalDebt"></input></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">All other credit debts</td>
              <td class="mEInputField"><input id="mEMiscDebtsMonthly" class="mEmonthly"></input></td>
              <td class="mEInputField"><input id="mEMiscDebtsTotal" class="mEtotalDebt"></input></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType"></td>
              <td class="mEInputField"><button onClick={totalMonthlyDebts}>Calculate Minimum Payment Total</button></td>
              <td class="mEInputField"><button onClick={DebtTotal}>Calculate Total Debt Amount</button></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">Totals</td>
              <td class="mEInputField"><label>Monthly Payments: $</label><label id="mETotalMonthly" class="mEmonthly"></label></td>
              <td class="mEInputField"><label>Total Debts: $</label><label id="mETotalDebt" class="mEtotalDebt"></label></td>
            </tr>
        </table>
    </div>
  )
}
