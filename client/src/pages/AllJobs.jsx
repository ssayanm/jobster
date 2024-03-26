import { useLoaderData } from "react-router-dom";
import SearchContainer from "../components/SearchContainer";
import JobsContainer from "../components/JobsContainer";
import AllJobsContext from "../context/AllJobsContext";

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider
      value={{
        data,
        searchValues,
      }}
    >
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs;
