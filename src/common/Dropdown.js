import "./Textbox.css";

const Dropdown = ({
  label,
  selectedValue,
  options,
  onChange,
  containerStyle,
  labelStyle,
  inpuStyle,
}) => {
  return (
    <>
      <div className="input-container" style={containerStyle}>
        <div className="input-label" style={labelStyle}>
          {label}
        </div>
        <select
          className="input-select"
          value={selectedValue}
          onChange={onChange}
        >
          {options?.length > 0 &&
            options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
