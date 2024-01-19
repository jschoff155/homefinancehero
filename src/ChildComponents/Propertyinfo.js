import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../StyleSheets/Propertyinfo.css";

export default function Propertyinfo({
  onChangeLoanTotal,
  apptotalLoanAmount,
  onChangeAssetTotal,
}) {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");

  const tLoanAmount =
    homePrice && downPayment && parseInt(homePrice) - parseInt(downPayment);

  const onChangeHP = (event) => setHomePrice(event.target.value);
  const onChangeDP = (event) => setDownPayment(event.target.value);

  useEffect(() => {
    onChangeLoanTotal(tLoanAmount);
    onChangeAssetTotal(homePrice);
  }, [onChangeLoanTotal, onChangeAssetTotal, homePrice, tLoanAmount]);

  useEffect(() => {
    // Set the initial values when the component mounts
    setHomePrice(apptotalLoanAmount.homePrice || "");
    setDownPayment(apptotalLoanAmount.downPayment || "");
  }, [apptotalLoanAmount]);

  return (
    <Box textAlign={"center"} my={10}>
      <Typography variant="h3">Loan Information</Typography>
      <Typography variant="h4">
        Total Loan Amount: ${tLoanAmount && parseInt(tLoanAmount).toFixed(2)}
      </Typography>
      <Typography>Home Price</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        value={homePrice}
        onChange={onChangeHP}
      />
      <Typography>Down Payment Amount</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        value={downPayment}
        onChange={onChangeDP}
      />
    </Box>
  );
}
