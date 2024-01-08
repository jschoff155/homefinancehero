import React, { useState } from "react";
import Statusbar from "./ChildComponents/Statusbar";
import Propertyinfo from "./ChildComponents/Propertyinfo";
import MonthlyExpenses from "./ChildComponents/MonthlyExpenses";
import Navigation from "./ChildComponents/Navigation";
import Income from "./ChildComponents/Income";
import Assets from "./ChildComponents/Assets";
import Financing from "./ChildComponents/Financing";

export default function App() {
  //Defining states for the variables
  const [apptotalAssets, setapptotalAssets] = useState("");
  const [apptotalLoanAmount, setapptotalLoanAmount] = useState("");
  const [apptotalMonthlyIncome, setapptotalMonthlyIncome] = useState("");
  const [apptotalMonthlyExpenses, setapptotalMonthlyExpenses] = useState("");

  //Defining functions to be passed as props
  const onChangeAssetTotal = (num) => {
    setapptotalAssets(num);
  };
  const onChangeLoanTotal = (num) => {
    setapptotalLoanAmount(num);
  };
  const onChangeMonthlyIncomeTotal = (num) => {
    setapptotalMonthlyIncome(num);
  };
  const onChangeMonthlyExpensesTotal = (num) => {
    setapptotalMonthlyExpenses(num);
  };

  const appdebtToIncome =
    apptotalMonthlyExpenses &&
    apptotalMonthlyIncome &&
    (parseInt(apptotalMonthlyExpenses) / parseInt(apptotalMonthlyIncome)) * 100;

  //UI with props identified for their respective components
  return (
    <div>
      <>
        <h1>Home Finance Hero </h1>
        <Navigation />
        <Statusbar
          totalAssets={apptotalAssets}
          totalLoanAmount={apptotalLoanAmount}
          debtToIncome={appdebtToIncome}
        />
        <Propertyinfo onChangeLoanTotal={onChangeLoanTotal} />
        <Income onChangeMonthlyIncomeTotal={onChangeMonthlyIncomeTotal} />
        <MonthlyExpenses
          onChangeMonthlyExpensesTotal={onChangeMonthlyExpensesTotal}
        />
        <Assets onChangeAssetTotal={onChangeAssetTotal} />
        <Financing />
      </>
    </div>
  );
}
