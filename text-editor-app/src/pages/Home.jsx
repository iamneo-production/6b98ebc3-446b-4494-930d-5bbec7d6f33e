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
    const [name, setName] = useState('');
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState("dave@gmail.com");

  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderlined, setUnderlined] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [value, setValue] = useState("");

  const [size, setSize] = useState('4');
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");

  const isNonMobile = useMediaQuery("(min-width:480px)");
  const { palette } = useTheme();
  const primaryMain = palette.primary.main;
  const primaryDark = palette.primary.dark;
  const backgroundDefault = palette.background.default;

  const formatNote = (cmd, value = null) => {
    if (value) {
      document.execCommand(cmd, false, value);
    } else {
      document.execCommand(cmd);
    }
  };

  useEffect(()=> {
    Axios.get(`http://localhost:8080/documents?userId=${user}`).then((res)=>{
      console.log(res.data);
      setNotes(res.data);
    });
  },[user]);

  const handleNote = () => {
    const doc = document.getElementById("editor")?.innerHTML + "";
    setContent(doc);
    console.log("editing...");
    console.log(doc);
  };

  const handleSize = (event) => {
    console.log(event.target.value);
    setSize(event.target.value);
    formatNote('fontSize', event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = (e) => {
    const data = {userId:'dave@gmail.com', note: content, name: name}
     Axios.post("http://localhost:8080/documents", data).then((res)=>{
        console.log(res,"response eka ......");
        setOpen(false);
     });
  };

  const handleDocs = (n)=>{
    console.log(n);
    document.getElementById('editor').innerHTML = n;
    setContent(n);
    
  }



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

//   const handleSave = (e) => {
//     localStorage.setItem("Text Input", e.textInput);
//   };

  const handleCreate = () => {};
  const handleEdit = () => {};
  const handleEditClicked = () => {
    isEditClicked ? setIsEditClicked(false) : setIsEditClicked(true);
    console.log(isEditClicked);
  };

  const handleName = (event)=> {
    console.log(event.target.value);
    setName(event.target.value);
}

  return (
    <Box height="100%" bgcolor={backgroundDefault}>
      <Navbar />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Document</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Note Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
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
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Size</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={size}
                    label="Age"
                    onChange={handleSize}
                  >
                    
                    <MenuItem value="2">Extra small</MenuItem>
                    <MenuItem value="3">Small</MenuItem>
                    <MenuItem value="4">Regular</MenuItem>
                    <MenuItem value="5">Medium</MenuItem>
                    <MenuItem value="6">Large</MenuItem>
                    <MenuItem value="7">Extra Large</MenuItem>
                  </Select>
                </FormControl>
                <TextFormatButton onClick={() => formatNote("bold")}>
                  <FormatBold />
                </TextFormatButton>
                <TextFormatButton onClick={() => formatNote("italic")}>
                  <FormatItalic />
                </TextFormatButton>
                <TextFormatButton onClick={() => formatNote("underline")}>
                  <FormatUnderlined />
                </TextFormatButton>
                <TextFormatButton onClick={() => formatNote("justifyLeft")}>
                  <FormatAlignLeft />
                </TextFormatButton>
                <TextFormatButton onClick={() => formatNote("justifyCenter")}>
                  <FormatAlignCenter />
                </TextFormatButton>
                <TextFormatButton onClick={() => formatNote("justifyRight")}>
                  <FormatAlignRight />
                </TextFormatButton>
                <TextFormatButton
                  onClick={() => formatNote("insertOrderedList")}
                >
                  <FormatListNumbered />
                </TextFormatButton>
                <TextFormatButton
                  onClick={() => formatNote("insertUnorderedList")}
                >
                  <FormatListBulletedRounded />
                </TextFormatButton>
              </Box>

               <div
                id="editor"
                contentEditable="true"
                spellCheck="false"
                style={{
                  border: "1px solid rgb(0, 119, 255)",
                  minHeight: "300px",
                  padding: "20px",
                }}
                onInput={handleNote}
              />
              {/* <TextField
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
              /> */}
              <FlexEnd width="100%" gap="0.5rem">
                <PrimaryButton
                  variant="contained"
                  size="small"
                  onClick={handleClickOpen}
                >
                  Save Changes
                </PrimaryButton>

                {/* {isEdit ? (
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
                )} */}
              </FlexEnd>
            </CardWrapper>
          </Grid>
          {isNonMobile && (
            <Grid item xs={12} md={5}>
            {notes.length !== 0 && <DocumentList data={notes} handleDoc={handleDocs}/>}
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
