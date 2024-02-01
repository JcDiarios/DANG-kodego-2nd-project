import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AddItUpImage from "../games/gameimg/additup-300x200.webp"; // Include the appropriate file extension

const AddItUp = () => {
  return (
    <GamePreview
      imageUrl={AddItUpImage}
      gameUrl="https://cdn.htmlgames.com/AddItUp/"
    />
  );
};

export default AddItUp;