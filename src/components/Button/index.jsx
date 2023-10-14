import PropTypes from "prop-types";

const Button = ({ label, onClick, variant }) => {
  variant = variant || "primary";
  return (
    <button onClick={onClick} className={variant}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

export default Button;
