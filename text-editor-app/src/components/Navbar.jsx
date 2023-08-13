import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:480px)");
  const { palette } = useTheme();
  const primaryMain = palette.primary.main;
  const primaryDark = palette.primary.dark;
  const backgroundDefault = palette.background.default;

  const navigate = useNavigate();

  // useEffect(() => {
  //   const email = sessionStorage.getItem("email");
  //   if (email === "" || email === null) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex" },

              flexGrow: 1,
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: primaryDark,
              textDecoration: "none",
            }}
          >
            Text Editor
          </Typography>

          <Box sx={{ flexGrow: 0, display: "flex", gap: "1.5rem", mr: "1rem" }}>
            <NavLink
              to={"/home"}
              style={({ isActive }) => {
                return {
                  color: isActive ? primaryDark : primaryMain,
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "block",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to={"/view-all-documents"}
              style={({ isActive }) => {
                return {
                  color: isActive ? primaryDark : primaryMain,
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "block",
                };
              }}
            >
              Documents
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Tooltip title="Logout">
              <IconButton
                onClick={() => {
                  sessionStorage.clear();
                  navigate("/");
                }}
                // sx={{ display: "block" }}
              >
                <LogoutOutlined sx={{ color: "#706fec" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
