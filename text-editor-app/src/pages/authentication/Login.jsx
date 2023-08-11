import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import TextBox from "../../components/TextBox";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import CheckBox from "../../components/CheckBox";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
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

  // useEffect(() => {
  //   sessionStorage.clear();
  // }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // fetch(`http://localhost:3001/users/${username}`)
    //   .then((res) => {
    //     console.log(res.id);
    //     return res.json();
    //   })
    //   .then((resp) => {
    //     console.log(resp);
    //     if (Object.keys(resp).length === 0) {
    //       // setShowAlert(true);
    //       // setTimeout(() => {
    //       //   setShowAlert(false);
    //       // }, 3000);
    //     } else {
    //       if (resp.password === password) {
    //         sessionStorage.setItem("username", username);
    //         navigate("/");
    //       } else {
    //         // setShowAlert(true);
    //         // setTimeout(() => {
    //         //   setShowAlert(false);
    //         // }, 3000);
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  return (
    <>
      <Container component="main" maxWidth="xs" className="center-container">
        {/* <CssBaseline /> */}
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
            Sign In
          </Typography>

          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              {/* <AlertMsg /> */}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextBox
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextBox
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </Grid>

                <Grid container item sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <CheckBox
                      name="remember"
                      label="Remember me"
                      value="remember"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "right" }}>
                    <Link to="/forgot-password" className="link">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <PrimaryButton
                    variant="contained"
                    fullWidth
                    onCLick={handleSubmit}
                  >
                    Sign In
                  </PrimaryButton>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="center-text">
                    Don't have an account?
                    <Link to="/register" className="link ml">
                      &nbsp; Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Container>

      {/* <div className="container">
        {showAlert && (
          <Alert
            bgColor="alert-bg-light-red"
            textColor="alert-text-dark-red"
            message="Invalid username or password."
          />
        )}
        <form className="card" onSubmit={handleSubmit}>
          <h2 className="card-header">Sign In</h2>
          <div className="card-body">
            <div className="input-container">
              <TextBox
                label="Username *"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-container">
              <TextBox
                type="password"
                label="Password *"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="card-footer">
            <PrimaryButton
              type="submit"
              // onClick={handleLogin}
            >
              Login
            </PrimaryButton>
            <p className="mt-1 link-sm">
              Don't have an account? <Link to={"/register"}>Register here</Link>
            </p>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default Login;
