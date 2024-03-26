import { useLoaderData } from "react-router-dom";
import StatsContainer from "../components/StatsContainer";
import ChartsContainer from "../components/ChartsContainer";

export default function Stats() {
  const { defaultStats, monthlyApplications } = useLoaderData();

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}
