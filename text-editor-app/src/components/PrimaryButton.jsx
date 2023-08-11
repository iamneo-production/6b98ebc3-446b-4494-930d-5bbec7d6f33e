import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ onCLick, children, ...other }) => {
  return (
    <Button {...other} onClick={onCLick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
