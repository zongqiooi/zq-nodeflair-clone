/* eslint-disable react/prop-types */
const JobPagination = ({ currentPage, setCurrentPageCallback }) => {
  return (
    <div className="job-pagination">
      <span className="page-text">
        Page&nbsp;<strong>{currentPage}&nbsp;</strong>of&nbsp;<strong>2</strong>
      </span>
      <div className="page-square-buttons-container">
        <div
          onClick={() => setCurrentPageCallback("1")}
          className="page-square-button-1"
          tabIndex="1"
        >
          1
        </div>
        <div
          onClick={() => setCurrentPageCallback("2")}
          className="page-square-button-2"
          tabIndex="2"
        >
          2
        </div>
      </div>
    </div>
  );
};

export default JobPagination;
