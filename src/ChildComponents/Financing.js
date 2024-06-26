import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
//import Alert from "@mui/material/Alert";
import "../StyleSheets/Financing.css";
import "../StyleSheets/Universal.css";

export default function Financing({
  setAppTotalLoanAmount,
  setappMortgageMonthlyPayment,
  setAppDownPaymentAmount,
  setActiveComponent,
}) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");

  const rateForFormula = rate * 0.01;

  const tLoanAmount =
    homePrice && downPayment && parseInt(homePrice) - parseInt(downPayment);

  useEffect(() => {
    setAppTotalLoanAmount(tLoanAmount);
  }, [tLoanAmount, setAppTotalLoanAmount]);

  useEffect(() => {
    setAppDownPaymentAmount(downPayment);
  }, [downPayment, setAppDownPaymentAmount]);

  const paymentAmount =
    (tLoanAmount &&
      term &&
      rate &&
      (
        (parseInt(tLoanAmount) *
          ((rateForFormula / 12) * (1 + rateForFormula / 12) ** term)) /
        ((1 + rateForFormula / 12) ** term - 1)
      ).toFixed(2)) ||
    null;

  const onChangeTerm = (event) => setTerm(event.target.value);
  const onChangeRate = (event) => setRate(event.target.value);
  const onChangeHP = (event) => setHomePrice(event.target.value);
  const onChangeDP = (event) => setDownPayment(event.target.value);

  function reset() {
    setTerm("");
    setRate("");
    setHomePrice("");
    setDownPayment("");
  }

  useEffect(() => {
    setappMortgageMonthlyPayment(paymentAmount);
  }, [paymentAmount, setappMortgageMonthlyPayment]);

  return (
    <Box textAlign={"center"} mx={8} my={5}>
      <Typography variant="h3">Mortgage Calculator</Typography>
      <Button variant="outline" labelId="Reset" onClick={reset}>
        Reset
      </Button>
      <Typography>Home Price</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="number"
        value={homePrice}
        onChange={onChangeHP}
      />
      <Typography>Down Payment Amount</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="number"
        value={downPayment}
        onChange={onChangeDP}
      />
      <Typography variant="h4">
        Total Loan Amount: ${tLoanAmount && parseInt(tLoanAmount).toFixed(2)}
      </Typography>

      <Typography variant="h4">Term</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
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
        value={rate}
        onChange={onChangeRate}
      >
        {[
          3, 3.125, 3.25, 3.375, 3.5, 3.625, 3.75, 3.875, 4, 4.125, 4.25, 4.375,
          4.5, 4.625, 4.75, 4.875, 5, 5.125, 5.25, 5.375, 5.5, 5.625, 5.75,
          5.875, 6, 6.125, 6.25, 6.375, 6.5, 6.625, 6.75, 6.875, 7, 7.125, 7.25,
          7.375, 7.5, 7.625, 7.75, 7.875,
        ].map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <Typography variant="h4">Estimated P&I Payment:</Typography>
      <Typography variant="h4">{paymentAmount}</Typography>
      <Box my={3}>
        <Button variant="outlined" onClick={() => handleButtonClick("Summary")}>
          See Your Summary
        </Button>
      </Box>
    </Box>
  );
}
