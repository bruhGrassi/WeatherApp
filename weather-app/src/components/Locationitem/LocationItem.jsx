import PropTypes from "prop-types";
import RightArrow from "../../assets/icons/right-arrow.png";
import "./LocationItem.css";

const LocationItem = ({ handleLocation, text }) => {
  return (
    <button className="location-item" onClick={handleLocation}>
      {text}
      <img src={RightArrow} alt="Arrow right icon" />
    </button>
  );
};

LocationItem.propTypes = {
  handleLocation: PropTypes.func,
  text: PropTypes.string,
};

export default LocationItem;
