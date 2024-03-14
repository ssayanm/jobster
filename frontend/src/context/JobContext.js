import { createContext, useContext } from "react";

const JobContext = createContext();

export const useJobContext = () => useContext(JobContext);

export default JobContext;
