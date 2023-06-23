const Error = ({ data }) => {
  console.log(data, 'the data');
  return (
    <div className="error">
      <div className="error-message">
        <h2 className="error-title">X {data.message}</h2>
        <p className="actual-error">{data.error}</p>
      </div>
    </div>
  );
};

export default Error;
