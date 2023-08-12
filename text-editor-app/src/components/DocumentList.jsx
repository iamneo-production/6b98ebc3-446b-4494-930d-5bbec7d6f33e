import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import FlexEnd from "./FlexEnd";
import { EditOutlined } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

const DocumentList = ({ handleEditClicked }) => {
  const navigate = useNavigate();
  return (
    <CardWrapper gap="0.5rem">
      <FlexBetween>
        <Typography
          fontSize="14px"
          fontWeight="600"
          color="#5a5a5a"
          textTransform="uppercase"
        >
          All Documents
        </Typography>
        <PrimaryButton
          variant="outlined"
          size="small"
          onCLick={() => {
            navigate("/view-all-documents");
          }}
        >
          View all
        </PrimaryButton>
      </FlexBetween>

      <Divider />
      <Box mt="0.5rem" display="flex" flexDirection="column" gap="0.75rem">
        <Box padding="1rem" border="1px solid #b5b5b5" borderRadius="0.5rem">
          <Typography mb="0.5rem" fontSize="14px" fontWeight="600">
            Document Title
          </Typography>
          <Typography
            maxHeight="3.2rem"
            fontSize="12px"
            color="#5a5a5a"
            overflow="hidden"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            reprehenderit quas nam! Sed,ipisicing elit. Accusamus reprehenderit
            quas nam! Sed,
          </Typography>
          <FlexEnd>
            <PrimaryButton variant="outlined" size="small">
              Edit
            </PrimaryButton>
          </FlexEnd>
        </Box>
      </Box>
    </CardWrapper>
  );
};

export default DocumentList;
