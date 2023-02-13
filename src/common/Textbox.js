import "./Textbox.css";

const Textbox = ({
  label,
  value,
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
        <input
          type={"text"}
          className="input-text"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Textbox;
