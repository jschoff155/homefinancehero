import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../StyleSheets/MonthlyExpenses.css";

export default function MonthlyExpenses({ onChangeMonthlyExpensesTotal }) {
  const [mAutoLoans, setmAutoLoans] = useState("");
  const [mStdLoans, setmStdLoans] = useState("");
  const [mCredit, setmCredit] = useState("");
  const [mMiscDebts, setmMiscDebts] = useState("");

  const onChangemAL = (event) => setmAutoLoans(event.target.value);
  const onChangemSL = (event) => setmStdLoans(event.target.value);
  const onChangemC = (event) => setmCredit(event.target.value);
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
    onChangeMonthlyExpensesTotal(totalMonthlyExpenses);
  });

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
      title: "All other credit debts",
      onChangeValue: mMiscDebts,
      onChangeFunction: onChangemMD,
    },
  ];

  const ExpensesInput = (title, onChangeValue, onChangeFunction) => {
    return (
      <Box>
        <Typography variant="h4">{title}</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={onChangeValue}
          onChange={onChangeFunction}
        />
      </Box>
    );
  };

  return (
    <Box>
      <Typography variant="h3">Monthly Expenses</Typography>
      <Typography variant="h4">
        Total Monthly Payments: $
        {totalMonthlyExpenses && parseInt(totalMonthlyExpenses).toFixed(2)}
      </Typography>
      <Typography variant="h4">
        Only include debts which appear on your credit report.
      </Typography>
      <Typography variant="h4"></Typography>
      {paymentTypeInput.map((input) =>
        ExpensesInput(input.title, input.onChangeValue, input.onChangeFunction)
      )}
    </Box>
  );
}
