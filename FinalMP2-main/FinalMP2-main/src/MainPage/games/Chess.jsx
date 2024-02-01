import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ChessImage from "../games/gameimg/chess-300x200.webp"; // Include the appropriate file extension

const Chess = () => {
  return (
    <GamePreview
      imageUrl={ChessImage}
      gameUrl="https://cdn.htmlgames.com/Chess/"
    />
  );
};

export default Chess;