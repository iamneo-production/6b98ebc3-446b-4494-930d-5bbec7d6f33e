import React from "react";
import CardWrapper from "./CardWrapper";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import FlexEnd from "./FlexEnd";
import FlexBetween from "./FlexBetween";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

const AllDocumentList = ({ data, handleDoc }) => {
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;

  const navigate = useNavigate();

  return (
    <>
      {/* <DocumentList data={notes} handleDoc={handleDocs}/> */}
      <CardWrapper gap="0.5rem" minHeight="100%">
        <Typography
          fontSize="14px"
          fontWeight="600"
          color="#5a5a5a"
          textTransform="uppercase"
        >
          All Documents
        </Typography>

        <Divider />
        {/* {data.map((d) => {
          if (d !== null) {
            return ( */}
        <Box mt="0.5rem" display="flex" flexDirection="column">
          <FlexBetween
            padding="1rem"
            bgcolor={primaryLight}
            borderBottom="1px solid #5a5a5a"
          >
            <Typography
              // mb="0.5rem"
              fontSize="14px"
              fontWeight="600"
            >
              Document Title
              {/* {d.name} */}
            </Typography>
            {/* <Typography
              maxHeight="2.5rem"
              fontSize="12px"
              color="#5a5a5a"
              overflow="hidden"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              reprehenderit quas nam! Sed, possimus nihil rerum dignissimos
              alias deserunt? Aliquid susciped, possimus nihil rerum dignissimos
              alias deserunt? Aliquid suscipit...
            </Typography> */}
            <FlexEnd>
              <PrimaryButton
                variant="outlined"
                size="small"
                // onClick={() => handleDoc(d.note)}
              >
                View
              </PrimaryButton>
            </FlexEnd>
          </FlexBetween>
        </Box>
        {/* );
          }
        })} */}
      </CardWrapper>
    </>
  );
};

export default AllDocumentList;
