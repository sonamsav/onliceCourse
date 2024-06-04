// import React from 'react'

// const SignUpPage = () => {
//   return (
//     <div>SignUpPage</div>
//   )
// }

// export default SignUpPage
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import "../../css/common.css";
import {
  Alert,
  Button,
  Checkbox,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { images } from "../../images/images";

const SignUpPage = () => {
  const navigate = useNavigate();
  const initialRegistrationForm = {
    firstName: "",
    password: "",
    emailId: "",
    confirmPassword: "",
  };
  const [registrationForm, setRegistrationForm] = useState(
    initialRegistrationForm
  );
  const [EmailId, setEmailId] = useState("");

  const [checked, setChecked] = useState(false);

  const [formErrors, setFormErrors] = useState({});

  const [disableEmail, setDisableEmail] = useState(false);
  const [emailDialogtext, setemailDialogtext] = useState(false);

  const handleChecked = (event) => {
    if (event.target.value === "on") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleLoginClick = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setRegistrationForm({
      ...registrationForm,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleEmailId = (e) => {
    setEmailId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "3rem",
        }}
      >
        <div className="register-container">
          <MenuIcon className="square" />
          <div className="form">
            <div className="register-info">
              <Typography
                sx={{
                  // marginLeft:"2rem",
                  fontWeight: "600",
                  fontSize: "25px",
                }}
              >
                Welcome to Online Learning !
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "30px",
                  color: "#00a4e0",
                }}
              >
                Online Course
              </Typography>
              <img
                src={images.aboutImage}
                style={{
                  width: "350px",
                  height: "350px",
                  marginTop: "2.2rem",
                }}
              />
            </div>

            <div className="register-form">
              <span className="circles one"></span>
              <span className="circles two"></span>

              <form action="index.html" autoComplete="off">
                <h3
                  className="register-title"
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  Registration Form
                </h3>
                <Grid register-container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="First Name"
                      name="firstName"
                      variant="outlined"
                      value={registrationForm.firstName}
                      onChange={handleChange}
                      error={!!formErrors.firstName}
                      helperText={formErrors.firstName}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Email ID</InputLabel>
                      <OutlinedInput
                        value={EmailId}
                        onChange={handleEmailId}
                        disabled={disableEmail}
                        endAdornment={
                          <InputAdornment position="end">
                            <Typography
                              style={{
                                fontSize: "14px",
                                cursor: "pointer",
                              }}
                            >
                              {emailDialogtext ? "Verified" : "Verify Email"}
                            </Typography>
                          </InputAdornment>
                        }
                        label="EMAIL ID"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      required
                      label="Password"
                      name="password"
                      variant="outlined"
                      value={registrationForm.password}
                      onChange={handleChange}
                      error={!!formErrors.password}
                      helperText={formErrors.password}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      required
                      label="Confirm Password"
                      name="confirmPassword"
                      variant="outlined"
                      value={registrationForm.confirmPassword}
                      onChange={handleChange}
                      error={!!formErrors.confirmPassword}
                      helperText={formErrors.confirmPassword}
                    />
                  </Grid>
                  <Checkbox
                    checked={checked}
                    onChange={handleChecked}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      marginLeft: "3rem",
                    }}
                    error={!!formErrors.checkbox}
                    helperText={formErrors.checkbox}
                  />

                  <span
                    style={{
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    I’ve read and agreed to Terms & Conditions
                  </span>
                  <div>
                    <Snackbar
                      open={openSnackbar}
                      autoHideDuration={6000}
                      onClose={handleSnackbarClose}
                      className="snackbar "
                    >
                      <Alert severity="error">{snackbarMessage}</Alert>
                    </Snackbar>
                  </div>
                  <Grid item xs={12}>
                    <button
                      style={{
                        marginTop: "1rem",
                        backgroundColor: "" ? "#00a4e0" : "gray",
                        color: "white",
                        fontWeight: "600",
                        fontSize: "15px",
                      }}
                      className="btn"
                      onClick={handleSubmit}
                    >
                      SignUp
                    </button>
                    <Typography
                      sx={{
                        textAlign: "center",
                        // color: "gray",
                        marginTop: "1rem",
                      }}
                    >
                      Already have an account ?{" "}
                      <Link to="/login">
                        <span
                          onClick={handleLoginClick}
                          style={{
                            color: "#00a4e0",
                            cursor: "pointer",
                          }}
                        >
                          Sign In
                        </span>
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUpPage;
