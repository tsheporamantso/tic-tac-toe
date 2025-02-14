import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Player = ({
  initialName, symbol, isActive, onChangeName,
}) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    // When update state based on old value you pass a function.
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
    // console.log(isEditing)
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPlayerName(e.target.value);
  };

  // let editablePlayerName =
  // let btnCaption = 'Edit'

  // if (isEditing) {
  //   editablePlayerName =
  //   btnCaption = "Save"
  // }
  return (
    <li className={isActive ? 'active' : undefined}>
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
      <button type="button" onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

Player.propTypes = {
  initialName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChangeName: PropTypes.func.isRequired,
};

export default Player;
