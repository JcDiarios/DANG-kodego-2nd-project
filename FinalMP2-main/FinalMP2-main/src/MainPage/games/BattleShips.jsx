import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BattleShipsImage from "../games/gameimg/battleships300.webp"; // Include the appropriate file extension

const BattleShips = () => {
  return (
    <GamePreview
      imageUrl={BattleShipsImage}
      gameUrl="https://cdn.htmlgames.com/Battleships/"
    />
  );
};

export default BattleShips;