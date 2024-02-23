import React, { useState } from "react";
import Statusbar from "./ChildComponents/Statusbar";
import Propertyinfo from "./ChildComponents/Propertyinfo";
import MonthlyExpenses from "./ChildComponents/MonthlyExpenses";
import Navigation from "./ChildComponents/Navigation";
import Income from "./ChildComponents/Income";
import Assets from "./ChildComponents/Assets";
import Summary from "./ChildComponents/Summary";
import Financing from "./ChildComponents/Financing";
import { Typography } from "@mui/material";
import LandingPage from "./ChildComponents/LandingPage";

export default function App() {
  const [apptotalAssets, setApptotalAssets] = useState("");
  const [apptotalLoanAmount, setAppTotalLoanAmount] = useState("");
  const [apptotalDownPaymentAmount, setAppDownPaymentAmount] = useState("");
  const [apptotalMonthlyIncome, setapptotalMonthlyIncome] = useState("");
  const [apptotalMonthlyExpenses, setapptotalMonthlyExpenses] = useState("");
  const [appMortgageMonthlyPayment, setappMortgageMonthlyPayment] =
    useState("");
  const [activeComponent, setActiveComponent] = useState("LandingPage");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "LandingPage":
        return <LandingPage />;
      case "Property":
        return <Propertyinfo setAppTotalLoanAmount={setAppTotalLoanAmount} />;

      case "Income":
        return <Income setapptotalMonthlyIncome={setapptotalMonthlyIncome} />;
      case "Expenses":
        return (
          <MonthlyExpenses
            setapptotalMonthlyExpenses={setapptotalMonthlyExpenses}
          />
        );
      case "Assets":
        return <Assets setApptotalAssets={setApptotalAssets} />;
      case "Financing":
        return (
          <Financing
            setAppTotalLoanAmount={setAppTotalLoanAmount}
            setapptotalMonthlyIncome={setapptotalMonthlyIncome}
            setappMortgageMonthlyPayment={setappMortgageMonthlyPayment}
            setAppDownPaymentAmount={setAppDownPaymentAmount}
          />
        );
      case "Summary":
        return (
          <Summary
            totalAssets={apptotalAssets}
            totalLoanAmount={apptotalLoanAmount}
            appdebtToIncome={appdebtToIncome}
            apptotalMonthlyIncome={apptotalMonthlyIncome}
            apptotalMonthlyExpenses={apptotalMonthlyExpenses}
            appMortgageMonthlyPayment={appMortgageMonthlyPayment}
            apptotalDownPaymentAmount={apptotalDownPaymentAmount}
          />
        );
      default:
        return null;
    }
  };

  const appdebtToIncome =
    apptotalMonthlyExpenses &&
    apptotalMonthlyIncome &&
    appMortgageMonthlyPayment &&
    (
      ((parseInt(appMortgageMonthlyPayment) +
        parseInt(apptotalMonthlyExpenses)) /
        parseInt(apptotalMonthlyIncome)) *
      100
    ).toFixed(2);
  console.log(appMortgageMonthlyPayment);
  return (
    <>
      <Typography textAlign={"center"} variant="h3" my={4}>
        Mortgage Application Preparedness Guide
      </Typography>
      <Navigation setActiveComponent={setActiveComponent} />
      {
        <Statusbar
          totalAssets={apptotalAssets}
          totalLoanAmount={apptotalLoanAmount}
          appdebtToIncome={appdebtToIncome}
          apptotalMonthlyIncome={apptotalMonthlyIncome}
          apptotalMonthlyExpenses={apptotalMonthlyExpenses}
        />
      }
      {renderActiveComponent()}
    </>
  );
}
