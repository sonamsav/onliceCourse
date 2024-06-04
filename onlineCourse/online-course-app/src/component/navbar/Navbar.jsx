import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ListIcon from "@mui/icons-material/List";
import { Avatar, Button, Stack } from "@mui/material";
import "../../css/common.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          {!isLoggedIn && (
            <NavLink exact to="/" activeClassName="active" className="nav-logo">
              Online Course
            </NavLink>
          )}

          {isLoggedIn ? (
            <div style={{ marginLeft: "35%" }}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ backgroundColor: "white", color: "black" }}
              >
                <div style={{ marginTop: "0.3rem" }}>
                  <NotificationsNoneOutlinedIcon sx={{ fontSize: "2rem" }} />
                </div>
                <Avatar sx={{ backgroundColor: "#00a4e0" }}>
                  {firstName.charAt(0)}
                </Avatar>
                <div style={{ marginLeft: "0.5rem", lineHeight: "2rem" }}>
                  {firstName} {lastName}
                </div>
              </Stack>
            </div>
          ) : (
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/aboutUs"
                  activeClassName="active"
                  className="nav-links"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/courseList"
                  activeClassName="active"
                  className="nav-links"
                >
                  Course List
                </NavLink>
              </li>

              <li className="nav-item">Contact Us</li>
              <li >
                <div
                  style={{
                    marginLeft: "3rem",
                  }}
                >
                  <Button
                    onClick={handleSignUp}
                    variant="contained"
                    sx={{
                      backgroundColor: "#00a4e0",
                      textTransform: "none",
                      marginRight: "1rem",
                      "&:focus": {
                        backgroundColor: "#00a4e0",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    onClick={handleLogin}
                    variant="contained"
                    sx={{
                      backgroundColor: "#00a4e0",
                      textTransform: "none",

                      "&:focus": {
                        backgroundColor: "#00a4e0",
                      },
                    }}
                  >
                    Login
                  </Button>
                </div>
              </li>
            </ul>
          )}

          <div className="nav-icon" onClick={() => setClick(!click)}>
            {click ? <CloseIcon /> : <ListIcon />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
