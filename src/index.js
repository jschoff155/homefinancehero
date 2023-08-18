import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Statusbar from './Statusbar';
import Propertyinfo from './Propertyinfo';
import MonthlyExpenses from './MonthlyExpenses';
import Navigation from './Navigation';
import Income from './Income';
import Assets from './Assets';
import Financing from './Financing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Navigation/>
    <Statusbar/>
    <Propertyinfo/>
    <Income/>
    <MonthlyExpenses/>
    <Assets/>
    <Financing/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
