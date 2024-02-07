import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../StyleSheets/statusbar.css";

export default function Statusbar(props) {
  return (
    <Box display={"flex"} justifyContent={"space-around"} mx={5} my={4}>
      <Typography variant="h5">
        Debt-To-Income %: {props.appdebtToIncome}
      </Typography>
      <Typography variant="h5">Assets on file: ${props.totalAssets}</Typography>
      <Typography variant="h5">
        Loan Amount: ${props.totalLoanAmount}
      </Typography>
    </Box>
  );
}
