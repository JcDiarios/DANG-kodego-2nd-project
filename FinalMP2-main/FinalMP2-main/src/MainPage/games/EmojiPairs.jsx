import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import EmojiPairsImage from "../games/gameimg/emojipairs300200.webp"; // Include the appropriate file extension

const EmojiPairs = () => {
  return (
    <GamePreview
      imageUrl={EmojiPairsImage}
      gameUrl="https://cdn.htmlgames.com/EmojiPairs/"
    />
  );
};

export default EmojiPairs;