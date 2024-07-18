import PropTypes from "prop-types";
import "./RoundButton.css";

const RoundButton = ({ onClick, children, variant, isActive }) => {
  const buttonClasses = [
    "round-button",
    `round-button__${variant}`,
    isActive ? "round-button--active" : "",
  ].join(" ");

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

RoundButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
  isActive: PropTypes.bool,
};

export default RoundButton;
