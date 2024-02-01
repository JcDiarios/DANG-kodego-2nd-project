import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PartyJongImage from "../games/gameimg/partyjong300200.webp"; // Include the appropriate file extension

const PartyJong = () => {
  return (
    <GamePreview
      imageUrl={PartyJongImage}
      gameUrl="https://cdn.htmlgames.com/PartyJong/"
    />
  );
};

export default PartyJong;