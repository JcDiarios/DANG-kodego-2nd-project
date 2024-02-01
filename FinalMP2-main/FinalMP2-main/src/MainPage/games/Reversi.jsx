import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ReversiImage from "../games/gameimg/reversi300.webp"; // Include the appropriate file extension

const Reversi = () => {
  return (
    <GamePreview
      imageUrl={ReversiImage}
      gameUrl="https://cdn.htmlgames.com/Reversi/"
    />
  );
};

export default Reversi;