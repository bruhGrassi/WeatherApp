import PropTypes from "prop-types";
import {
  PercentageContainer,
  PercentageSteps,
  PercentageProgress,
  PercentageLabel,
} from "./styles";

const PercentageLine = ({ percentage }) => {
  return (
    <PercentageContainer>
      <PercentageSteps>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </PercentageSteps>
      <PercentageProgress value={percentage} max="100"></PercentageProgress>
      <PercentageLabel>%</PercentageLabel>
    </PercentageContainer>
  );
};

PercentageLine.propTypes = {
  percentage: PropTypes.number,
};

export default PercentageLine;
