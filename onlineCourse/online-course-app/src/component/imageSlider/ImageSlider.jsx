import React, { useState } from "react";
import "../../css/common.css";
import { images } from "../../images/images";
import { Box, Card, Typography } from "@mui/material";

const Mycard = ({ image, title, description }) => (
  <div className="slider-item">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Imagecarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Reactjs",
      description: "This is the most popular course",
      image: images.reactjs,
    },
    {
      id: 2,
      title: "HTML",
      description: "This is the most popular course",
      image: images.html,
    },
    {
      id: 3,
      title: "Javascript",
      description: "This is the most popular course",
      image: images.javascript,
    },
    {
      id: 4,
      title: "CSS",
      description: "This is the most popular course",
      image: images.css,
    },
    // {
    //   id: 5,
    //   title: "Slide 5",
    //   description: "This is the fifth slide",
    //   image: images.aboutImage,
    // },
    // {
    //   id: 6,
    //   title: "Slide 6",
    //   description: "This is the sixth slide",
    //   image: images.aboutImage,
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = slides.length;
  const visibleCards = 3;
  const maxIndex = totalCards - visibleCards;
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleCards, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + visibleCards, maxIndex)
    );
  };

  return (
    <Box>
      <div className="product-carousel">
        <Typography
          sx={{
            marginTop: "3rem",
            textAlign: "center",
            color: "darkblue",
            fontWeight: "600",
            fontSize: "30px",
          }}
        >
          Popular Courses
        </Typography>
        <button
          className="pre-btn"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{ color: currentIndex === 0 ? "gray" : "white" }}
        >
          <p>&lt;</p>
        </button>

        <button className="next-btn" onClick={handleNext}>
          <p>&gt;</p>
        </button>

        <div
          className="product-container"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            padding: "5px",
          }}
        >
          {slides.map((slide) => (
            <Card
              key={slide.id}
              sx={{
                width: "400px",
              }}
            >
              <Mycard
                image={slide.image}
                title={slide.title}
                description={slide.description}
              />
            </Card>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Imagecarousel;
