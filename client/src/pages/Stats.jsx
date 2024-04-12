import StatsContainer from "../components/StatsContainer";
import ChartsContainer from "../components/ChartsContainer";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils/customFetch";

export const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  },
};

export default function Stats() {
  // const { defaultStats, monthlyApplications } = useLoaderData();

  const { data } = useQuery(statsQuery);

  const { defaultStats, monthlyApplications } = data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}
