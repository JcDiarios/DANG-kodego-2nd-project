import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RuinsHiddenStarsImage from "../games/gameimg/ruins-hidden-stars-300.webp"; // Include the appropriate file extension

const RuinsHiddenStars = () => {
  return (
    <GamePreview
      imageUrl={RuinsHiddenStarsImage}
      gameUrl="https://cdn.htmlgames.com/RuinsHiddenStars/"
    />
  );
};

export default RuinsHiddenStars;