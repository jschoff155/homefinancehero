import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
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

  function reset() {
    setTerm("");
    setRate("");
    setLoan("");
  }
  const selectStyles = {
    menuList: (styles) => {
      return {
        ...styles,
        maxHeight: 136,
      };
    },
  };

  return (
    <Box textAlign={"center"} mx={8} my={5}>
      <Typography variant="h3">Mortgage Calculator</Typography>
      <Button variant="outline" labelId="Reset" onClick={reset}>
        Reset
      </Button>
      <Typography variant="h4">Current Loan Amount</Typography>
      <TextField type="int" value={loan} onChange={onChangeLoan} />
      {<Typography variant="h4">{props.apptotalLoanAmount}</Typography>}

      <Typography variant="h4">Term</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        styles={selectStyles}
        value={term}
        onChange={onChangeTerm}
      >
        <MenuItem value={120}>10 Year</MenuItem>
        <MenuItem value={180}>15 Year</MenuItem>
        <MenuItem value={240}>20 Year</MenuItem>
        <MenuItem value={360}>30 Year</MenuItem>
      </Select>
      <Typography variant="h4">Interest Rate</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        styles={selectStyles}
        value={rate}
        onChange={onChangeRate}
      >
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={3.125}>3.125</MenuItem>
        <MenuItem value={3.25}>3.25</MenuItem>
        <MenuItem value={3.375}>3.375</MenuItem>
        <MenuItem value={3.5}>3.5</MenuItem>
        <MenuItem value={3.625}>3.625</MenuItem>
        <MenuItem value={3.75}>3.75</MenuItem>
        <MenuItem value={3.875}>3.875</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={4.125}>4.125</MenuItem>
        <MenuItem value={4.25}>4.25</MenuItem>
        <MenuItem value={4.475}>4.375</MenuItem>
        <MenuItem value={4.5}>4.5</MenuItem>
        <MenuItem value={4.625}>4.625</MenuItem>
        <MenuItem value={4.75}>4.75</MenuItem>
        <MenuItem value={4.875}>4.875</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={5.125}>5.125</MenuItem>
        <MenuItem value={5.25}>5.25</MenuItem>
        <MenuItem value={5.375}>5.375</MenuItem>
        <MenuItem value={5.5}>5.5</MenuItem>
        <MenuItem value={5.625}>5.625</MenuItem>
        <MenuItem value={5.75}>5.75</MenuItem>
        <MenuItem value={5.875}>5.875</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={6.125}>6.125</MenuItem>
        <MenuItem value={6.25}>6.25</MenuItem>
        <MenuItem value={6.375}>6.375</MenuItem>
        <MenuItem value={6.5}>6.5</MenuItem>
        <MenuItem value={6.625}>6.625</MenuItem>
        <MenuItem value={6.75}>6.75</MenuItem>
        <MenuItem value={6.875}>6.875</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={7.125}>7.125</MenuItem>
        <MenuItem value={7.25}>7.25</MenuItem>
        <MenuItem value={7.375}>7.375</MenuItem>
        <MenuItem value={7.5}>7.5</MenuItem>
        <MenuItem value={7.625}>7.625</MenuItem>
        <MenuItem value={7.75}>7.75</MenuItem>
        <MenuItem value={7.875}>7.875</MenuItem>
      </Select>
      <Typography variant="h4">Estimated P&I Payment:</Typography>
      <Typography variant="h4">{paymentAmount}</Typography>
    </Box>
  );
}
