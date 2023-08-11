import { IconButton } from "@mui/material";
import React from "react";

const TextFormatButton = ({ onClick, children }) => {
  return (
    <>
      <IconButton
        // disableRipple
        disableTouchRipple
        aria-label="bold"
        sx={{
          padding: "0.2rem",
          //   backgroundColor: "transparent",
          borderRadius: "0.2rem",
          ":focus": {},
        }}
        onClick={onClick}
      >
        {children}
      </IconButton>
    </>
  );
};

export default TextFormatButton;
