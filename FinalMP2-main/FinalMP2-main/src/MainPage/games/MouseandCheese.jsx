import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MouseandCheeseImage from "../games/gameimg/mouseandcheese300200.webp"; // Include the appropriate file extension

const MouseandCheese = () => {
  return (
    <GamePreview
      imageUrl={MouseandCheeseImage}
      gameUrl="https://cdn.htmlgames.com/MouseAndCheese/"
    />
  );
};

export default MouseandCheese;