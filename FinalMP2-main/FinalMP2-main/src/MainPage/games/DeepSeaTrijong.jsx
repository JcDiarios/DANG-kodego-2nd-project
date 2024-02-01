import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DeepSeaTrijongImage from "../games/gameimg/deepseatrijong300200.webp"; // Include the appropriate file extension

const DeepSeaTrijong = () => {
  return (
    <GamePreview
      imageUrl={DeepSeaTrijongImage}
      gameUrl="https://cdn.htmlgames.com/DeepSeaTrijong/"
    />
  );
};

export default DeepSeaTrijong;