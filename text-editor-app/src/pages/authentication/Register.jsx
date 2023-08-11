import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextBox from "../../components/TextBox";
import PrimaryButton from "../../components/PrimaryButton";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CheckBox from "../../components/CheckBox";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
  termsOfService: false,
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
  confirm_password: Yup.string()
    .required("Please enter your password.")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  termsOfService: Yup.boolean()
    .oneOf([true], "Please read and agree to the terms and conditions.")
    .required("Please read and agree to the terms and conditions."),
});

const Register = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  // const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // let userDetails = { id, firstName, lastName, password };
    // console.log(userDetails);
    // fetch("http://localhost:3001/users", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(userDetails),
    // })
    //   .then((res) => {
    //     // console.log("Registered successfully");
    //     // setShowAlert(true);
    //     setTimeout(() => {
    //       // setShowAlert(false);
    //       navigate("/login");
    //     }, 3000);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

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

          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form action="POST">
              {/* <AlertMsg /> */}
              <Grid container spacing={2} className="mt">
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
                <Grid item xs={12}>
                  <TextBox
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CheckBox
                    name="termsOfService"
                    // legend="Terms of Service"
                    label="I agree to the Terms and Conditions"
                  />
                </Grid>

                <Grid item xs={12}>
                  <PrimaryButton
                    type="submit"
                    variant="contained"
                    fullWidth
                    onCLick={handleSubmit}
                  >
                    Sign Up
                  </PrimaryButton>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="center-text">
                    Already a member?
                    <Link to="/login" className="link ml">
                      &nbsp;Sign In
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
            bgColor="alert-bg-light-green"
            textColor="alert-text-dark-green"
            message="You were registered successfully"
          />
        )}
        <form className="card" onSubmit={handleSubmit}>
          <h2 className="card-header">Sign Up</h2>
          <div className="card-body">
            <div className="flex-container">
              <div className="flex-item">
                <TextBox
                  type="text"
                  label="First Name *"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex-item">
                <TextBox
                  type="text"
                  label="Last Name *"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <TextBox
                label="Username *"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
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
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                required
              />
              <div className="notice-container">
                <p className="fs-14">
                  <strong>Note:</strong> Your password must contain minimum
                  eight characters, at least one uppercase letter, one lowercase
                  letter and one number:
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <PrimaryButton type="submit">Register</PrimaryButton>
            <p className="mt-1 link-sm">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default Register;
