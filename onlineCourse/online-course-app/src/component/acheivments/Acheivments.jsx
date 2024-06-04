import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  keyframes,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { images } from "../../images/images";

//
const highlightAnimation = keyframes`
  0% {
    background-color: #f0f0f0;
    transform: scale(1);
  }
  50% {
    background-color: #ffffff;
    transform: scale(1.05);
  }
  100% {
    background-color: #f0f0f0;
    transform: scale(1);
  }
`;
const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      icon: "javascript-icon.png",
      description: "Master the basics of JavaScript programming language.",
      stars: 3,
      image: images.java,
      highlight: "Essential skill for web development",
    },
    {
      id: 2,
      title: "React Mastery",
      icon: "react-icon.png",
      description: "Become proficient in building web applications with React.",
      stars: 2,
      image: images.reactjs,
      highlight: "Framework for building interactive UIs",
    },
    {
      id: 3,
      title: "C++",
      icon: "react-icon.png",
      description: "Become proficient in building web applications with C++.",
      stars: 5,
      image: images.cplus,
      highlight: "High-performance programming language",
    },
    {
      id: 4,
      title: "Jquery",
      icon: "react-icon.png",
      description:
        "Become proficient in building web applications with Jquery.",
      stars: 5,
      image: images.jquery,
      highlight: "Popular JavaScript library for DOM manipulation",
    },
    {
      id: 5,
      title: "Javascript",
      icon: "react-icon.png",
      description:
        "Become proficient in building web applications with Javascript.",
      stars: 3,
      image: images.javascript,
      highlight: "Versatile scripting language for web development",
    },
    {
      id: 6,
      title: "C#",
      icon: "react-icon.png",
      description: "Become more proficient in building web applications with C#.",
      stars: 1,
      image: images.csharp,
      highlight: "Elegant and type-safe object-oriented language",
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
        Achievements
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        {achievementsData.map((achievement) => (
          <Grid item key={achievement.id} xs={12} md={4} lg={3}>
            <Card
              sx={{
                height: "380px",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={achievement.image}
                alt={achievement.title}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: "600",
                    color: "darkblue",
                  }}
                >
                  {achievement.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ marginBottom: "0.5rem" }}
                >
                  {achievement.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{
                    fontWeight: "600",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "5px",
                    display: "inline-block",
                    animation: `${highlightAnimation} 2s infinite`,
                  }}
                >
                  {achievement.highlight}
                </Typography>
                <div
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  {Array.from({ length: achievement.stars }, (_, index) => (
                    <StarIcon
                      key={index}
                      sx={{
                        color: "#b5a642",
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements;
