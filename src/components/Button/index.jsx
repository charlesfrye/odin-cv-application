import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label, onClick, variant }) => {
  variant = variant || "primary";
  return (
    <button onClick={onClick} className={"button button--" + variant}>
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
