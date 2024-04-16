import SearchContainer from "../components/SearchContainer";
import JobsContainer from "../components/JobsContainer";
import AllJobsContext from "../context/AllJobsContext";
import { allJobsQuery } from "../utils/query";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));

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
