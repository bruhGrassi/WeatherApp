import PropTypes from "prop-types";
import { ErrorText } from "./styles";

const ErrorMessage = ({ error }) => {
  return error ? <ErrorText>{error}</ErrorText> : null;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
