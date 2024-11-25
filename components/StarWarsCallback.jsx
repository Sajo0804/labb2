
import React, { useCallback } from 'react';
import { css } from '@emotion/css'

function StarWarsCallback() {
  const handleLightsaberActivation = useCallback(() => {
    console.log("MAY THE FORCE BE WITH YOU!");
    alert("This is where the fun begins!");


    return "LJUSSVÄRD AKTIVERAD!";
  }, []);

  return (
    <button onClick={handleLightsaberActivation} className={css`  background-color: #000000;
  border: none;
  padding: 15px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  display:grid;
  margin:20%;
  `}>
      <span className={css`  color: #ffffff;
  font-weight: bold;`}>AKTIVERA LJUSSVÄRD</span>
      <div className={css`  width: 100%;
  height: 2px;
  background-color: #ff0000;
  margin-top: 8px;
  &:active {
  transform: translateY(2px);
  box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);`}></div>
    </button>
  );
}

export default StarWarsCallback;
