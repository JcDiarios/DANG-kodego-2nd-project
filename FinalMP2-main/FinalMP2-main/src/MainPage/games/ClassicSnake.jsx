import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ClassicSnakeImage from "../games/gameimg/classicsnake300200.webp"; // Include the appropriate file extension

const ClassicSnake = () => {
  return (
    <GamePreview
      imageUrl={ClassicSnakeImage}
      gameUrl="https://cdn.htmlgames.com/ClassicSnake/"
    />
  );
};

export default ClassicSnake;