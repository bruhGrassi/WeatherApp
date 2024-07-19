import PropTypes from "prop-types";
import "./RoundButton.css";

const RoundButton = ({ children, variant, isActive, onClick }) => {
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
  children: PropTypes.node,
  variant: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default RoundButton;
