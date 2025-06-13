const Loader = () => {
  return (
    <center>
      <h2>The Deployed Server is slow initially Please Wait</h2>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </center>
  );
};
export default Loader;
