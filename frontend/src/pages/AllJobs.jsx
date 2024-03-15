import { useLoaderData } from "react-router-dom";
import SearchContainer from "../components/SearchContainer";
import JobsContainer from "../components/JobsContainer";
import AllJobsContext from "../context/AllJobsContext";

const AllJobs = () => {
  const { data } = useLoaderData();
  const { jobs } = data;

  return (
    <AllJobsContext.Provider
      value={{
        jobs,
      }}
    >
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs;
