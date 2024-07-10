import "./RoundButton.css";

const RoundButton = ({ onClick, children, variant }) => {
  return (
    <button
      onClick={onClick}
      className={`round-button round-button__${variant}`}
    >
      {children}
    </button>
  );
};

export default RoundButton;
