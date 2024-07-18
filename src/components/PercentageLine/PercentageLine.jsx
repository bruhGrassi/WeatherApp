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
      <div className="percentage__background">
        <div
          className="percentage__foreground"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="percentage__label">%</div>
    </div>
  );
};

PercentageLine.propTypes = {
  percentage: PropTypes.number,
};

export default PercentageLine;
