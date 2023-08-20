import JobCard from "./JobCard";
import JobPagination from "./JobPagination";

const JobLists = () => {
  return (
    <div className="job-lists">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobPagination />
    </div>
  );
};

export default JobLists;
