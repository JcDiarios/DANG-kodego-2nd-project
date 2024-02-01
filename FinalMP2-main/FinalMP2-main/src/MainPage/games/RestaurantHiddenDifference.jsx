import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RestaurantHiddenDifferenceImage from "../games/gameimg/restauranthiddendifferences300.webp"; // Include the appropriate file extension

const RestaurantHiddenDifference = () => {
  return (
    <GamePreview
      imageUrl={RestaurantHiddenDifferenceImage}
      gameUrl="https://cdn.htmlgames.com/RestaurantHiddenDifferences/"
    />
  );
};

export default RestaurantHiddenDifference;