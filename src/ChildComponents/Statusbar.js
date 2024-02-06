import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../StyleSheets/statusbar.css";

export default function Statusbar(props) {
  const DTI = props.appdebtToIncome;

  useEffect(() => {
    function DTIalert() {
      if (DTI >= 45) {
        document.getElementById("DTIalert").innerHTML =
          "DTI should be below 45% to qualify for most loans";
      }
    }

    DTIalert();
  }, [DTI]);

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
