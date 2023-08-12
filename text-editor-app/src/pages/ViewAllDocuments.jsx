import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import AllDocumentList from "../components/AllDocumentList";

const ViewAllDocuments = () => {
  const handleOpenDocument = () => {};

  return (
    <Box height="100vh">
      <Navbar />
      <Box padding="2rem 3rem">
        <AllDocumentList handleOpenDocument={handleOpenDocument} />
      </Box>
    </Box>
  );
};

export default ViewAllDocuments;
