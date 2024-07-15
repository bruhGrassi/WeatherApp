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

export default RoundButton;
