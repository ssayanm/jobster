import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import StatItem from "../components/StatItem";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { adminQuery } from "../utils/query";

export default function Admin() {
  const { data } = useQuery(adminQuery);
  const { users, jobs } = data;

  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
      ;
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
