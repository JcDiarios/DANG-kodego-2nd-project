import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FeedTheAnimalsImage from "../games/gameimg/feedtheanimals300200.webp"; // Include the appropriate file extension

const FeedTheAnimals = () => {
  return (
    <GamePreview
      imageUrl={FeedTheAnimalsImage}
      gameUrl="https://cdn.htmlgames.com/FeedTheAnimals/"
    />
  );
};

export default FeedTheAnimals;