import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SearchtheSandsImage from "../games/gameimg/searchthesands300200.webp"; // Include the appropriate file extension

const SearchtheSands = () => {
  return (
    <GamePreview
      imageUrl={SearchtheSandsImage}
      gameUrl="https://cdn.htmlgames.com/SearchTheSands/"
    />
  );
};

export default SearchtheSands;