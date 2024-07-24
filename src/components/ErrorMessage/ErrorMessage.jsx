import PropTypes from "prop-types";
import { Errortext } from "./styles";

const ErrorMessage = ({ error }) => {
  return error ? <Errortext>{error}</Errortext> : null;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
