
import React, { useCallback } from 'react';

function StarWarsCallback() {
  const handleLightsaberActivation = useCallback(() => {
    console.log("MAY THE FORCE BE WITH YOU!");
    alert("Your lightsaber is activating!");


    return "LJUSSVÄRD AKTIVERAD!";
  }, []);

  return (
    <button onClick={handleLightsaberActivation} className="star-wars-button">
      <span>AKTIVERA LJUSSVÄRD</span>
      <div className="button-border"></div>
    </button>
  );
}

export default StarWarsCallback;
