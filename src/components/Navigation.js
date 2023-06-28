import '../styles/Navigation.css';

const Navigation = ({ theme, score, bestScore }) => {
  return (
    <div className={`navigation navigation-${theme}`}>
      <div className="title-holder">
        <h1 className="title">Poke Guess</h1>
      </div>
      <div className="scoreboard">
        <h3 className="score-text bestscore">Best Score - {bestScore}</h3>
        <h3 className="score-text score">Score - {score}</h3>
      </div>
    </div>
  );
};

export default Navigation;
