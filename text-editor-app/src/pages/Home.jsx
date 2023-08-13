import { Box, Grid, TextField, useMediaQuery } from "@mui/material";
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
import { useTheme } from "@emotion/react";

const Home = () => {
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderlined, setUnderlined] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [value, setValue] = useState("");

  const isNonMobile = useMediaQuery("(min-width:480px)");
  const { palette } = useTheme();
  const primaryMain = palette.primary.main;
  const primaryDark = palette.primary.dark;
  const backgroundDefault = palette.background.default;

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

  const handleSave = (e) => {
    localStorage.setItem("Text Input", e.textInput);
  };

  const handleCreate = () => {};
  const handleEdit = () => {};
  const handleEditClicked = () => {
    isEditClicked ? setIsEditClicked(false) : setIsEditClicked(true);
    console.log(isEditClicked);
  };
  return (
    <Box height="100%" bgcolor={backgroundDefault}>
      <Navbar />
      <Box padding={isNonMobile ? "2rem 3rem" : "1rem 1rem"}>
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
                multiline
                minRows={isNonMobile ? 12 : 15}
                variant="outlined"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
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
          {isNonMobile && (
            <Grid item xs={12} md={5}>
              <DocumentList handleEditClicked={handleEditClicked} />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
