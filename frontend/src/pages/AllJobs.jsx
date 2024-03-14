import { useLoaderData } from "react-router-dom";
import SearchContainer from "../components/SearchContainer";
import JobsContainer from "../components/JobsContainer";
import JobContext from "../context/JobContext";

const AllJobs = () => {
  const { data } = useLoaderData();
  const { jobs } = data;

  return (
    <JobContext.Provider
      value={{
        jobs,
      }}
    >
      <SearchContainer />
      <JobsContainer />
    </JobContext.Provider>
  );
};

export default AllJobs;
