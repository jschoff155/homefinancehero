import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//import Alert from "@mui/material/Alert";

export default function Summary(props) {
  const handleButtonClick = (component) => {
    props.setActiveComponent(component);
  };

  return (
    <Stack
      textAlign={"center"}
      variant="h3"
      my={4}
      display={"flex"}
      justifyContent={"space-around"}
      mx={5}
    >
      <Box my={3}>
        <Typography variant="h5" my={3}>
          Monthly Income: {props.apptotalMonthlyIncome}
        </Typography>
        <Typography variant="h5" my={3}>
          Monthly Expenses (prior to home financing):{" "}
          {props.apptotalMonthlyExpenses}
        </Typography>
        <Typography variant="h5" my={3}>
          Debt-To-Income %: {props.appdebtToIncome}
        </Typography>
        <Typography variant="h5" my={3}>
          Down payment amount: ${props.apptotalDownPaymentAmount}
        </Typography>
        <Typography variant="h5" my={3}>
          Assets on file: ${props.totalAssets}
        </Typography>
        <Typography variant="h5" my={3}>
          Loan Amount: ${props.totalLoanAmount}
        </Typography>
        <Typography variant="h5" my={3}>
          Mortgage Payment (Principal & Interest): $
          {props.appMortgageMonthlyPayment}
        </Typography>
        <Typography variant="h5" my={3} fontStyle={"italic"}>
          Additional updates to come including input validation, updates to user
          interface, and more.
        </Typography>
        <Button variant="outlined" onClick={() => handleButtonClick("Income")}>
          Start again
        </Button>
      </Box>
    </Stack>
  );
}
