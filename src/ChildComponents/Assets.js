import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../StyleSheets/Assets.css";

export default function AssetsArea({ setApptotalAssets }) {
  const [cAAmount, setcAAmount] = useState("");
  const [sAAmount, setsAAmount] = useState("");
  const [rEAmount, setrEAmount] = useState("");
  const [gAmount, setgAmount] = useState("");

  const onChangeCHK = (event) => setcAAmount(event.target.value);
  const onChangeSAV = (event) => setsAAmount(event.target.value);
  const onChangeRET = (event) => setrEAmount(event.target.value);
  const onChangeGFT = (event) => setgAmount(event.target.value);

  let totalcAAmount = parseInt(cAAmount);
  let totalsAAmount = parseInt(sAAmount);
  let totalrEAmount = parseInt(rEAmount);
  let totalgAmount = parseInt(gAmount);

  const assetValues = [
    totalcAAmount || null,
    totalsAAmount || null,
    totalrEAmount || null,
    totalgAmount || null,
  ];

  const totalAssets = assetValues.reduce((accumulator, currentValue) => {
    return currentValue !== null ? accumulator + currentValue : accumulator;
  }, 0);

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
      title: "Gift Funds",
      onChangeValue: gAmount,
      onChangeFunction: onChangeGFT,
    },
  ];

  const assetUI = (title, onChangeValue, onChangeFunction) => {
    return (
      <Box textAlign={"center"}>
        <Typography variant="h4">{title}</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="int"
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
      {assetTypeLabel.map((input) =>
        assetUI(input.title, input.onChangeValue, input.onChangeFunction)
      )}
    </Box>
  );
}
