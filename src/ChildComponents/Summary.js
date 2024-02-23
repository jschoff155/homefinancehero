import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

export default function Summary(props) {
  return (
    <Stack display={"flex"} justifyContent={"space-around"} mx={5} my={4}>
      <Typography variant="h5">
        Total Monthly Income: {props.apptotalMonthlyIncome}
      </Typography>
      <Typography variant="h5">
        Debt-To-Income %: {props.appdebtToIncome}
      </Typography>
      <Alert variant="filled" severity="success">
        Your debt to income level is below 45% which is what many lenders
        prefer. Great Job!
      </Alert>
      <Alert variant="filled" severity="warning">
        Your debt to income level is 45% or greater. This may cause problems
        with your loan application. Consider paying off some debt (Expenses),
        purchasing a cheaper home, or putting more money down for a down
        payment.(Financing)
      </Alert>
      <Typography></Typography>
      <Typography variant="h5">Assets on file: ${props.totalAssets}</Typography>
      <Typography variant="h5">
        Loan Amount: ${props.totalLoanAmount}
      </Typography>
    </Stack>
  );
}
