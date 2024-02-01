import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RectanglesImage from "../games/gameimg/rectangles300200.webp"; // Include the appropriate file extension

const Rectangles = () => {
  return (
    <GamePreview
      imageUrl={RectanglesImage}
      gameUrl="https://cdn.htmlgames.com/Rectangles/"
    />
  );
};

export default Rectangles;