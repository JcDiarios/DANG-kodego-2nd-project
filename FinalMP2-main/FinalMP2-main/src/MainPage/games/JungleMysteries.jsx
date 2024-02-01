import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JungleMysteriesImage from "../games/gameimg/junglemysteries300200.webp"; // Include the appropriate file extension

const JungleMysteries = () => {
  return (
    <GamePreview
      imageUrl={JungleMysteriesImage}
      gameUrl="https://cdn.htmlgames.com/JungleMysteries/"
    />
  );
};

export default JungleMysteries;