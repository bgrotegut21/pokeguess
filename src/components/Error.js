import '../styles/Error.css';
const Error = ({ data }) => {
  return (
    <div className="error">
      <div className="error-gap"></div>
      <div className="error-message">
        <div className="error-info">
          <h2 className="error-title">X {data.message}</h2>
          <p className="actual-error">{data.error}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
