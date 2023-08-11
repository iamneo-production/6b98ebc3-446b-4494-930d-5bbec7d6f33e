const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const CardWrapper = styled(Box)({
  padding: " 1.5rem 1rem",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: "1rem",
  boxShadow: "0 0 0 2px #fff",
});

export default CardWrapper;
