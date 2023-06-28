import '../styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-gap"></div>
      <div className="loading-container">
        <div className="spinner">
          <div className="ball"></div>
          <div className="halfball"></div>
          <div className="secondball"> </div>
        </div>
        <div className="loading-text-container">
          <h2 className="loading-text loading-typed-out">Loading ...</h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;
