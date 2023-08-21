import { useState } from "react";
import JobDetails from "./components/JobDetails";
import JobLists from "./components/JobLists";
import "../src/assets/styles/style.css";
import Footer from "./components/Footer";

function App() {
  const [jobTitle, setJobTitle] = useState("👋😆");

  const handleJobTitleCallback = (selectedJobTitle) => {
    setJobTitle(selectedJobTitle);
  };

  return (
    <div className="main-container">
      <div className="panel-flex-container">
        <JobLists handleJobTitleCallback={handleJobTitleCallback} />
        <JobDetails jobTitle={jobTitle} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
