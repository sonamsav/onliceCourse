import { Box } from "@mui/material";
import React from "react";
import AboutUs from "../../component/aboutUs/AboutUs";
import CourseList from "../../component/courseList/CourseList";
import Acheivments from "../../component/acheivments/Acheivments";
import ImageSlider from "../../component/imageSlider/ImageSlider";

const HomePage = () => {
  return (
    <Box>
    <ImageSlider/>
      <AboutUs />
      <CourseList />
      <Acheivments />
    </Box>
  );
};

export default HomePage;
