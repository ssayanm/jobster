import styled from "styled-components";
import { jobLoader } from "../utils/loader";
import { useLoaderData } from "react-router-dom";

export default function AllJobs() {
  const { data } = useLoaderData(jobLoader);

  const { jobs } = data;
  console.log(jobs);

  return (
    <Wrapper>
      <h2>AllJobs</h2>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
