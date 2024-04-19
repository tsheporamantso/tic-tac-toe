/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';

const GameBoard = ({ onSelectSquare, board }) => (
  <ol id="game-board">
    {board.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button
                type="button"
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                disabled={playerSymbol !== null}
              >
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
);

GameBoard.propTypes = {
  onSelectSquare: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string),
  ).isRequired,
};

export default GameBoard;
