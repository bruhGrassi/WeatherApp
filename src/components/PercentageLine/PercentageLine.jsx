import PropTypes from "prop-types";
import "./PercentageLine.css";

const PercentageLine = ({ percentage }) => {
  return (
    <div className="percentage__container">
      <div className="percentage__steps">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <progress
        className="percentage__progress"
        value={percentage}
        max="100"
      ></progress>
      <div className="percentage__label">%</div>
    </div>
  );
};

PercentageLine.propTypes = {
  percentage: PropTypes.number,
};

export default PercentageLine;
