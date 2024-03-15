import { createContext, useContext } from "react";

const AllJobsContext = createContext();

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobsContext;
