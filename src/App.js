import React, { useState } from 'react'
import Home from './Home';
import Statusbar from './Statusbar';
import Propertyinfo from './Propertyinfo';
import MonthlyExpenses from './MonthlyExpenses';
import Navigation from './Navigation';
import Income from './Income';
import Assets from './Assets';
import Financing from './Financing';



export default function App() {
    const [tAssets, settAssets] = useState();
    const [tLoanAmount, settLoanAmount] = useState();
    //const [tMonthlyExpenses, settMonthlyExpenses] = useState();
    //const [tMonthlyIncome, settMonthlyIncome] = useState();


    return (
    <>
    <Home />
    <Navigation/>
    <Statusbar tAssets={tAssets} settAssets={settAssets} tLoanAmount={tLoanAmount} settLoanAmount={settLoanAmount}/>
    <Propertyinfo/>
    <Income/>
    <MonthlyExpenses tLoanAmount={tLoanAmount} settLoanAmount={settLoanAmount}/>
    <Assets tAssets={tAssets} settAssets={settAssets}/>
    <Financing/>
    </>
  )
}
