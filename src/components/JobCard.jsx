import JobTechStack from "./JobTechStack";

/* eslint-disable react/prop-types */
const JobCard = ({ companyData, handleJobTitleCallback }) => {
  return (
    <div
      className="job-card"
      tabIndex="1"
      onClick={() => handleJobTitleCallback(companyData.title)}
    >
      <div className="job-card-flex-container">
        <div className="top-portion-flex-container">
          <div className="job-card-left-middle-flex-container">
            <div className="job-card-left">
              <img
                className="company-logo"
                src={companyData.image}
                alt="company-image"
              />
            </div>
            <div className="job-card-middle">
              <div className="company-title-and-ratings-flex-container">
                <div className="company-title">{companyData.name}</div>
                <div className="rating">{companyData.rating} ★</div>
              </div>
              <h2 className="role-title">{companyData.title}</h2>
              <div>
                <span className="posting-date">{companyData.postingDate} </span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="map-marker-alt"
                  className="svg-icon country"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                  ></path>
                </svg>{" "}
                <span className="country">{companyData.location}</span>
              </div>
              <div className="salary">{companyData.salary}</div>
            </div>
          </div>
          <div className="job-card-right">
            <div className="role-button">{companyData.role}</div>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="btm-portion-flex-container">
          <div className="tech-stacks-flex-container">
            {companyData.techStacks.map((techStack, index) => (
              <JobTechStack key={index} techStack={techStack} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
