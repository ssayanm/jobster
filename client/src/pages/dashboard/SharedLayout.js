import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-jobs">all jobs</Link>
        <Link to="add-job">add a job</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

export default SharedLayout;
