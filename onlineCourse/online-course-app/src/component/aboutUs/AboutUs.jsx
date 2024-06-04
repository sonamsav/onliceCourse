import React, { useEffect, useRef } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { images } from "../../images/images";

const AboutUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.classList.add("animate-from-top");

    return () => {
      container.classList.remove("animate-from-top");
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        padding: "16px",
        marginTop: "5.2rem",
        backgroundColor: "#fcf9f9",
      }}
    >
      <Typography
        sx={{
          marginTop: "2rem",
          fontWeight: "600",
          color: "darkblue",
          textAlign: "center",
          fontSize: "30px",
          padding: "1rem",
        }}
      >
        ABOUT
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "2rem",
        }}
      >
        {/* Left side image */}
        <Grid
          item
          xs={12}
          md={12}
          lg={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={images.aboutImage}
            alt="About Us"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              borderRadius: "8px",
            }}
          />
        </Grid>
        {/* Right side text paragraph */}
        <Grid item xs={12} md={12} lg={7}>
          <Box sx={{ padding: "8px" }}>
            {" "}
            {/* Reduced padding */}
            <Typography
              sx={{
                color: "darkblue",
                fontWeight: "600",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              Online Course Platform{" "}
            </Typography>
            <Typography
              paragraph
              sx={{
                fontSize: "19px",
                textAlign: "justify",
                marginBottom: "0",
              }}
            >
              An online programming course is a digital learning experience
              designed to teach individuals how to write and understand computer
              code. These courses cover a variety of programming languages such
              as Python, Java, JavaScript, C++, and more. They cater to
              different skill levels, from beginners who have no prior coding
              experience to advanced learners looking to deepen their expertise.
              Typically, an online programming course includes video lectures,
              interactive coding exercises, quizzes, and projects that allow
              learners to apply what they've learned in real-world scenarios.
              Many courses also offer forums or chat rooms where students can
              ask questions and collaborate with peers. This flexible and
              accessible format enables learners to progress at their own pace
              and from anywhere, making it an ideal option for those looking to
              start a career in tech, enhance their current skills, or pursue
              programming as a hobby.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
