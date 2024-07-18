import PropTypes from "prop-types";
import "./ErrorMessage.css";

const ErrorMessage = ({ error }) => {
  return <p className="error-message">{error}</p>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
