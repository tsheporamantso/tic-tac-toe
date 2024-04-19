import React from 'react';
import PropTypes from 'prop-types';

const Log = ({ turns }) => (
  <ol id="log">
    {turns.map((turn) => (
      <li key={`${turn.square.row}${turn.square.col}`}>
        {turn.player}
        {' '}
        selected
        {turn.square.row}
        ,
        {turn.square.col}
      </li>
    ))}
  </ol>
);

Log.propTypes = {
  turns: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.string.isRequired,
      square: PropTypes.shape({
        row: PropTypes.number.isRequired,
        col: PropTypes.number.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default Log;
