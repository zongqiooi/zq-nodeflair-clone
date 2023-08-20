import { useState } from "react";
import companiesData from "../../public/assets/data/companyData";
import JobCard from "./JobCard";
import JobPagination from "./JobPagination";
// Import data
// keep track current page using "useState"

const JobLists = () => {
  const [currentPage, setCurrentPage] = useState("1");

  const setCurrentPageCallback = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="job-lists">
      {currentPage === "1"
        ? companiesData
            .slice(0, 3)
            .map((companyData, index) => (
              <JobCard key={index} companyData={companyData} />
            ))
        : companiesData
            .slice(3, 6)
            .map((companyData, index) => (
              <JobCard key={index} companyData={companyData} />
            ))}
      <JobPagination
        currentPage={currentPage}
        setCurrentPageCallback={setCurrentPageCallback}
      />
    </div>
  );
};

export default JobLists;
