import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HangmanImage from "../games/gameimg/hangman300200.webp"; // Include the appropriate file extension

const Hangman = () => {
  return (
    <GamePreview
      imageUrl={HangmanImage}
      gameUrl="https://cdn.htmlgames.com/Hangman/"
    />
  );
};

export default Hangman;