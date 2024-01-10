import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../StyleSheets/Financing.css";

export default function Financing(props) {
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");

  const rateForFormula = rate * 0.01;

  const paymentAmount =
    props.apptotalLoanAmount *
      (((rateForFormula / 12) * (1 + rateForFormula / 12) ** term) /
        ((1 + rateForFormula / 12) ** term - 1)) || null;

  const onChangeTerm = (event) => setTerm(event.target.value);
  const onChangeRate = (event) => setRate(event.target.value);

  return (
    <Box>
      <Typography variant="h2">Mortgage Calculator</Typography>
      <Typography variant="h3">Current Loan Amount</Typography>
      <Typography variant="h3">{props.apptotalLoanAmount}</Typography>
      <Typography variant="h3">Term</Typography>
      <TextField type="text" value={term} onChange={onChangeTerm} />
      <Typography variant="h3">Interest Rate</Typography>
      <TextField type="text" value={rate} onChange={onChangeRate} />
      <Typography variant="h3">Estimated P&I Payment:</Typography>
      <Typography variant="h3">{paymentAmount.toFixed(2)}</Typography>
    </Box>
  );
}
