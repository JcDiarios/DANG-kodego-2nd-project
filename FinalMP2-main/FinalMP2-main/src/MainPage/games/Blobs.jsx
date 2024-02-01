import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BlobsImage from "../games/gameimg/blobs300200.webp"; // Include the appropriate file extension

const Blobs = () => {
  return (
    <GamePreview
      imageUrl={BlobsImage}
      gameUrl="https://cdn.htmlgames.com/Blobs/"
    />
  );
};

export default Blobs;