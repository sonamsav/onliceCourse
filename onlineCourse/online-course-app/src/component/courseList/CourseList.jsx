import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { images } from "../../images/images";
import { useRef } from "react";
import { useEffect } from "react";

const CourseList = () => {
  // Array of course objects with title, description, and image URL
  const courses = [
    {
      title: "HTML",
      description:
        "Learn HTML.HTML is the standard markup language for Web pages.With HTML you can create your own Website.HTML describes the structure of a Web page.HTML elements tell the browser how to display the content",
      imageUrl: images.html,
    },
    {
      title: "Java",
      description:
        "Learn Java programming language.Java is a robust, object-oriented programming language renowned for its platform independence, scalability, and versatility, commonly used for building enterprise-grade applications, web servers, mobile apps, and more, favored for its strong ecosystem, performance, and security features",
      imageUrl: images.java,
    },
    {
      title: "JavaScript",
      description:
        "Learn JavaScript programming language.JavaScript is a versatile, high-level programming language primarily used for creating dynamic and interactive web content, capable of running both client-side and server-side applications, appreciated for its flexibility, ubiquity, and support for modern web development.",
      imageUrl: images.javascript,
    },
    {
      title: "ReactJS",
      description:
        "Learn ReactJS library for building UI.  ReactJS is a popular JavaScript library for building user interfaces, focusing on component-based architecture, declarative syntax, and efficient rendering, enabling developers to create interactive web applications with ease.",
      imageUrl: images.reactjs,
    },
    {
      title: "Nodejs",
      description:
        "Learn Nodejs library for building UI. Node.js is a server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine, enabling developers to build scalable network applications with ease, known for its event-driven architecture, non-blocking I/O operations, and vast ecosystem of libraries and frameworks, making it ideal for building real-time web applications.",
      imageUrl: images.nodejs,
    },
    {
      title: "C#",
      description:
        "Learn C# library for building UI. C# is a modern, multi-paradigm programming language developed by Microsoft, widely used for building desktop, web, and mobile applications within the .NET framework, appreciated for its simplicity, scalability, and extensive tooling support",
      imageUrl: images.aboutImage,
    },
    {
      title: "C++",
      description:
        "Learn C++ library for building UI. C++ is a powerful, high-performance programming language commonly used for system/application software, game development, and embedded systems, known for its efficiency, flexibility, and low-level memory manipulation capabilities.",
      imageUrl: images.cplus,
    },
    {
      title: "JQuery",
      description:
        "Learn JQuery library for building UI.JQuery is a fast, lightweight JavaScript library designed to simplify HTML document traversing, event handling, animating, and Ajax interactions for rapid web development, widely adopted for its simplicity, cross-browser compatibility, and extensive plugin ecosystem.",
      imageUrl: images.jquery,
    },
  ];

  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography
        sx={{
          marginTop: "3.5rem",
          fontWeight: "600",
          color: "darkblue",
          textAlign: "center",
          fontSize: "30px",
          padding: "1rem",
        }}
      >
        Courses List
      </Typography>
      <Grid container spacing={2}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={12} md={6} lg={3}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="190"
                image={course.imageUrl}
                alt={course.title}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "19px",
                    color: "darkblue",
                  }}
                >
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseList;
