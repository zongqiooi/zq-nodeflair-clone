/* eslint-disable react/prop-types */
import { useState } from "react";
import companiesData from "../data/companyData";
import JobCard from "./JobCard";
import JobPagination from "./JobPagination";

const JobLists = ({ handleJobTitleCallback }) => {
  const [currentPage, setCurrentPage] = useState("1");

  // Changing the job lists after clicked page 1 or page 2
  const handleCurrentPageCallback = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="job-lists">
      {currentPage === "1"
        ? companiesData
            .slice(0, 3)
            .map((companyData, index) => (
              <JobCard
                key={index}
                companyData={companyData}
                handleJobTitleCallback={handleJobTitleCallback}
              />
            ))
        : companiesData
            .slice(3, 6)
            .map((companyData, index) => (
              <JobCard
                key={index}
                companyData={companyData}
                handleJobTitleCallback={handleJobTitleCallback}
              />
            ))}
      <JobPagination
        currentPage={currentPage}
        handleCurrentPageCallback={handleCurrentPageCallback}
      />
    </div>
  );
};

export default JobLists;
