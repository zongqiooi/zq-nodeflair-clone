/* eslint-disable react/prop-types */
const JobPagination = ({ currentPage, handleCurrentPageCallback }) => {
  const buttonSelectedStyle = {
    color: "white",
    backgroundColor: "#1fc76a",
    transition: "0.2s",
    outline: "none",
  };

  const buttonUnselectedStyle = {
    color: "#1fc76a",
    backgroundColor: "white",
    transition: "0.2s",
    outline: "none",
  };

  return (
    <div className="job-pagination">
      <span className="page-text">
        Page&nbsp;<strong>{currentPage}&nbsp;</strong>of&nbsp;<strong>2</strong>
      </span>
      <div className="page-square-buttons-container">
        <div
          onClick={() => handleCurrentPageCallback("1")}
          className="page-square-button-1"
          tabIndex="1"
          style={
            currentPage === "1" ? buttonSelectedStyle : buttonUnselectedStyle
          }
        >
          1
        </div>
        <div
          onClick={() => handleCurrentPageCallback("2")}
          className="page-square-button-2"
          tabIndex="2"
          style={
            currentPage === "2" ? buttonSelectedStyle : buttonUnselectedStyle
          }
        >
          2
        </div>
      </div>
    </div>
  );
};

export default JobPagination;
