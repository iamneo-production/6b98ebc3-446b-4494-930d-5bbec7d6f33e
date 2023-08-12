import { Box, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import CardWrapper from "../components/CardWrapper";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import DocumentList from "../components/DocumentList";
import FlexEnd from "../components/FlexEnd";
import PrimaryButton from "../components/PrimaryButton";
import TextFormatButton from "../components/TextFormatButton";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderlined, setUnderlined] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleBold = () => {
    isBold ? setBold(false) : setBold(true);
    console.log(isBold);
  };
  const handleItalic = () => {
    isItalic ? setItalic(false) : setItalic(true);
    console.log(isItalic);
  };
  const handleUnderlined = () => {
    isUnderlined ? setUnderlined(false) : setUnderlined(true);
    console.log(isUnderlined);
  };

  const handleChange = () => {};

  const handleSave = () => {};
  const handleCreate = () => {};
  const handleEdit = () => {};
  const handleEditClicked = () => {
    isEditClicked ? setIsEditClicked(false) : setIsEditClicked(true);
    console.log(isEditClicked);
  };
  return (
    <Box height="100vh">
      <Navbar />
      <Box padding="2rem 3rem">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <CardWrapper gap="1rem">
              <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                gap="15px"
              >
                {/* TEXT FORMAT */}
                <TextFormatButton onClick={handleBold}>
                  <FormatBold />
                </TextFormatButton>
                <TextFormatButton onClick={handleItalic}>
                  <FormatItalic />
                </TextFormatButton>
                <TextFormatButton onClick={handleUnderlined}>
                  <FormatUnderlined />
                </TextFormatButton>
              </Box>
              <TextField
                id="textInput"
                name="textInput"
                onChange={handleChange}
                //   value={(e)=>{e.target.value}}
                multiline
                minRows={12}
                variant="outlined"
                contentEditable
              />
              <FlexEnd width="100%" gap="0.5rem">
                <PrimaryButton
                  variant="contained"
                  size="small"
                  onClick={handleSave}
                >
                  Save Changes
                </PrimaryButton>

                {isEdit ? (
                  <PrimaryButton
                    type="submit"
                    variant="outlined"
                    size="small"
                    onClick={handleEdit}
                  >
                    Edit
                  </PrimaryButton>
                ) : (
                  <PrimaryButton
                    type="submit"
                    variant="outlined"
                    size="small"
                    onClick={handleCreate}
                  >
                    Create
                  </PrimaryButton>
                )}
              </FlexEnd>
            </CardWrapper>
          </Grid>
          <Grid item xs={12} md={5}>
            <DocumentList handleEditClicked={handleEditClicked} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
