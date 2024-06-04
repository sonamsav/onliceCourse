import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import "../../css/common.css";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { images } from "../../images/images";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialloginForm = {
    userName: "",
    password: "",
    emailId: "",
    phoneNumber: "",
    role: "",
  };
  const [loginForm, setloginForm] = useState(initialloginForm);

  const [formErrors, setFormErrors] = useState({});

  const handleLoginClick = () => {
    navigate("/signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
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
                  marginTop: "5px",
                  fontWeight: "600",
                  color: "darkblue",
                }}
              >
                Login to get started
              </h3>
              <Grid register-container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="User Name"
                    name="userName"
                    variant="outlined"
                    value={loginForm.userName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Password"
                    name="password"
                    variant="outlined"
                    value={loginForm.password}
                    onChange={handleChange}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    marginTop: "2rem",
                  }}
                >
                  <button
                    style={{
                      marginTop: "1rem",
                      backgroundColor: "darkblue",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                    className="btn"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      padding: "2px",
                    }}
                  >
                    Forgot Password ?
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      // color: "gray",
                      marginTop: "1rem",
                    }}
                  >
                    Don't have an account ?{" "}
                    <Link to="/signup">
                      <span
                        style={{
                          color: "darkblue",
                          cursor: "pointer",
                        }}
                      >
                        Sign Up
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
  );
};

export default LoginPage;
