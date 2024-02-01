import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SlidonMahjongSlideImage from "../games/gameimg/slidon300200.webp"; // Include the appropriate file extension

const SlidonMahjongSlide = () => {
  return (
    <GamePreview
      imageUrl={SlidonMahjongSlideImage}
      gameUrl="https://cdn.htmlgames.com/Slidon/"
    />
  );
};

export default SlidonMahjongSlide;