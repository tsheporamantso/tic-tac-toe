import PropTypes from 'prop-types';

const GameOver = ({ winner, onRestart }) => (
  <div id="game-over">
    <h2>Game Over!</h2>
    {winner && (
      <p>
        {winner}
        {' '}
        won!
      </p>
    )}
    {!winner && <p>It&apos;s a draw!</p>}
    <p><button type="button" onClick={onRestart}>Rematch!</button></p>
  </div>
);

GameOver.propTypes = {
  winner: PropTypes.string,
  onRestart: PropTypes.func.isRequired,
};

GameOver.defaultProps = {
  winner: null,
};

export default GameOver;
