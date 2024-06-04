import React from "react";
import { Grid, Typography, Link, Box, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "black", color: "white", p: 3 }}
    >
      <Grid 
        container 
        spacing={4} 
        justifyContent="center"
        textAlign="center"
      >
        <Grid item xs={12} lg={4} md={6}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "17px",
            }}
          >
            Company
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={1}
          >
            About Us
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Careers
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Blog
          </Link>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "17px",
            }}
          >
            Support
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={1}
          >
            Contact Us
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Help Center
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Privacy Policy
          </Link>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "17px",
            }}
          >
            Follow Us
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={1}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            Facebook
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TwitterIcon sx={{ mr: 1 }} />
            Twitter
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <InstagramIcon sx={{ mr: 1 }} />
            Instagram
          </Link>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "white", my: 2 }} />
      <Typography
        sx={{
          textAlign: "center",
          padding: "2px",
        }}
      >
        Copyright @2024 | Designed & Developed by Online Course Pvt.Ltd
      </Typography>
    </Box>
  );
};

export default Footer;
