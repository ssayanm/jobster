import StatsContainer from "../components/StatsContainer";
import ChartsContainer from "../components/ChartsContainer";
import { useQuery } from "@tanstack/react-query";
import { statsQuery } from "../utils/query";

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
