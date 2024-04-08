import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(() => !isEditing); // When update state based on old value you pass a function
    // setIsEditing((editing) => !editing);
    // console.log(isEditing)
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  // let editablePlayerName =
  // let btnCaption = 'Edit'

  // if (isEditing) {
  //   editablePlayerName =
  //   btnCaption = "Save"
  // }
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
