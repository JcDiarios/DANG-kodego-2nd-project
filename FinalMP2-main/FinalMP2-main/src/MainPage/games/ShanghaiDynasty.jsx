import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ShanghaiDynastyImage from "../games/gameimg/shanghaidynasty300200.webp"; // Include the appropriate file extension

const ShanghaiDynasty = () => {
  return (
    <GamePreview
      imageUrl={ShanghaiDynastyImage}
      gameUrl="https://cdn.htmlgames.com/ShanghaiDynasty/"
      />
  );
};

export default ShanghaiDynasty;