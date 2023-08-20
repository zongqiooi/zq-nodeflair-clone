const JobCard = () => {
  return (
    <div className="job-card">
      <div className="job-card-flex-container">
        <div className="top-portion-flex-container">
          <div className="job-card-left">
            <img
              className="company-logo"
              src="./src/assets/companies/meta.png"
              alt="company-image"
            />
          </div>
          <div className="job-card-middle">
            <div className="company-title-and-ratings-flex-container">
              <div className="company-title">Meta</div>
              <div className="rating">4.3 ★</div>
            </div>
            <h2 className="role-title">Data Engineer, Product Analytics</h2>
            <div>
              <span className="posting-date">22 days ago </span>
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
              <span className="country">Singapore</span>
            </div>
            <div className="salary">S$7,700 - S$15,400 / mth</div>
          </div>
          <div className="job-card-right">
            <div className="role-button">Data Eng</div>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="btm-portion-flex-container">
          <div className="tech-stacks-flex-container">
            <div className="tech-stack-button">Strategy</div>
            <div className="tech-stack-button">ETL</div>
            <div className="tech-stack-button">C++</div>
            <div className="tech-stack-button">SQL</div>
            <div className="tech-stack-button">Scala</div>
            <div className="tech-stack-button">Python</div>
            <div className="tech-stack-button">Python</div>
            <div className="tech-stack-button">Python</div>
            <div className="tech-stack-button">Python</div>
            <div className="tech-stack-button">Python</div>
            <div className="tech-stack-button">Python</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
