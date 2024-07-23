import PropTypes from "prop-types";
import styled from "styled-components";

const Errortext = styled.p`
  font-size: 1rem;
  color: var(--color-error);
  padding-top: 0.5rem;
`;

const ErrorMessage = ({ error }) => {
  return error ? <Errortext>{error}</Errortext> : null;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
