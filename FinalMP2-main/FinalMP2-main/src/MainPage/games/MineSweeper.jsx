import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MineSweeperImage from "../games/gameimg/minesweeper300x200.webp"; // Include the appropriate file extension

const MineSweeper = () => {
  return (
    <GamePreview
      imageUrl={MineSweeperImage}
      gameUrl="https://cdn.htmlgames.com/Minesweeper/"
    />
  );
};

export default MineSweeper;