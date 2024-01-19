import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../StyleSheets/Financing.css";

export default function Financing(props) {
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [loan, setLoan] = useState("");

  const rateForFormula = rate * 0.01;

  const paymentAmount =
    (loan &&
      term &&
      rate &&
      (
        (parseInt(loan) *
          ((rateForFormula / 12) * (1 + rateForFormula / 12) ** term)) /
        ((1 + rateForFormula / 12) ** term - 1)
      ).toFixed(2)) ||
    null;

  const onChangeTerm = (event) => setTerm(event.target.value);
  const onChangeRate = (event) => setRate(event.target.value);
  const onChangeLoan = (event) => setLoan(event.target.value);
  return (
    <Box textAlign={"center"} mx={8} my={5}>
      <Typography variant="h3">Mortgage Calculator</Typography>
      <Typography variant="h4">Current Loan Amount</Typography>
      <TextField type="int" value={loan} onChange={onChangeLoan} />
      {/* <Typography variant="h4">{props.apptotalLoanAmount}</Typography> */}
      <Typography variant="h4">Term</Typography>
      <TextField type="int" value={term} onChange={onChangeTerm} />
      <Typography variant="h4">Interest Rate</Typography>
      <TextField type="int" value={rate} onChange={onChangeRate} />
      <Typography variant="h4">Estimated P&I Payment:</Typography>
      <Typography variant="h4">{paymentAmount}</Typography>
    </Box>
  );
}
