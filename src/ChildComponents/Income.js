import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../StyleSheets/Income.css";
import Button from "@mui/material/Button";

export default function Income({ setapptotalMonthlyIncome }) {
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

  const totalMonthlyIncome = incomeValues.reduce(
    (accumulator, currentValue) => {
      return currentValue !== null ? accumulator + currentValue : accumulator;
    },
    0
  );

  const onChangeNOB = (event) => setNumberOfBorrowers(event.target.value);
  const onChangePTBO = (event) => setpayTypeBO(event.target.value);
  const onChangePTBT = (event) => setpayTypeBT(event.target.value);
  const onChangeHBO = (event) => setHourlyPayBO(event.target.value);
  const onChangeMBO = (event) => setMonthlyPayBO(event.target.value);
  const onChangeSBO = (event) => setSalaryPayBO(event.target.value);
  const onChangeHBT = (event) => setHourlyPayBT(event.target.value);
  const onChangeMBT = (event) => setMonthlyPayBT(event.target.value);
  const onChangeSBT = (event) => setSalaryPayBT(event.target.value);

  function reset() {
    setHourlyPayBO("");
    setMonthlyPayBO("");
    setSalaryPayBO("");
    setHourlyPayBT("");
    setMonthlyPayBT("");
    setSalaryPayBT("");
  }

  return (
    <Box textAlign={"center"} mx={8} my={5}>
      <Typography variant="h3">Income</Typography>
      <Typography variant="h4">
        Total Monthly Income: $
        {totalMonthlyIncome && parseFloat(totalMonthlyIncome).toFixed(2)}
      </Typography>
      <Button variant="outline" labelId="Reset" onClick={reset}>
        Reset
      </Button>
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
            <MenuItem value={"hourly"} onChange={onChangePTBO}>
              Hourly
            </MenuItem>
            <MenuItem value={"monthly"} onChange={onChangePTBO}>
              Monthly
            </MenuItem>
            <MenuItem value={"salary"} onChange={onChangePTBO}>
              Salary
            </MenuItem>
          </Select>
          {payTypeBO === "hourly" && (
            <Box>
              <Typography>Please input hourly rate</Typography>
              <TextField
                type="int"
                value={hourlyPayBO}
                onChange={onChangeHBO}
              />
            </Box>
          )}
          {payTypeBO === "monthly" && (
            <Box>
              <Typography>Please input monthly rate</Typography>
              <TextField
                type="int"
                value={monthlyPayBO}
                onChange={onChangeMBO}
              />
            </Box>
          )}
          {payTypeBO === "salary" && (
            <Box>
              <Typography>Please input annual salary</Typography>
              <TextField
                type="int"
                value={salaryPayBO}
                onChange={onChangeSBO}
              />
            </Box>
          )}
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
                type="int"
                value={hourlyPayBO}
                onChange={onChangeHBO}
              />
            </Box>
          )}
          {payTypeBO === "monthly" && (
            <Box>
              <Typography>Please input monthly rate</Typography>
              <TextField
                type="int"
                value={monthlyPayBO}
                onChange={onChangeMBO}
              />
            </Box>
          )}
          {payTypeBO === "salary" && (
            <Box>
              <Typography>Please input annual salary</Typography>
              <TextField
                type="int"
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
                type="int"
                value={hourlyPayBT}
                onChange={onChangeHBT}
              />
            </Box>
          )}
          {payTypeBT === "monthly" && (
            <Box>
              <Typography>Please input monthly rate</Typography>
              <TextField
                type="int"
                value={monthlyPayBT}
                onChange={onChangeMBT}
              />
            </Box>
          )}
          {payTypeBT === "salary" && (
            <Box>
              <Typography>Please input annual salary</Typography>
              <TextField
                type="int"
                value={salaryPayBT}
                onChange={onChangeSBT}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
