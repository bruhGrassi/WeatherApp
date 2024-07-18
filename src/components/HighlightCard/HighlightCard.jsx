import PropTypes from "prop-types";
import PercentageLine from "../../components/PercentageLine/PercentageLine";
import Navigate from "../../assets/icons/navigate.png";
import "./HighlightCard.css";

const HighlightCard = ({ title, data, unit, other, range }) => {
  return (
    <div className="highlight-card">
      <div className="highlight-card__title">{title}</div>
      <div className="highlight-card__data">
        {data}
        <span>{unit}</span>
      </div>
      {other && (
        <div className="highlight-card__other">
          <span className="highlight-card__other--icon">
            <img src={Navigate} alt="Navigate arrow" />
          </span>
          WSW
        </div>
      )}
      {range && (
        <div className="highlight-card__range">
          <PercentageLine percentage={range} />
        </div>
      )}
    </div>
  );
};

HighlightCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.number,
  unit: PropTypes.string,
  other: PropTypes.bool,
  range: PropTypes.number,
};

export default HighlightCard;
