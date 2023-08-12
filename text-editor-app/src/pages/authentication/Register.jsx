import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import TextBox from "../../components/TextBox";
import PrimaryButton from "../../components/PrimaryButton";
import {
  Alert,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CheckBox from "../../components/CheckBox";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("This field is required*"),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Your password must contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password.")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  termsOfService: Yup.boolean()
    .oneOf([true], "Please read and agree to the terms and conditions.")
    .required("Please read and agree to the terms and conditions."),
});

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [severity, setSeverity] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let userDetails = { id, password };
    console.log(userDetails);
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userDetails),
    })
      .then((res) => {
        console.log("Registered successfully");
        setShowAlert(true);
        setAlertMsg("Registration Successfull. Redirecting...");
        setSeverity("success");

        setTimeout(() => {
          setShowAlert(false);
          navigate("/");
        }, 3000);

        // setShowAlert(true);
        // setTimeout(() => {
        // setShowAlert(false);
        // navigate("/login");
        // }, 3000);
      })
      .catch((err) => {
        console.log(err.message);

        setShowAlert(true);
        setAlertMsg(err.message);
        setSeverity("error");

        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleRegister(values);
      console.log("on submit", values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Container component="main" maxWidth="xs" className="center-container">
        <CssBaseline />
        <Box display="flex" flexDirection="column" alignItems="center">
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

          <Divider sx={{ mt: "1rem" }} />

          <Typography variant="h5" fontWeight="500" mb="1rem">
            Sign Up
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            {showAlert && (
              <Alert severity={severity} sx={{ mb: "1rem" }}>
                {alertMsg}
              </Alert>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  size="small"
                  // value={id}
                  // onChange={(e) => {
                  //   setId(e.target.value);
                  // }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                {/* <TextBox
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={id}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  // autoFocus
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  size="small"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                {/* <TextBox
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  size="small"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
                {/* <TextBox
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  // value={confirmPassword}
                  // onChange={(e) => {
                  //   setConfirmPassword(e.target.value);
                  // }}
                /> */}
              </Grid>
              <Grid item xs={12} sx={{ mt: "1rem" }}>
                <PrimaryButton type="submit" variant="contained" fullWidth>
                  Sign Up
                </PrimaryButton>
              </Grid>
              <Grid item xs={12} sx={{ mt: "1rem" }}>
                <Typography className="center-text">
                  Already a member?
                  <Link
                    to="/login"
                    style={{
                      marginLeft: "0.3rem",
                      color: "#706fec",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    Sign In
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Register;
