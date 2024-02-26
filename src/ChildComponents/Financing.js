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
      {/*{tLoanAmount > 0 &&
      downPayment > 0 &&
      tLoanAmount * 0.035 > downPayment ? (
        <Alert variant="filled" severity="warning">
          Most lenders can go as low as 3.5% ({tLoanAmount * (0.035).toFixed(2)}
          ) for a down payment with FHA lending options.
        </Alert>
      ) : (
        <Alert variant="filled" severity="success">
          You have enough assets to cover at least 3.5% down for an FHA loan.
        </Alert>
      )}*/}
      <Typography variant="h4">Estimated P&I Payment:</Typography>
      <Typography variant="h4">{paymentAmount}</Typography>
      <Button variant="outlined" onClick={() => handleButtonClick("Summary")}>
        See your Summary
      </Button>
    </Box>
  );
}
