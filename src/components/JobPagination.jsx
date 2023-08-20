import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
const JobPagination = ({ currentPage, handleCurrentPageCallback }) => {
  const buttonOneRef = useRef();

  useEffect(() => {
    buttonOneRef.current.focus();
  }, []);

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
          ref={buttonOneRef}
        >
          1
        </div>
        <div
          onClick={() => handleCurrentPageCallback("2")}
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
