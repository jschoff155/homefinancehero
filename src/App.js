import React, { useState } from "react";
//import Statusbar from "./ChildComponents/Statusbar";
import Propertyinfo from "./ChildComponents/Propertyinfo";
import MonthlyExpenses from "./ChildComponents/MonthlyExpenses";
import Box from "@mui/material/Box";
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
        return <LandingPage setActiveComponent={setActiveComponent} />;
      case "Property":
        return (
          <Propertyinfo
            setAppTotalLoanAmount={setAppTotalLoanAmount}
            setActiveComponent={setActiveComponent}
          />
        );

      case "Income":
        return (
          <Income
            setapptotalMonthlyIncome={setapptotalMonthlyIncome}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Expenses":
        return (
          <MonthlyExpenses
            setapptotalMonthlyExpenses={setapptotalMonthlyExpenses}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Assets":
        return (
          <Assets
            setApptotalAssets={setApptotalAssets}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Financing":
        return (
          <Financing
            setAppTotalLoanAmount={setAppTotalLoanAmount}
            setapptotalMonthlyIncome={setapptotalMonthlyIncome}
            setappMortgageMonthlyPayment={setappMortgageMonthlyPayment}
            setAppDownPaymentAmount={setAppDownPaymentAmount}
            setActiveComponent={setActiveComponent}
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
            setActiveComponent={setActiveComponent}
          />
        );
      default:
        return null;
    }
  };

  const appdebtToIncome =
    apptotalMonthlyIncome &&
    apptotalMonthlyExpenses &&
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
      {renderActiveComponent()}
      <Box my={3}>
        <Typography textAlign={"center"} variant="h5">
          Income {">"} Expenses {">"} Assets {">"} Loan Terms {">"} Summary
        </Typography>
      </Box>
      <Typography textAlign={"center"} variant="h4">
        Support the project,{" "}
        <a href="https://buymeacoffee.com/jacobschoff">Buy me a coffee</a>
      </Typography>
    </>
  );
}
