import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MedievalBattle2pImage from "../games/gameimg/Medieval Battle 2P - 512x340.jpeg"; // Include the appropriate file extension

const MedievalBattle2p = () => {
  return (
    <GamePreview
    name="Medieval Battle 2P"
    imageUrl={MedievalBattle2pImage}
    gameUrl="https://html5.gamedistribution.com/b5402948bda04db1840a137d77678712/?gd_sdk_referrer_url=https://gamedistribution.com/games/medieval-battle-2p"
    />
  );
};

export default MedievalBattle2p;
