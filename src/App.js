import React, { useState, useCallback } from 'react'
import Statusbar from './ChildComponents/Statusbar';
import Propertyinfo from './ChildComponents/Propertyinfo';
import MonthlyExpenses from './MonthlyExpenses';
import Navigation from './Navigation';
import Income from './ChildComponents/Income';
import Assets from './ChildComponents/Assets';
import Financing from './ChildComponents/Financing';


export default function App() {
    const getAssets=(tAssets)=>{
      console.log({tAssets})
    }

    return (
    <>
    <h1>Home Finance Hero </h1>
    <Navigation/>
    <Statusbar tAssets={tAssets} tLoanAmount={tLoanAmount}/>
    <Propertyinfo/>
    <Income/>
    <MonthlyExpenses tAssets={getAssets}/>
    <Assets />
    <Financing/>
    </>
  )
}
