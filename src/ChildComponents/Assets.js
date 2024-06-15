import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../StyleSheets/Assets.css";
import "../StyleSheets/Universal.css";

export default function AssetsArea({ setApptotalAssets, setActiveComponent }) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const [cAAmount, setcAAmount] = useState();
  const [sAAmount, setsAAmount] = useState();
  const [rEAmount, setrEAmount] = useState();
  const [mMAmount, setmMAmount] = useState();
  const [bAAmount, setbAAmount] = useState();
  const [gAmount, setgAmount] = useState();

  const onChangeCHK = (event) => setcAAmount(event.target.value);
  const onChangeSAV = (event) => setsAAmount(event.target.value);
  const onChangeRET = (event) => setrEAmount(event.target.value);
  const onChangeMM = (event) => setmMAmount(event.target.value);
  const onChangeBA = (event) => setbAAmount(event.target.value);
  const onChangeGFT = (event) => setgAmount(event.target.value);

  let totalcAAmount = parseInt(cAAmount);
  let totalsAAmount = parseInt(sAAmount);
  let totalrEAmount = parseInt(rEAmount);
  let totalmMAmount = parseInt(mMAmount);
  let totalbAAmount = parseInt(bAAmount);
  let totalgAmount = parseInt(gAmount);

  const assetValues = [
    totalcAAmount || null,
    totalsAAmount || null,
    totalrEAmount || null,
    totalmMAmount || null,
    totalbAAmount || null,
    totalgAmount || null,
  ];

  const totalAssets = assetValues.reduce((accumulator, currentValue) => {
    return currentValue !== null ? accumulator + currentValue : accumulator;
  }, 0);

  useEffect(() => {
    setApptotalAssets(totalAssets);
  }, [totalAssets, setApptotalAssets]);

  useEffect(() => {
    setApptotalAssets(totalAssets);
  }, [totalAssets, setApptotalAssets]);

  const assetTypeLabel = [
    {
      title: "Checking Account Value",
      onChangeValue: cAAmount,
      onChangeFunction: onChangeCHK,
    },
    {
      title: "Savings Account Value",
      onChangeValue: sAAmount,
      onChangeFunction: onChangeSAV,
    },
    {
      title: "401K/IRA Value",
      onChangeValue: rEAmount,
      onChangeFunction: onChangeRET,
    },
    {
      title: "Money Market Account",
      onChangeValue: mMAmount,
      onChangeFunction: onChangeMM,
    },
    {
      title: "Brokerage Account",
      onChangeValue: bAAmount,
      onChangeFunction: onChangeBA,
    },
    {
      title: "Gift Funds",
      onChangeValue: gAmount,
      onChangeFunction: onChangeGFT,
    },
  ];
  function reset() {
    setcAAmount("");
    setsAAmount("");
    setrEAmount("");
    setgAmount("");
  }

  const assetUI = (title, onChangeValue, onChangeFunction) => {
    return (
      <Box textAlign={"center"}>
        <Typography variant="h4">{title}</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          value={onChangeValue}
          onChange={onChangeFunction}
        />
      </Box>
    );
  };

  return (
    <Box textAlign={"center"} mx={8} my={5}>
      <Typography variant="h3">Assets on file</Typography>
      <Typography variant="h4">
        Total Assets on file: ${totalAssets && parseInt(totalAssets).toFixed(2)}
      </Typography>
      <Button variant="outline" labelId="Reset" onClick={() => reset}>
        Reset
      </Button>
      {assetTypeLabel.map((input) =>
        assetUI(input.title, input.onChangeValue, input.onChangeFunction)
      )}
      <Box my={3}>
        <Button
          variant="outlined"
          onClick={() => handleButtonClick("Financing")}
        >
          Next: Loan Terms
        </Button>
      </Box>
    </Box>
  );
}
