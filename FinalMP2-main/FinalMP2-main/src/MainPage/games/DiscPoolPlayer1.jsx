import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DiscPoolPlayer1Image from "../games/gameimg/discpool1player300200.webp"; // Include the appropriate file extension

const DiscPoolPlayer1 = () => {
  return (
    <GamePreview
      imageUrl={DiscPoolPlayer1Image}
      gameUrl="https://cdn.htmlgames.com/DiscPool1Player/"
    />
  );
};

export default DiscPoolPlayer1;