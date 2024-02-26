import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function Summary(props, { setActiveComponent }) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Stack display={"flex"} justifyContent={"space-around"} mx={5} my={4}>
      <Typography variant="h5">
        Monthly Income: {props.apptotalMonthlyIncome}
      </Typography>
      <Typography variant="h5">
        Monthly Expenses (prior to home financing):{" "}
        {props.apptotalMonthlyExpenses}
      </Typography>
      <Typography variant="h5">
        Debt-To-Income %: {props.appdebtToIncome}
      </Typography>
      {props.appdebtToIncome > 45 ? (
        <Alert variant="filled" severity="warning">
          Your debt to income level is 45% or greater. This may cause problems
          with your loan application. Consider paying off some debt (Expenses),
          purchasing a cheaper home, or putting more money down for a down
          payment.(Financing)
        </Alert>
      ) : (
        <Alert variant="filled" severity="success">
          Your debt to income level is below 45% which is what many lenders
          prefer. Great Job!
        </Alert>
      )}
      <Typography variant="h5">
        Down payment amount: ${props.apptotalDownPaymentAmount}
      </Typography>
      <Typography variant="h5">Assets on file: ${props.totalAssets}</Typography>
      {props.apptotalDownPaymentAmount > props.totalAssets ? (
        <Alert variant="filled" severity="warning">
          Your downpayment amount exceeds your available assets on file. Please
          revisit the assets screen and update your values or decrease your down
          payment amount.
        </Alert>
      ) : (
        <Alert variant="filled" severity="success">
          You assets on file exceed your downpayment. You're good to go!
        </Alert>
      )}

      <Typography variant="h5">
        Loan Amount: ${props.totalLoanAmount}
      </Typography>
      <Typography variant="h5">
        Mortgage Payment (Principal & Interest): $
        {props.appMortgageMonthlyPayment}
      </Typography>
      <Button variant="outlined" onClick={() => handleButtonClick("Income")}>
        Start again
      </Button>
    </Stack>
  );
}
