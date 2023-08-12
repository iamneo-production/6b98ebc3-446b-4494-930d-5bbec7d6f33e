import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";

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
});

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [severity, setSeverity] = useState("");

  const handleLogin = (e) => {
    // e.preventDefault();
    console.log("Email", e.email);
    fetch(`http://localhost:8080/users/${e.email}`)
      .then((res) => {
        console.log("test", res);
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        if (Object.keys(resp).length === 0) {
          console.log("Invalid username.");

          setShowAlert(true);
          setAlertMsg("Invalid credentials. Please check again.");
          setSeverity("error");

          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        } else {
          console.log(resp.password);

          if (resp.password === e.password) {
            sessionStorage.setItem("email", e.email);

            setShowAlert(true);
            setAlertMsg("Login Successfull. Redirecting...");
            setSeverity("success");

            setTimeout(() => {
              setShowAlert(false);
              navigate("/");
            }, 3000);
          } else {
            console.log("Invalid password.");

            setShowAlert(true);
            setAlertMsg("Invalid credentials. Please check again.");
            setSeverity("error");

            setTimeout(() => {
              setShowAlert(false);
            }, 5000);
          }
        }
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
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
      console.log("on submit", values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Container component="main" maxWidth="xs" className="center-container">
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

          <Typography variant="h5" fontWeight="500" mb="2rem">
            Sign In
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
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
              </Grid>

              <Grid item xs={12} sx={{ mt: "1rem" }}>
                <PrimaryButton type="submit" variant="contained" fullWidth>
                  Sign In
                </PrimaryButton>
              </Grid>
              <Grid item xs={12} sx={{ mt: "1rem" }}>
                <Typography className="center-text">
                  Don't have an account?
                  <Link
                    to="/register"
                    style={{
                      marginLeft: "0.3rem",
                      color: "#706fec",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    Sign Up
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

export default Login;
