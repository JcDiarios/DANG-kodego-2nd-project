import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TicTacToeImage from "../games/gameimg/tictactoe300200.webp"; // Include the appropriate file extension

const TicTacToe = () => {
  return (
    <GamePreview
      imageUrl={TicTacToeImage}
      gameUrl="https://cdn.htmlgames.com/TicTacToe/"
    />
  );
};

export default TicTacToe;