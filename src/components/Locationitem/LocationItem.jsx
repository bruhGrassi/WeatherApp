import PropTypes from "prop-types";
import RightArrow from "../../assets/icons/right-arrow.png";
import "./LocationItem.css";

const LocationItem = ({ text, handleLocation }) => {
  return (
    <button className="location-item" onClick={handleLocation}>
      {text}
      <img src={RightArrow} alt="Arrow right icon" />
    </button>
  );
};

LocationItem.propTypes = {
  text: PropTypes.string,
  handleLocation: PropTypes.func,
};

export default LocationItem;
