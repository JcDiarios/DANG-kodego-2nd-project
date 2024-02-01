import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyAnagramCrosswordsImage from "../games/gameimg/daily-anagram-crossword-300x200.webp"; // Include the appropriate file extension

const DailyAnagramCrosswords = () => {
  return (
    <GamePreview
      imageUrl={DailyAnagramCrosswordsImage}
      gameUrl="https://cdn.htmlgames.com/DailyAnagramCrossword/"
    />
  );
};

export default DailyAnagramCrosswords;