import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexEnd from "./FlexEnd";
import { EditOutlined } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

const DocumentList = ({ data, handleDoc }) => {
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;

  const navigate = useNavigate();
  return (
    // <CardWrapper gap="0.5rem">
    <CardWrapper gap="0.5rem" height="470px" overflow="hidden">
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
          onClick={() => {
            navigate("/view-all-documents");
          }}
        >
          View all
        </PrimaryButton>
      </FlexBetween>

      <Divider />

      {data.map((d)=> {
         if(d !== null){
          
          return(
        
            <Box mt="0.5rem" display="flex" flexDirection="column" gap="0.75rem">
            <Box padding="1rem" border="1px solid #b5b5b5" borderRadius="0.5rem" height="70px">
              <h5>{d.name}</h5>
              <FlexEnd>
                <PrimaryButton variant="outlined" size="small" onClick={()=> handleDoc(d.note)}>
                  Edit
                </PrimaryButton>
              </FlexEnd>
            </Box>
          </Box>)
         }
       
      })}
      

      {/* <Box mt="0.5rem" display="flex" flexDirection="column" gap="0.75rem">
        <Box
          padding="1rem"
          bgcolor={primaryLight}
          border="1px solid #b5b5b5"
          borderRadius="0.5rem"
        >
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
      </Box> */}
    </CardWrapper>
  );
};

export default DocumentList;
