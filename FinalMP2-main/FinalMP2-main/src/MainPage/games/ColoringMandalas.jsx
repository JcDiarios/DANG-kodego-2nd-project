import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ColoringMandalasImage from "../games/gameimg/coloring-mandalas-300.webp"; // Include the appropriate file extension

const ColoringMandalas = () => {
  return (
    <GamePreview
      imageUrl={ColoringMandalasImage}
      gameUrl="https://cdn.htmlgames.com/ColoringMandalas/"
    />
  );
};

export default ColoringMandalas;