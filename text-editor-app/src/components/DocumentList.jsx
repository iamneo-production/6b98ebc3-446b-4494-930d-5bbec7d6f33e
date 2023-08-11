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
        <Box padding="0.5rem" border="1px solid #5a5a5a" borderRadius="0.5rem">
          <Typography fontSize="12px" color="#5a5a5a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            reprehenderit quas nam! Sed, possimus nihil rerum dignissimos alias
            deserunt? Aliquid susciped, possimus nihil rerum dignissimos alias
            deserunt? Aliquid suscipit
            <FlexEnd>
              <IconButton>
                <EditOutlined fontSize="small" />
              </IconButton>
            </FlexEnd>
          </Typography>
        </Box>
        <Box padding="0.5rem" border="1px solid #5a5a5a" borderRadius="0.5rem">
          <Typography fontSize="12px" color="#5a5a5a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            reprehenderited, possimus nihil rerum dignissimos alias deserunt?
            Aliquid suscip quas nam! Sed, possimus nihil rerum dignissimos alias
            deserunt? Aliquid suscipit
          </Typography>
          <FlexEnd>
            <IconButton onClick={handleEditClicked}>
              <EditOutlined fontSize="small" />
            </IconButton>
          </FlexEnd>
        </Box>
      </Box>
    </CardWrapper>
  );
};

export default DocumentList;
