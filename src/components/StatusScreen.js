import '../styles/Status.css';

const StatusScreen = ({ status, onReset }) => {
  return (
    <div className="status-screen">
      <div className="status-gap"></div>
      <div className="status-container">
        <div className={`status-info status-info-${status}`}>
          <h2 className="status-text">
            {status === 'won'
              ? '😁 You Have Won the Game!'
              : '😢 You Have Lost the Game'}
          </h2>
          <button
            className={`status-button status-button-${status}`}
            onClick={onReset}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusScreen;
