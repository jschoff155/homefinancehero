import React, { useState } from 'react'
import Statusbar from './ChildComponents/Statusbar';
import Propertyinfo from './ChildComponents/Propertyinfo';
import MonthlyExpenses from './ChildComponents/MonthlyExpenses';
import Navigation from './ChildComponents/Navigation';
import Income from './ChildComponents/Income';
import Assets from './ChildComponents/Assets';
import Financing from './ChildComponents/Financing';

export default function App() { //Defining states for the variables
  const [apptotalAssets, setapptotalAssets] = useState(0);
  const [apptotalLoanAmount, setapptotalLoanAmount] = useState(0);
  const [apptotalMonthlyIncome, setapptotalMonthlyIncome] = useState(0);
  const [apptotalMonthlyExpenses, setapptotalMonthlyExpenses] = useState(0);
  
  //Defining functions to be passed as props
  const onChangeAssetTotal = event =>setapptotalAssets(event.target.value);
  const onChangeLoanTotal = event =>setapptotalLoanAmount(event.target.value);
  const onChangeMonthlyIncomeTotal = event =>setapptotalMonthlyIncome(event.target.value);
  const onChangeMonthlyExpensesTotal = event =>setapptotalMonthlyExpenses(event.target.value);

  const appdebtToIncome = (apptotalMonthlyExpenses && apptotalMonthlyIncome && (parseInt(apptotalMonthlyExpenses)/parseInt(apptotalMonthlyIncome)));
  
  //UI with props identified for their respective components
    return(
      <div>
        <>
        <h1>Home Finance Hero </h1>
        <Navigation/>
        <Statusbar totalAssets={apptotalAssets} totalLoanAmount={apptotalLoanAmount} debtToIncome={appdebtToIncome}/>
        <Propertyinfo totalLoanupdater={onChangeLoanTotal}/>
        <Income totalIncomeupdater={onChangeMonthlyIncomeTotal}/>
        <MonthlyExpenses totalExpensesupdater={onChangeMonthlyExpensesTotal}/>
        <Assets totalAssetupdater={onChangeAssetTotal}/>
        <Financing/>
        </>
      </div>
    )
  }
