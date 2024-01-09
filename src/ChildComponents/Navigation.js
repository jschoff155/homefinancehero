import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../StyleSheets/Navigation.css";

export default function Navigation() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">Property</Button>
      <Button variant="outlined">Income</Button>
      <Button variant="outlined">Expenses</Button>
      <Button variant="outlined">Assets</Button>
      <Button variant="outlined">Financing</Button>
    </Stack>
  );
}
