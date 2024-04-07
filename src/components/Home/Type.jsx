import React from "react";
import Typewriter from "typewriter-effect";

const getRandomColor = () => {
  // Generate random values for RGB components
  const r = Math.floor(Math.random() * 2156);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Construct a CSS color string
  return `rgb(${r}, ${g}, ${b})`;
};

const Type = () => {
  const strings = [
    "<span style='color: " + getRandomColor() + ";'>Developer</span>",
    "<span style='color: " + getRandomColor() + ";'>Designer</span>",
    "<span style='color: " + getRandomColor() + ";'>Freelancer</span>",
    "<span style='color: " + getRandomColor() + ";'>Engineer</span>"
  ];

  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 80
      }}
    />
  );
};

export default Type;
