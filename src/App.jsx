import "./styles/style.css";
import JobDetails from "./components/JobDetails";
import JobLists from "./components/JobLists";

function App() {
  return (
    <div className="main-container">
      <div className="panel-flex-container">
        <JobLists />
        <JobDetails />
      </div>
    </div>
  );
}

export default App;
