import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RagdollDuelBoxingImage from "../games/gameimg/Ragdoll Duel_ Boxing - 512x340.jpeg"; // Include the appropriate file extension

const RagdollDuelBoxing = () => {
  return (
    <GamePreview
    name="Ragdoll Duel:Boxing"
    imageUrl={RagdollDuelBoxingImage}
    gameUrl="https://html5.gamedistribution.com/cc6b4f1fb4614129865b4d6aa609611f/?gd_sdk_referrer_url=https://gamedistribution.com/games/ragdoll-duel:-boxing"
    />
  );
};

export default RagdollDuelBoxing;
