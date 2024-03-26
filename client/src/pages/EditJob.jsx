import { Form, useLoaderData } from "react-router-dom";
import FormRow from "../components/FormRow";
import styled from "styled-components";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";
import FormRowSelect from "../components/FormRowSelect";
import SubmitBtn from "../components/SubmitBtn";

export default function EditJob() {
  const { job } = useLoaderData();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={job.jobLocation}
          />

          <FormRowSelect
            labelText="job type"
            name="jobType"
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />

          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            defaultValue={job.Status}
            list={Object.values(JOB_STATUS)}
          />
          <SubmitBtn formBtn />
        </div>{" "}
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
