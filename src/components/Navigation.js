const Navigation = ({ score, bestScore }) => {
  return (
    <div className="navigation">
      <h1>PokeGuess</h1>
      <div className="scoreboard">
        <h3 className="score-text bestscore">Best Score - {bestScore}</h3>
        <h3 className="score-text score">Score - {score}</h3>
      </div>
    </div>
  );
};

export default Navigation;
