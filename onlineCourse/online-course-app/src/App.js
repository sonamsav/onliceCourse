import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./component/aboutUs/AboutUs";
import HomePage from "./screens/homePage/HomePage";
import Navbar from "./component/navbar/Navbar";
import SignUpPage from "./screens/signUpPage/SignUpPage";
import LoginPage from "./screens/loginPage/LoginPage";
import CourseList from "./component/courseList/CourseList";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courseList" element={<CourseList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
