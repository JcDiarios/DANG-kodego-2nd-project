import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DiscoverChinaImage from "../games/gameimg/discoverchina300200.webp"; // Include the appropriate file extension

const DiscoverChina = () => {
  return (
    <GamePreview
      imageUrl={DiscoverChinaImage}
      gameUrl="https://cdn.htmlgames.com/DiscoverChina/"
    />
  );
};

export default DiscoverChina;