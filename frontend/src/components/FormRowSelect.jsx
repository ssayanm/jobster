import propTypes from "prop-types";

export default function FormRowSelect({
  name,
  labelText,
  list = [],
  onChange,
  defaultValue = "",
}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        onChange={onChange}
        defaultValue={defaultValue || ""}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

FormRowSelect.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  labelText: propTypes.string,
  list: propTypes.any,
  defaultValue: propTypes.string,
  onChange: propTypes.func,
};
