import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../StyleSheets/MonthlyExpenses.css";
import "../StyleSheets/Universal.css";

export default function MonthlyExpenses({
  setapptotalMonthlyExpenses,
  setActiveComponent,
}) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const [mAutoLoans, setmAutoLoans] = useState("");
  const [mStdLoans, setmStdLoans] = useState("");
  const [mCredit, setmCredit] = useState("");
  const [mAlimony, setmAlimony] = useState("");
  const [mChildSupport, setmChildSupport] = useState("");
  const [mSeperateMaintenance, setmSeperateMaintenance] = useState("");
  const [mPesonalLoans, setmPesonalLoans] = useState("");
  const [mMiscDebts, setmMiscDebts] = useState("");

  const onChangemAL = (event) => setmAutoLoans(event.target.value);
  const onChangemSL = (event) => setmStdLoans(event.target.value);
  const onChangemC = (event) => setmCredit(event.target.value);
  const onChangemAlimony = (event) => setmAlimony(event.target.value);
  const onChangemChildSupport = (event) => setmChildSupport(event.target.value);
  const onChangemSepMain = (event) =>
    setmSeperateMaintenance(event.target.value);
  const onChangemPersonalLoans = (event) =>
    setmPesonalLoans(event.target.value);
  const onChangemMD = (event) => setmMiscDebts(event.target.value);

  let totalmAutoLoans = parseInt(mAutoLoans);
  let totalmStdLoans = parseInt(mStdLoans);
  let totalmCredit = parseInt(mCredit);
  let totalmMiscDebts = parseInt(mMiscDebts);

  const liabilityValues = [
    totalmAutoLoans || null,
    totalmStdLoans || null,
    totalmCredit || null,
    totalmMiscDebts || null,
  ];

  const totalMonthlyExpenses = liabilityValues.reduce(
    (accumulator, currentValue) => {
      return currentValue !== null ? accumulator + currentValue : accumulator;
    },
    0
  );

  useEffect(() => {
    setapptotalMonthlyExpenses(totalMonthlyExpenses);
  }, [totalMonthlyExpenses, setapptotalMonthlyExpenses]);

  const paymentTypeInput = [
    {
      title: "Auto Loans",
      onChangeValue: mAutoLoans,
      onChangeFunction: onChangemAL,
    },
    {
      title: "Student Loans",
      onChangeValue: mStdLoans,
      onChangeFunction: onChangemSL,
    },
    {
      title: "Credit Cards",
      onChangeValue: mCredit,
      onChangeFunction: onChangemC,
    },
    {
      title: "Alimony",
      onChangeValue: mAlimony,
      onChangeFunction: onChangemAlimony,
    },
    {
      title: "Child Support",
      onChangeValue: mChildSupport,
      onChangeFunction: onChangemChildSupport,
    },
    {
      title: "Seperate Maintenance",
      onChangeValue: mSeperateMaintenance,
      onChangeFunction: onChangemSepMain,
    },
    {
      title: "Personal Loans",
      onChangeValue: mPesonalLoans,
      onChangeFunction: onChangemPersonalLoans,
    },
    {
      title: "All other credit debts",
      onChangeValue: mMiscDebts,
      onChangeFunction: onChangemMD,
    },
  ];
  function reset() {
    setmAutoLoans("");
    setmStdLoans("");
    setmCredit("");
    setmMiscDebts("");
  }

  const ExpensesInput = (title, onChangeValue, onChangeFunction) => {
    return (
      <Box textAlign={"center"}>
        <Typography variant="h4">{title}</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          value={onChangeValue}
          onChange={onChangeFunction}
        />
      </Box>
    );
  };

  return (
    <Box textAlign={"center"} mx={8} my={5}>
      <Typography variant="h3">Monthly Expenses</Typography>
      <Typography variant="h4">
        Total Monthly Payments: $
        {totalMonthlyExpenses && parseInt(totalMonthlyExpenses).toFixed(2)}
      </Typography>
      <Typography variant="h4">
        Please exclude utilities, insurance, and similar non-legal financial
        obligations.
      </Typography>
      <Button variant="outline" labelId="Reset" onClick={reset}>
        Reset
      </Button>
      <Typography variant="h4"></Typography>
      {paymentTypeInput.map((input) =>
        ExpensesInput(input.title, input.onChangeValue, input.onChangeFunction)
      )}
      <Box my={3}>
        <Button variant="outlined" onClick={() => handleButtonClick("Assets")}>
          Next: Assets
        </Button>
      </Box>
    </Box>
  );
}
