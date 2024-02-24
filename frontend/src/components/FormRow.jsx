import propTypes from "prop-types";

export default function FormRow({ type, name, labelText, defaultValue = "" }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
}

FormRow.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  labelText: propTypes.string,
  defaultValue: propTypes.string,
};
