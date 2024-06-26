import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "../StyleSheets/Income.css";
import "../StyleSheets/Universal.css";

export default function Income({
  setapptotalMonthlyIncome,
  setActiveComponent,
}) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const [payTypeBO, setpayTypeBO] = useState("");
  const [payTypeBT, setpayTypeBT] = useState("");
  const [hourlyPayBO, setHourlyPayBO] = useState("");
  const [monthlyPayBO, setMonthlyPayBO] = useState("");
  const [salaryPayBO, setSalaryPayBO] = useState("");
  const [hourlyPayBT, setHourlyPayBT] = useState("");
  const [monthlyPayBT, setMonthlyPayBT] = useState("");
  const [salaryPayBT, setSalaryPayBT] = useState("");
  const [numberOfBorrowers, setNumberOfBorrowers] = useState("");

  useEffect(() => {
    setapptotalMonthlyIncome(totalMonthlyIncome);
  });

  let totalhourlyPayBO = (parseInt(hourlyPayBO) * 2080) / 12;
  let totalhourlyPayBT = (parseInt(hourlyPayBT) * 2080) / 12;
  let totalmonthlyPayBO = parseInt(monthlyPayBO);
  let totalmonthlyPayBT = parseInt(monthlyPayBT);
  let totalsalaryPayBO = parseInt(salaryPayBO) / 12;
  let totalsalaryPayBT = parseInt(salaryPayBT) / 12;

  const incomeValues = [
    totalhourlyPayBO || null,
    totalhourlyPayBT || null,
    totalmonthlyPayBO || null,
    totalmonthlyPayBT || null,
    totalsalaryPayBO || null,
    totalsalaryPayBT || null,
  ];

  const totalMonthlyIncome = incomeValues
    .reduce((accumulator, currentValue) => {
      return currentValue !== null ? accumulator + currentValue : accumulator;
    }, 0)
    .toFixed(2);

  const onChangeNOB = (event) => setNumberOfBorrowers(event.target.value);
  const onChangePTBO = (event) => {
    setpayTypeBO(event.target.value);
    resetBO();
  };
  const onChangePTBT = (event) => {
    setpayTypeBT(event.target.value);
    resetBT();
  };
  const onChangeHBO = (event) => setHourlyPayBO(event.target.value);
  const onChangeMBO = (event) => setMonthlyPayBO(event.target.value);
  const onChangeSBO = (event) => setSalaryPayBO(event.target.value);
  const onChangeHBT = (event) => setHourlyPayBT(event.target.value);
  const onChangeMBT = (event) => setMonthlyPayBT(event.target.value);
  const onChangeSBT = (event) => setSalaryPayBT(event.target.value);

  function resetBO() {
    setHourlyPayBO("");
    setMonthlyPayBO("");
    setSalaryPayBO("");
  }
  function resetBT() {
    setHourlyPayBT("");
    setMonthlyPayBT("");
    setSalaryPayBT("");
  }

  /*
Function for self-employment income
SelfEmployment = (net + amortization + depreciation - expenses meals)
*/

  return (
    <Box textAlign={"center"} mx={8} my={5}>
      <Typography variant="h3">Income</Typography>
      <Typography variant="h4">
        Total Monthly Income: $
        {totalMonthlyIncome && parseFloat(totalMonthlyIncome).toFixed(2)}
      </Typography>
      <Typography variant="h3">Number of borrowers?</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={numberOfBorrowers}
        onChange={onChangeNOB}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
      </Select>
      {numberOfBorrowers === 1 && (
        <Box>
          <Typography>How is borrower one paid?</Typography>
          <Select value={payTypeBO} onChange={onChangePTBO}>
            <MenuItem value={"hourly"}>Hourly</MenuItem>
            <MenuItem value={"monthly"}>Monthly</MenuItem>
            <MenuItem value={"salary"}>Salary</MenuItem>
          </Select>
          {payTypeBO === "hourly" && (
            <Box>
              <Typography>Please input hourly rate</Typography>
              <TextField
                type="number"
                value={hourlyPayBO}
                onChange={onChangeHBO}
              />
            </Box>
          )}
          {payTypeBO === "monthly" && (
            <Box>
              <Typography>Please input monthly rate</Typography>
              <TextField
                type="number"
                value={monthlyPayBO}
                onChange={onChangeMBO}
              />
            </Box>
          )}
          {payTypeBO === "salary" && (
            <Box>
              <Typography>Please input annual salary</Typography>
              <TextField
                type="number"
                value={salaryPayBO}
                onChange={onChangeSBO}
              />
            </Box>
          )}
          {/*payTypeBO === "selfEmployed" && (
            <Box>
              <Typography>Please input last years net income</Typography>
              <TextField
                type="number"
                value={salaryPayBT}
                onChange={onChangeSBT}
              />
              <Typography>Please input last years amortization amount</Typography>
              <TextField
                type="number"
                value={salaryPayBT}
                onChange={onChangeSBT}
              />
              <Typography>Please input last years depreciation written off</Typography>
              <TextField
                type="number"
                value={salaryPayBT}
                onChange={onChangeSBT}
              />
              <Typography>Please input last years total for expensed meals</Typography>
              <TextField
                type="number"
                value={salaryPayBT}
                onChange={onChangeSBT}
              />
            </Box>
          )*/}
        </Box>
      )}
      {numberOfBorrowers === 2 && (
        <Box>
          <Typography>How is borrower one paid?</Typography>
          <Select value={payTypeBO} onChange={onChangePTBO}>
            <MenuItem value={"hourly"}>Hourly</MenuItem>
            <MenuItem value={"monthly"}>Monthly</MenuItem>
            <MenuItem value={"salary"}>Salary</MenuItem>
          </Select>
          {payTypeBO === "hourly" && (
            <Box>
              <Typography>Please input hourly rate</Typography>
              <TextField
                type="number"
                value={hourlyPayBO}
                onChange={onChangeHBO}
              />
            </Box>
          )}
          {payTypeBO === "monthly" && (
            <Box>
              <Typography>Please input monthly rate</Typography>
              <TextField
                type="number"
                value={monthlyPayBO}
                onChange={onChangeMBO}
              />
            </Box>
          )}
          {payTypeBO === "salary" && (
            <Box>
              <Typography>Please input annual salary</Typography>
              <TextField
                type="number"
                value={salaryPayBO}
                onChange={onChangeSBO}
              />
            </Box>
          )}
          <Typography>How is borrower two paid?</Typography>
          <Select value={payTypeBT} onChange={onChangePTBT}>
            <MenuItem value={"hourly"}>Hourly</MenuItem>
            <MenuItem value={"monthly"}>Monthly</MenuItem>
            <MenuItem value={"salary"}>Salary</MenuItem>
          </Select>
          {payTypeBT === "hourly" && (
            <Box>
              <Typography>Please input hourly rate</Typography>
              <TextField
                type="number"
                value={hourlyPayBT}
                onChange={onChangeHBT}
              />
            </Box>
          )}
          {payTypeBT === "monthly" && (
            <Box>
              <Typography>Please input monthly rate</Typography>
              <TextField
                type="number"
                value={monthlyPayBT}
                onChange={onChangeMBT}
              />
            </Box>
          )}
          {payTypeBT === "salary" && (
            <Box>
              <Typography>Please input annual salary</Typography>
              <TextField
                type="number"
                value={salaryPayBT}
                onChange={onChangeSBT}
              />
            </Box>
          )}
        </Box>
      )}
      <Box my={3}>
        <Button
          variant="outlined"
          onClick={() => handleButtonClick("Expenses")}
        >
          Next: Expenses
        </Button>
      </Box>
    </Box>
  );
}
