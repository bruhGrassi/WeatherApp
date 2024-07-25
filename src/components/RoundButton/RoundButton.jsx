import PropTypes from "prop-types";
import { Button } from "./styles";

const RoundButton = ({ children, variant, isActive, onClick }) => {
  return (
    <Button $variant={variant} isActive={isActive} onClick={onClick}>
      {children}
    </Button>
  );
};

RoundButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  isActive: PropTypes.bool,
  $variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default RoundButton;
