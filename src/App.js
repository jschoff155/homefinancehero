import React, { useState } from "react";
import Statusbar from "./ChildComponents/Statusbar";
import Propertyinfo from "./ChildComponents/Propertyinfo";
import MonthlyExpenses from "./ChildComponents/MonthlyExpenses";
import Navigation from "./ChildComponents/Navigation";
import Income from "./ChildComponents/Income";
import Assets from "./ChildComponents/Assets";
import Financing from "./ChildComponents/Financing";
import { Typography } from "@mui/material";
import LandingPage from "./ChildComponents/LandingPage";

export default function App() {
  const [apptotalAssets, setApptotalAssets] = useState("");
  const [apptotalLoanAmount, setAppTotalLoanAmount] = useState("");
  const [apptotalMonthlyIncome, setapptotalMonthlyIncome] = useState("");
  const [apptotalMonthlyExpenses, setapptotalMonthlyExpenses] = useState("");
  const [activeComponent, setActiveComponent] = useState("LandingPage");
  const [componentInputs, setComponentInputs] = useState({
    Property: {
      apptotalAssets: "",
      apptotalLoanAmount: "",
    },
    Income: {
      apptotalMonthlyIncome: "",
    },
    Expenses: {
      apptotalMonthlyExpenses: "",
    },
    Assets: {
      apptotalAssets: "",
    },
    Financing: {
      apptotalLoanAmount: "",
    },
  });

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "LandingPage":
        return <LandingPage />;
      case "Property":
        return (
          <Propertyinfo
            setAppTotalLoanAmount={setAppTotalLoanAmount}
            onChangeLoanTotal={onChangeLoanTotal}
          />
        );

      case "Income":
        return (
          <Income
            setapptotalMonthlyIncome={setapptotalMonthlyIncome}
            onChangeMonthlyIncomeTotal={onChangeMonthlyIncomeTotal}
          />
        );
      case "Expenses":
        return (
          <MonthlyExpenses
            setapptotalMonthlyExpenses={setapptotalMonthlyExpenses}
            onChangeMonthlyExpensesTotal={onChangeMonthlyExpensesTotal}
          />
        );
      case "Assets":
        return (
          <Assets
            setApptotalAssets={setApptotalAssets}
            onChangeAssetTotal={onChangeAssetTotal}
          />
        );
      case "Financing":
        return (
          <Financing
            apptotalLoanAmount={componentInputs.Financing.apptotalLoanAmount}
          />
        );
      default:
        return null;
    }
  };

  const onChangeAssetTotal = (num) => {
    setComponentInputs((prevInputs) => ({
      ...prevInputs,
      [activeComponent]: {
        ...prevInputs[activeComponent],
        apptotalAssets: num,
      },
    }));
  };

  const onChangeLoanTotal = (num) => {
    setComponentInputs((prevInputs) => ({
      ...prevInputs,
      [activeComponent]: {
        ...prevInputs[activeComponent],
        apptotalLoanAmount: num,
      },
    }));
  };

  const onChangeMonthlyIncomeTotal = (num) => {
    setComponentInputs((prevInputs) => ({
      ...prevInputs,
      [activeComponent]: {
        ...prevInputs[activeComponent],
        apptotalMonthlyIncome: num,
      },
    }));
  };

  const onChangeMonthlyExpensesTotal = (num) => {
    setComponentInputs((prevInputs) => ({
      ...prevInputs,
      [activeComponent]: {
        ...prevInputs[activeComponent],
        apptotalMonthlyExpenses: num,
      },
    }));
  };

  const appdebtToIncome =
    apptotalMonthlyExpenses &&
    apptotalMonthlyIncome &&
    (
      (parseInt(apptotalMonthlyExpenses) / parseInt(apptotalMonthlyIncome)) *
      100
    ).toFixed(2);

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
