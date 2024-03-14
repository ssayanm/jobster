import styled from "styled-components";
import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const data = useLoaderData();

  const { jobs } = data;
  console.log(jobs);

  return (
    <Wrapper>
      <h2>AllJobs</h2>
    </Wrapper>
  );
};

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

export default AllJobs;
