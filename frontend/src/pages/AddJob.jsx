import { Form, useNavigation, useOutletContext } from "react-router-dom";
import FormRow from "../components/FormRow";
import styled from "styled-components";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";

export default function AddJob() {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
      </Form>
      <div className="form-center">
        <FormRow type="text" name="position" />
        <FormRow type="text" name="company" />
        <FormRow
          type="text"
          labelText="job location"
          name="jobLocation"
          defaultValue={user.location}
        />

        <div className="form-row">
          <label htmlFor="jobStatus" className="form-label">
            job type
          </label>
          <select
            name="jobStatus"
            id="jobStatus"
            className="form-select"
            // defaultValue={JOB_TYPE.PART_TIME}
          >
            {Object.values(JOB_TYPE).map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="jobStatus" className="form-label">
            job status
          </label>
          <select
            name="jobStatus"
            id="jobStatus"
            className="form-select"
            defaultValue={JOB_STATUS.pending}
          >
            {Object.values(JOB_STATUS).map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-block form-btn "
          disabled={isSubmitting}
        >
          {isSubmitting ? "submitting..." : "submit"}
        </button>
      </div>
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
