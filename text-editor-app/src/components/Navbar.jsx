import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const username = sessionStorage.getItem("username");
  //   if (username === "" || username === null) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Text Editor
          </Typography>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Button
              onClick={() => navigate("/")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              onClick={() => navigate("/view-all-documents")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              All Documents
            </Button>
            <Tooltip title="Logout">
              <IconButton onClick={() => navigate("/login")}>
                <LogoutOutlined sx={{ color: "#fff" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
