import React, { useState } from "react";

const Player = ({name, symbol}) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(!isEditing);
    // console.log(isEditing)
  }

  let playerName = <span className="player-name">{name}</span>
  // let btnCaption = 'Edit'

  if (isEditing) {
    playerName = <input type="text" required value={name} />
    // btnCaption = "Save"
  }
  return (
      <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
  );
};

export default Player;
