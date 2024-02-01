import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DiscoverEgyptImage from "../games/gameimg/discoveregypt300200.webp"; // Include the appropriate file extension

const DiscoverEgypt = () => {
  return (
    <GamePreview
      imageUrl={DiscoverEgyptImage}
      gameUrl="https://cdn.htmlgames.com/DiscoverEgypt/"
    />
  );
};

export default DiscoverEgypt;