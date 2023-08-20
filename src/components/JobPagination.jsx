const JobPagination = () => {
  return (
    <div className="job-pagination">
      <span className="page-text">
        Page&nbsp;<strong>1&nbsp;</strong>of&nbsp;<strong>2</strong>
      </span>
      <div className="page-square-buttons-container">
        <div className="page-square-button" tabIndex="1">
          1
        </div>
        <div className="page-square-button" tabIndex="1">
          2
        </div>
      </div>
    </div>
  );
};

export default JobPagination;
