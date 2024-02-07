import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../StyleSheets/Navigation.css";

export default function Navigation({ setActiveComponent }) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      display={"flex"}
      justifyContent={"space-around"}
    >
      <Button variant="outlined" onClick={() => handleButtonClick("Income")}>
        Income
      </Button>
      <Button variant="outlined" onClick={() => handleButtonClick("Expenses")}>
        Expenses
      </Button>
      <Button variant="outlined" onClick={() => handleButtonClick("Assets")}>
        Assets
      </Button>
      <Button variant="outlined" onClick={() => handleButtonClick("Financing")}>
        Financing
      </Button>
    </Stack>
  );
}
