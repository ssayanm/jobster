import { useLoaderData } from "react-router-dom";
import SearchContainer from "../components/SearchContainer";
import JobsContainer from "../components/JobsContainer";
import AllJobsContext from "../context/AllJobsContext";

const AllJobs = () => {
  const { data } = useLoaderData();

  return (
    <AllJobsContext.Provider
      value={{
        data,
      }}
    >
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs;
