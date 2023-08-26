import React from 'react'
import Home from './Home';
import Statusbar from './Statusbar';
import Propertyinfo from './Propertyinfo';
import MonthlyExpenses from './MonthlyExpenses';
import Navigation from './Navigation';
import Income from './Income';
import Assets from './Assets';
import Financing from './Financing';

export default function App() {
    return (
    <>
    <Home />
    <Navigation/>
    <Statusbar />
    <Propertyinfo/>
    <Income/>
    <MonthlyExpenses />
    <Assets />
    <Financing/>
    </>
  )
}
