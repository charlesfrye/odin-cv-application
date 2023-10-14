import PropTypes from "prop-types";

const Input = ({
  name,
  placeholder,
  value,
  onChange,
  index,
  section,
  isEditMode,
}) => {
  const inputStyles = isEditMode ? "editable" : "readonly";

  return (
    <input
      className={inputStyles}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e, index, section)}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number,
  section: PropTypes.string,
  isEditMode: PropTypes.bool.isRequired,
};

export default Input;
